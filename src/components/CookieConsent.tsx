"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { OPEN_EVENT, openConsentBanner, readConsent, writeConsent } from "@/lib/consent";

/**
 * Aviso de cookies. Google Analytics, Tag Manager e Pixel da Meta só são
 * carregados depois do "Aceitar". Recusar tem o mesmo destaque que aceitar.
 */
export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (readConsent() === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  if (!open) return null;

  const choose = (value: "granted" | "denied") => {
    writeConsent(value);
    setOpen(false);
  };

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-4 bottom-4 z-[60] rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-md sm:p-6"
    >
      <p className="text-sm leading-relaxed text-gray-700">
        A gente usa cookies de medição (Google Analytics e Pixel da Meta) para saber quais páginas
        ajudam quem visita o site. Eles só são ligados se você aceitar.{" "}
        <Link href="/politica-privacidade/" className="font-medium text-primary-text underline underline-offset-2">
          Política de privacidade
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose("granted")} className="btn-primary btn-sm">
          Aceitar
        </button>
        <button type="button" onClick={() => choose("denied")} className="btn-secondary btn-sm">
          Recusar
        </button>
      </div>
    </div>
  );
}

/** Link do rodapé para rever a escolha. */
export function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openConsentBanner} className={className}>
      Preferências de cookies
    </button>
  );
}
