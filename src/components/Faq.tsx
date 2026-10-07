import { ChevronDownIcon } from "@heroicons/react/24/outline";
import type { Faq as FaqItem } from "@/data/offers";
import { absoluteUrl } from "@/data/site";
import JsonLd from "./JsonLd";
import SectionHeading from "./SectionHeading";

/**
 * Perguntas frequentes visíveis na página. Os dados estruturados (FAQPage)
 * saem da mesma lista, então o que o Google lê é o que a pessoa vê.
 */
export default function Faq({
  items,
  path,
  title = "Perguntas frequentes",
}: {
  items: readonly FaqItem[];
  /** Rota da página, por exemplo "/sites/", para identificar o bloco nos dados estruturados. */
  path: string;
  title?: string;
}) {
  return (
    <section className="section-padding bg-white" aria-labelledby="perguntas">
      <div className="mx-auto max-w-3xl">
        <SectionHeading id="perguntas" title={title} />
        <div className="space-y-3">
          {items.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-gray-200 bg-white open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-5 font-heading text-lg font-bold text-gray-900 [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-700 transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${absoluteUrl(path)}#perguntas`,
          inLanguage: "pt-BR",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
    </section>
  );
}
