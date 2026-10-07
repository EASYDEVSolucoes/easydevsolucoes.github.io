"use client";

import type { ReactNode } from "react";
import { whatsappLink } from "@/data/site";
import { trackWhatsAppClick } from "@/lib/analytics";

/**
 * Link de WhatsApp de verdade: o endereço wa.me com o 55 está no HTML,
 * funciona sem JavaScript e pode ser copiado. O clique é medido como conversão.
 */
export default function WhatsAppLink({
  message,
  origin,
  className,
  children,
  ariaLabel,
}: {
  /** Mensagem que já vai escrita. Sem ela, usa a mensagem padrão do site. */
  message?: string;
  /** De onde o clique saiu, para o relatório: "hero", "rodape", "flutuante"... */
  origin: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackWhatsAppClick(origin)}
    >
      {children}
    </a>
  );
}
