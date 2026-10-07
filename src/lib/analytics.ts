/**
 * Eventos de conversão. As funções só fazem algo depois que a pessoa aceita os
 * cookies de medição: antes disso, fbq e gtag não existem na página.
 *
 * Conversões medidas: clique no WhatsApp e envio do formulário de diagnóstico.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function fbq(...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") window.fbq(...args);
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") window.gtag(...args);
}

function currentPage(): string {
  return typeof window === "undefined" ? "" : window.location.pathname;
}

/** Clique em qualquer link de WhatsApp. `origin` diz de onde saiu: "flutuante", "hero", "rodape"... */
export function trackWhatsAppClick(origin: string): void {
  const params = { origin, page: currentPage() };
  fbq("track", "Contact", { method: "whatsapp", ...params });
  gtag("event", "whatsapp_click", params);
}

/** Formulário enviado com sucesso. */
export function trackLead(form: string): void {
  const params = { form, page: currentPage() };
  fbq("track", "Lead", { content_name: form });
  gtag("event", "generate_lead", params);
}

/** Clique em e-mail ou telefone. */
export function trackContact(method: "email" | "phone"): void {
  const params = { method, page: currentPage() };
  fbq("track", "Contact", params);
  gtag("event", "contact", params);
}
