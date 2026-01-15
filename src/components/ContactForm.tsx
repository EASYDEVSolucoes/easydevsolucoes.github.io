"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { trackFormSubmit, trackContact } = useFacebookPixel();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      formRef.current.reset();
      trackFormSubmit("contact_form");
      trackContact("email");
    } catch (err) {
      console.log(err);
      setError(
        "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."
      );
      console.error("Error sending email:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-200"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-200"
            placeholder="seu@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">
          Assunto
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-200"
          placeholder="Assunto da mensagem"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
          Mensagem
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-200"
          placeholder="Sua mensagem"
        ></textarea>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && (
        <p className="text-green-500 text-sm">
          Mensagem enviada com sucesso!
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className={`w-full btn-primary ${loading
            ? "opacity-75 cursor-not-allowed"
            : "hover:bg-primary-dark"
          }`}
      >
        {loading ? "Enviando..." : "Enviar Mensagem"}
      </button>
    </form>
  );
}
