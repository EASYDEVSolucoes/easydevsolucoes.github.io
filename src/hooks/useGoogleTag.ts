"use client";

import { trackContact, trackLead, trackWhatsAppClick } from "@/lib/analytics";

/**
 * Mantido para compatibilidade. Os eventos agora ficam em src/lib/analytics.ts
 * e só disparam depois do aceite de cookies. Cada função já envia para o
 * Pixel da Meta e para o Google de uma vez: chame só um dos dois hooks.
 */
export const useGoogleTag = () => ({
  trackLead: () => trackLead("form"),
  trackContact: (method: string) => trackContact(method === "phone" ? "phone" : "email"),
  trackWhatsAppClick: () => trackWhatsAppClick("hook"),
  trackFormSubmit: (formName: string) => trackLead(formName),
});
