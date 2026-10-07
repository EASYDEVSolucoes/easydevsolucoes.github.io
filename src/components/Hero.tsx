import Link from "next/link";
import { diagnostico } from "@/data/offers";
import Headline from "./Headline";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppLink from "./WhatsAppLink";

/** Topo da página inicial: posicionamento, CTA único e um exemplo de diagnóstico. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-44" aria-labelledby="hero-title">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full bg-[radial-gradient(closest-side,#F4EFDE,transparent)]"
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="chip mb-6">Tecnologia para pequenas empresas</p>
          <Headline id="hero-title" parts={["A equipe de ", "tecnologia", " da sua empresa."]} />
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-gray-700">
            Site que aparece no Google, WhatsApp que responde sozinho e sistema no lugar da planilha. Para
            empresas de 3 a 50 pessoas da Grande BH, com preço fechado e um sócio que responde.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/diagnostico/" className="btn-primary">
              Peça seu diagnóstico gratuito
            </Link>
            <WhatsAppLink origin="hero" className="btn-whatsapp">
              <WhatsAppIcon className="h-5 w-5 text-whatsapp-dark" />
              Chamar no WhatsApp
            </WhatsAppLink>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-700">
            São 30 minutos de conversa. Você sai com 5 pontos para corrigir, mesmo que não contrate nada.
          </p>
        </div>

        {/* Exemplo ilustrativo do que a pessoa recebe no diagnóstico */}
        <figure className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8">
          <figcaption className="mb-5 flex items-center justify-between gap-4">
            <span className="font-heading text-lg font-bold text-gray-900">Diagnóstico Digital</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-700">
              Exemplo
            </span>
          </figcaption>
          <ol className="space-y-3">
            {diagnostico.example.map((item, index) => (
              <li key={item.title} className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
                <span
                  className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-tint-strong font-heading text-lg font-bold text-primary-text"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <span>
                  <span className="block font-heading font-bold leading-snug text-gray-900">{item.title}</span>
                  <span className="block text-sm leading-snug text-gray-700">{item.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  );
}
