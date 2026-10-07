import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Contact from "@/components/Contact";
import OfferIcon from "@/components/OfferIcon";
import PageHero from "@/components/PageHero";
import { diagnostico, offers, type Plan } from "@/data/offers";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Preços de site, atendimento no WhatsApp e sistema",
  description:
    "Tabela de preços de partida da EasyDev: Presença Local, landing page, site, atendente com IA no WhatsApp, gestão de redes e sistema sob medida. O diagnóstico é gratuito.",
  path: "/precos/",
});

function PriceRow({ plan }: { plan: Plan }) {
  return (
    <li className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
      <div>
        <p className="font-bold text-gray-900">{plan.name}</p>
        {plan.term && <p className="text-sm text-gray-700">{plan.term}</p>}
      </div>
      <p className="font-heading text-xl font-bold text-gray-900 sm:text-right">
        {plan.price}
        {plan.unit && <span className="ml-1.5 font-body text-sm font-medium text-gray-700">{plan.unit}</span>}
        {plan.priceExtra && (
          <span className="block font-body text-sm font-medium text-gray-700">{plan.priceExtra}</span>
        )}
      </p>
    </li>
  );
}

export default function PrecosPage() {
  return (
    <>
      <PageHero
        chip="Preços"
        title={["Quanto custa, antes de você ", "perguntar", "."]}
        lead="Todo serviço tem um preço de partida publicado. O valor final vai na proposta, depois do diagnóstico, com escopo e prazo fechados."
        origin="hero-precos"
        whatsappMessage="Olá! Vi a tabela de preços da EasyDev e quero conversar sobre o que a minha empresa precisa."
      />

      <section className="section-padding bg-white" aria-labelledby="tabela">
        <div className="mx-auto max-w-4xl">
          <h2 id="tabela" className="sr-only">
            Tabela de preços
          </h2>

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
            {offers.map((offer) => (
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
                <ul className="mt-6 divide-y divide-gray-100 border-t border-gray-100">
                  {offer.plans.map((plan) => (
                    <PriceRow key={plan.name} plan={plan} />
                  ))}
                  {offer.addOn?.plans
                    // a mensalidade do atendente já aparece junto da implantação
                    .filter(() => offer.slug !== "whatsapp-ia")
                    .map((plan) => <PriceRow key={plan.name} plan={plan} />)}
                </ul>
                <Link
                  href={`/${offer.slug}/`}
                  className="group mt-4 inline-flex items-center gap-2 font-bold text-primary-text"
                >
                  Ver o que inclui
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center leading-relaxed text-gray-700">
            Valores de partida, em reais. O que cada plano inclui e o que fica de fora está na página de cada
            serviço.
          </p>
        </div>
      </section>

      <Contact
        title="Não sabe por onde começar?"
        text="O diagnóstico gratuito termina com uma recomendação: qual desses serviços resolve primeiro o que está custando clientes."
        origin="cta-precos"
      />
    </>
  );
}
