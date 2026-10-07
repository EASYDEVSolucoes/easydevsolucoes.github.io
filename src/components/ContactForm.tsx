"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { diagnostico } from "@/data/offers";
import { trackLead } from "@/lib/analytics";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Formulário do diagnóstico: três campos obrigatórios e um opcional.
 *
 * O envio usa o mesmo serviço e o mesmo modelo do EmailJS do formulário antigo,
 * com as mesmas variáveis: name, email, subject e message. O WhatsApp e o
 * endereço do site vão dentro de message, então o modelo não precisa mudar.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Campo-isca: gente não vê, robô preenche
    if (data.get("empresa_url")) {
      setStatus("sent");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const whatsapp = String(data.get("whatsapp") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const presence = String(data.get("presence") ?? "").trim();

    setStatus("sending");
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) throw new Error("EmailJS não configurado");

      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          subject: `Pedido de diagnóstico: ${name}`,
          message: [
            "Pedido de diagnóstico gratuito pelo site.",
            `Nome: ${name}`,
            `WhatsApp: ${whatsapp}`,
            `E-mail: ${email}`,
            `Site ou Instagram: ${presence || "não informado"}`,
            `Página: ${window.location.pathname}`,
          ].join("\n"),
        },
        { publicKey }
      );

      trackLead("diagnostico");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl bg-primary-tint p-6">
        <h3 className="text-xl font-bold text-gray-900">Pedido recebido.</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          A gente chama você no WhatsApp em até 1 dia útil para marcar a conversa de 30 minutos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-describedby="form-nota">
      <div>
        <label htmlFor="name" className="field-label">
          Seu nome
        </label>
        <input type="text" name="name" id="name" required autoComplete="name" className="field-input" />
      </div>
      <div>
        <label htmlFor="whatsapp" className="field-label">
          WhatsApp
        </label>
        <input
          type="tel"
          name="whatsapp"
          id="whatsapp"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="(31) 90000-0000"
          className="field-input"
        />
      </div>
      <div>
        <label htmlFor="email" className="field-label">
          E-mail
        </label>
        <input type="email" name="email" id="email" required autoComplete="email" className="field-input" />
      </div>
      <div>
        <label htmlFor="presence" className="field-label">
          Site ou Instagram da empresa <span className="font-normal text-gray-600">(opcional)</span>
        </label>
        <input
          type="text"
          name="presence"
          id="presence"
          placeholder="suaempresa.com.br ou @suaempresa"
          className="field-input"
        />
      </div>

      {/* Campo-isca contra robôs: fica fora da tela e fora da navegação por teclado */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="empresa_url">Não preencha este campo</label>
        <input type="text" name="empresa_url" id="empresa_url" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <p>Não deu para enviar agora. Tente de novo ou chame direto no WhatsApp:</p>
          <WhatsAppLink
            message={diagnostico.whatsappMessage}
            origin="formulario-erro"
            className="mt-2 inline-flex items-center gap-2 font-bold underline underline-offset-2"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pedir pelo WhatsApp
          </WhatsAppLink>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className={`btn-primary w-full ${status === "sending" ? "cursor-wait opacity-75" : ""}`}
      >
        {status === "sending" ? "Enviando..." : "Pedir meu diagnóstico gratuito"}
      </button>

      <p id="form-nota" className="text-sm leading-relaxed text-gray-700">
        Seus dados são usados só para responder a este pedido.{" "}
        <Link href="/politica-privacidade/" className="font-medium text-primary-text underline underline-offset-2">
          Política de privacidade
        </Link>
      </p>
    </form>
  );
}
