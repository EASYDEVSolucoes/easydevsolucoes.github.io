import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import OfferIcon from "@/components/OfferIcon";
import PageHero from "@/components/PageHero";
import { diagnostico, offers, type Plan } from "@/data/offers";
import { absoluteUrl, lastUpdatedLong, site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbNode, graph, webPageNode, type Crumb } from "@/lib/schema";

const title = "Preços de site, atendimento no WhatsApp e sistema";
const description =
  "Tabela de preços de partida da EasyDev: Presença Local, landing page, site, atendente com IA no WhatsApp, gestão de redes e sistema sob medida. O diagnóstico é gratuito.";
const path = "/precos/";
const crumbs: Crumb[] = [{ name: "Preços", path }];

export const metadata = pageMetadata({ title, description, path, image: "/og/precos.png" });

/** Uma linha da tabela. No celular, as células empilham. */
function PriceRow({ plan }: { plan: Plan }) {
  return (
    <tr className="block border-t border-gray-100 py-4 sm:table-row sm:py-0">
      <th scope="row" className="block text-left font-bold text-gray-900 sm:table-cell sm:py-4 sm:pr-6 sm:align-top">
        {plan.name}
      </th>
      <td className="block text-sm text-gray-700 sm:table-cell sm:py-4 sm:pr-6 sm:align-top">
        {plan.term ?? plan.description}
      </td>
      <td className="block pt-1 font-heading text-xl font-bold text-gray-900 sm:table-cell sm:whitespace-nowrap sm:py-4 sm:pt-4 sm:text-right sm:align-top">
        {plan.price}
        {plan.unit && <span className="ml-1.5 font-body text-sm font-medium text-gray-700">{plan.unit}</span>}
        {plan.priceExtra && (
          <span className="block font-body text-sm font-medium text-gray-700">{plan.priceExtra}</span>
        )}
      </td>
    </tr>
  );
}

export default function PrecosPage() {
  return (
    <>
      <PageHero
        chip="Preços"
        crumbs={crumbs}
        title={["Quanto custa, antes de você ", "perguntar", "."]}
        lead="Todo serviço tem um preço de partida publicado. O valor final vai na proposta, depois do diagnóstico, com escopo e prazo fechados."
        origin="hero-precos"
        whatsappMessage="Olá! Vi a tabela de preços da EasyDev e quero conversar sobre o que a minha empresa precisa."
      />

      <section className="section-padding bg-white" aria-labelledby="tabela">
        <div className="mx-auto max-w-4xl">
          <h2 id="tabela" className="text-balance text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
            Tabela de preços da EasyDev
          </h2>
          <p className="mb-10 mt-4 text-lg leading-relaxed text-gray-700">
            Valores de partida, em reais, atualizados em{" "}
            <time dateTime={site.lastUpdated}>{lastUpdatedLong()}</time>. O que cada plano inclui e o que fica
            de fora está na página de cada serviço.
          </p>

          <article className="mb-8 flex flex-col gap-4 rounded-2xl border border-primary bg-white p-6 ring-1 ring-primary sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <span className="icon-block flex-none">
                <OfferIcon name="diagnostico" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{diagnostico.name}</h3>
                <p className="mt-1 text-gray-700">{diagnostico.cardText}</p>
              </div>
            </div>
            <div className="flex-none sm:text-right">
              <p className="font-heading text-2xl font-bold text-gray-900">{diagnostico.price}</p>
              <Link href="/diagnostico/" className="font-bold text-primary-text underline underline-offset-4">
                Pedir o diagnóstico
              </Link>
            </div>
          </article>

          <div className="space-y-8">
            {offers.map((offer) => {
              const plans = [
                ...offer.plans,
                // a mensalidade do atendente já aparece junto da implantação
                ...(offer.slug === "whatsapp-ia" ? [] : (offer.addOn?.plans ?? [])),
              ];
              return (
                <article key={offer.slug} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="icon-block flex-none">
                      <OfferIcon name={offer.icon} />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{offer.name}</h3>
                      <p className="mt-1 text-gray-700">{offer.cardText}</p>
                    </div>
                  </div>
                  <table className="mt-6 block w-full sm:table">
                    <caption className="sr-only">Preços de {offer.name}</caption>
                    <thead className="sr-only">
                      <tr>
                        <th scope="col">Plano</th>
                        <th scope="col">Prazo ou condição</th>
                        <th scope="col">Preço</th>
                      </tr>
                    </thead>
                    <tbody className="block sm:table-row-group">
                      {plans.map((plan) => (
                        <PriceRow key={plan.name} plan={plan} />
                      ))}
                    </tbody>
                  </table>
                  <Link
                    href={`/${offer.slug}/`}
                    className="group mt-4 inline-flex items-center gap-2 font-bold text-primary-text"
                  >
                    Ver o que {offer.name} inclui
                    <ArrowRightIcon
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Contact
        title="Não sabe por onde começar?"
        text="O diagnóstico gratuito termina com uma recomendação: qual desses serviços resolve primeiro o que está custando clientes."
        origin="cta-precos"
      />

      <JsonLd
        data={graph(
          webPageNode({
            path,
            title,
            description,
            type: "CollectionPage",
            mainEntityId: `${absoluteUrl(path)}#servicos`,
          }),
          breadcrumbNode(path, crumbs),
          {
            "@type": "ItemList",
            "@id": `${absoluteUrl(path)}#servicos`,
            name: "Serviços e preços da EasyDev",
            itemListElement: [diagnostico, ...offers].map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              url: absoluteUrl(item.slug),
            })),
          }
        )}
      />
    </>
  );
}
