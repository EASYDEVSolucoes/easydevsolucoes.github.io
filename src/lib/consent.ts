/**
 * Consentimento de cookies de medição (Google Analytics, Tag Manager e Pixel da Meta).
 * Nada de medição é carregado antes de a pessoa aceitar.
 */

export type Consent = "granted" | "denied";

const KEY = "easydev-consent";
const EVENT = "easydev:consent";
export const OPEN_EVENT = "easydev:consent-open";

export function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: Consent): void {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* navegação privada: a escolha vale só para esta visita */
  }
  window.dispatchEvent(new CustomEvent<Consent>(EVENT, { detail: value }));
}

/** Avisa quando a escolha muda. Devolve a função que cancela a escuta. */
export function onConsentChange(callback: (value: Consent) => void): () => void {
  const handler = (event: Event) => callback((event as CustomEvent<Consent>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}

/** Reabre o aviso de cookies (link "Preferências de cookies" do rodapé). */
export function openConsentBanner(): void {
  window.dispatchEvent(new Event(OPEN_EVENT));
}
