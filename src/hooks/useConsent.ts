"use client";

import { useEffect, useState } from "react";
import { type Consent, onConsentChange, readConsent } from "@/lib/consent";

/** Escolha de cookies da pessoa: "granted", "denied" ou null enquanto não escolheu. */
export function useConsent(): Consent | null {
  const [consent, setConsent] = useState<Consent | null>(null);

  useEffect(() => {
    setConsent(readConsent());
    return onConsentChange(setConsent);
  }, []);

  return consent;
}
