import Link from "next/link";
import { site } from "@/data/site";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";

/** Chamada final de cada página. Um CTA só: pedir o diagnóstico. */
export default function Contact({
  title = "Quer saber o que está custando clientes à sua empresa?",
  text = "Peça o diagnóstico gratuito. Em 30 minutos você sai com 5 pontos para corrigir, mesmo que não contrate nada.",
  whatsappMessage,
  origin = "cta-final",
}: {
  title?: string;
  text?: string;
  whatsappMessage?: string;
  origin?: string;
}) {
  return (
    <section className="section-padding" aria-labelledby="cta-final">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white px-6 py-14 text-center shadow-lg sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,#F4EFDE,transparent)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 id="cta-final" className="text-balance text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-gray-700">{text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/diagnostico/" className="btn-primary">
                Peça seu diagnóstico gratuito
              </Link>
              <WhatsAppLink message={whatsappMessage} origin={origin} className="btn-whatsapp">
                <WhatsAppIcon className="h-5 w-5 text-whatsapp-dark" />
                Chamar no WhatsApp
              </WhatsAppLink>
            </div>
            <p className="mt-5 text-sm text-gray-700">
              {site.phoneDisplay} · {site.hours.display.toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
