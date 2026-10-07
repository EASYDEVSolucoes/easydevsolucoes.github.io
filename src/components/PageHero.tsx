import Link from "next/link";
import type { ReactNode } from "react";
import Headline from "./Headline";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";

/** Topo das páginas internas: selo, título com a palavra em dourado, apoio e o CTA. */
export default function PageHero({
  chip,
  title,
  lead,
  note,
  whatsappMessage,
  origin,
  showCta = true,
  children,
}: {
  chip: string;
  title: readonly [string, string, string];
  lead: string;
  /** Linha pequena abaixo dos botões: dado de mercado, condição. */
  note?: ReactNode;
  whatsappMessage?: string;
  origin: string;
  showCta?: boolean;
  /** Conteúdo ao lado do título (card de preço, formulário). */
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-44" aria-labelledby="titulo-pagina">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full bg-[radial-gradient(closest-side,#F4EFDE,transparent)]"
      />
      <div
        className={`container-page relative grid grid-cols-1 gap-12 ${
          children ? "items-start lg:grid-cols-[1.1fr_0.9fr]" : ""
        }`}
      >
        <div className={children ? "" : "max-w-3xl"}>
          <p className="chip mb-6">{chip}</p>
          <Headline id="titulo-pagina" parts={title} />
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-gray-700">{lead}</p>
          {showCta && (
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/diagnostico/" className="btn-primary">
                Peça seu diagnóstico gratuito
              </Link>
              <WhatsAppLink message={whatsappMessage} origin={origin} className="btn-whatsapp">
                <WhatsAppIcon className="h-5 w-5 text-whatsapp-dark" />
                Chamar no WhatsApp
              </WhatsAppLink>
            </div>
          )}
          {note && <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-700">{note}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
