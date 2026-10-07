import Link from "next/link";
import { brl, offers, price } from "@/data/offers";
import { companyDefinition, lastUpdatedLong, site } from "@/data/site";

/**
 * "A EasyDev em resumo": quem é a empresa, o que faz, onde fica e como falar
 * com ela, em frases e fatos que se sustentam sozinhos. Aparece na página
 * inicial e em Sobre; em Sobre inclui também razão social e CNPJ.
 */
export default function CompanyFacts({ showLegal = false }: { showLegal?: boolean }) {
  const facts = [
    {
      label: "O que faz",
      value: (
        <>
          {offers.map((offer, index) => (
            <span key={offer.slug}>
              {index > 0 && (index === offers.length - 1 ? " e " : ", ")}
              <Link href={`/${offer.slug}/`} className="font-medium text-primary-text underline underline-offset-2">
                {offer.name}
              </Link>
            </span>
          ))}
        </>
      ),
    },
    { label: "Para quem", value: "Pequenas e médias empresas de 3 a 50 pessoas" },
    { label: "Onde fica", value: `${site.city}, ${site.regionName}, na ${site.serviceArea}` },
    {
      label: "Onde atende",
      value: `${site.serviceCities.join(", ")}, com visita presencial, e todo o Brasil de forma remota`,
    },
    {
      label: "Preços",
      value: (
        <>
          De {brl(price.presenca)} por mês a {brl(price.sistemaMax)} por projeto.{" "}
          <Link href="/precos/" className="font-medium text-primary-text underline underline-offset-2">
            Ver a tabela
          </Link>
        </>
      ),
    },
    { label: "Horário", value: site.hours.display },
    {
      label: "Contato",
      value: (
        <>
          <a href={`tel:${site.phoneE164}`} className="underline underline-offset-2">
            {site.phoneDisplay}
          </a>{" "}
          (telefone e WhatsApp) ·{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-2 [overflow-wrap:anywhere]">
            {site.email}
          </a>
        </>
      ),
    },
    ...(showLegal
      ? [
          { label: "Razão social", value: site.legalName },
          { label: "CNPJ", value: site.cnpj },
        ]
      : []),
  ];

  return (
    <section className="section-padding bg-white" aria-labelledby="easydev-em-resumo">
      <div className="mx-auto max-w-4xl">
        <p className="chip mb-5">Em resumo</p>
        <h2 id="easydev-em-resumo" className="text-balance text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
          O que é a EasyDev
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-gray-700">{companyDefinition}</p>
        <dl className="mt-8 divide-y divide-gray-100 rounded-2xl border border-gray-200 bg-white">
          {facts.map((fact) => (
            <div key={fact.label} className="grid grid-cols-1 gap-1 px-6 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
              <dt className="font-bold text-gray-900">{fact.label}</dt>
              <dd className="leading-relaxed text-gray-700">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-sm text-gray-700">
          Atualizado em <time dateTime={site.lastUpdated}>{lastUpdatedLong()}</time>.
        </p>
      </div>
    </section>
  );
}
