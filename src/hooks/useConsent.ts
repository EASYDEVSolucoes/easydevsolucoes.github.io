"use client";

import { useSyncExternalStore } from "react";
import { type Consent, onConsentChange, readConsent } from "@/lib/consent";

function subscribe(callback: () => void): () => void {
  const stop = onConsentChange(callback);
  // escolha feita em outra aba do navegador
  window.addEventListener("storage", callback);
  return () => {
    stop();
    window.removeEventListener("storage", callback);
  };
}

/**
 * Escolha de cookies da pessoa:
 * - "granted" ou "denied": já escolheu;
 * - null: ainda não escolheu;
 * - undefined: ainda não dá para saber (HTML do servidor, antes de o navegador assumir).
 */
export function useConsent(): Consent | null | undefined {
  return useSyncExternalStore(subscribe, readConsent, () => undefined);
}
