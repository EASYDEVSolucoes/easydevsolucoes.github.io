"use client";

import { usePathname } from "next/navigation";
import { diagnostico, offers } from "@/data/offers";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";

/** Mensagem do botão flutuante conforme a página em que a pessoa está. */
const messages: Record<string, string> = {
  [diagnostico.slug]: diagnostico.whatsappMessage,
  ...Object.fromEntries(offers.map((offer) => [offer.slug, offer.whatsappMessage])),
};

export default function WhatsAppButton() {
  const pathname = usePathname() ?? "/";
  const slug = pathname.split("/").filter(Boolean)[0] ?? "";

  return (
    <WhatsAppLink
      message={messages[slug]}
      origin="flutuante"
      ariaLabel="Chamar a EasyDev no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full text-white bg-gradient-to-br from-whatsapp to-whatsapp-dark shadow-2xl transition-transform duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </WhatsAppLink>
  );
}
