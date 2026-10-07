import type { ReactNode } from "react";
import { lastUpdatedLong, site } from "@/data/site";

/**
 * Bloco "Em resumo": a definição da oferta em uma ou duas frases que se
 * sustentam sozinhas, mais os fatos principais em lista. É o trecho que o
 * Google e os assistentes de IA conseguem citar sem precisar do resto da página.
 */
export default function Summary({
  heading,
  definition,
  facts,
  evidence,
  children,
}: {
  /** Título escrito como a pessoa procura. */
  heading: string;
  definition: string;
  facts: { label: string; value: ReactNode }[];
  evidence?: { text: string; source: string; url: string };
  children?: ReactNode;
}) {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8" aria-labelledby="em-resumo">
      <div className="container-page">
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10">
          <p className="chip mb-5">Em resumo</p>
          <h2 id="em-resumo" className="text-balance text-2xl font-bold leading-tight text-gray-900 lg:text-3xl">
            {heading}
          </h2>
          <p className="mt-4 max-w-4xl text-pretty text-lg leading-relaxed text-gray-700">{definition}</p>

          <dl className="mt-8 grid grid-cols-1 gap-x-10 gap-y-5 border-t border-gray-100 pt-8 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-sm font-bold uppercase tracking-wider text-gray-700">{fact.label}</dt>
                <dd className="mt-1 leading-relaxed text-gray-900">{fact.value}</dd>
              </div>
            ))}
          </dl>

          {evidence && (
            <p className="mt-8 border-l-4 border-primary pl-4 leading-relaxed text-gray-700">
              {evidence.text}{" "}
              <span className="text-sm">
                Fonte:{" "}
                <a
                  href={evidence.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary-text underline underline-offset-2"
                >
                  {evidence.source}
                </a>
                .
              </span>
            </p>
          )}

          {children}

          <p className="mt-8 text-sm text-gray-700">
            Informações de {site.fullName}, atualizadas em{" "}
            <time dateTime={site.lastUpdated}>{lastUpdatedLong()}</time>.
          </p>
        </div>
      </div>
    </section>
  );
}
