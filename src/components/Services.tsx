import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { diagnostico, offers } from "@/data/offers";
import OfferIcon from "./OfferIcon";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

/** Grade de ofertas com preço de partida. Os dados vêm de src/data/offers.ts. */
export default function Services({
  title = "O que você pode contratar",
  lead = "Cada serviço tem escopo, prazo e preço de partida. Você começa pelo que resolve a dor de hoje.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section id="servicos" className="section-padding bg-white" aria-labelledby="servicos-titulo">
      <div className="container-page">
        <SectionHeading id="servicos-titulo" title={title} lead={lead} />
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <li>
            <ScrollReveal className="h-full">
              <Link
                href={`/${diagnostico.slug}/`}
                className="card card-hover group h-full border-primary ring-1 ring-primary"
              >
                <span className="icon-block mb-6">
                  <OfferIcon name="diagnostico" />
                </span>
                <h3 className="text-xl font-bold text-gray-900">{diagnostico.name}</h3>
                <p className="mt-3 flex-grow leading-relaxed text-gray-700">{diagnostico.cardText}</p>
                <p className="mt-6 font-heading text-2xl font-bold text-gray-900">{diagnostico.price}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-bold text-primary-text">
                  Pedir o diagnóstico
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </ScrollReveal>
          </li>
          {offers.map((offer, index) => (
            <li key={offer.slug}>
              <ScrollReveal delay={((index + 1) % 3) * 0.08} className="h-full">
                <Link href={`/${offer.slug}/`} className="card card-hover group h-full">
                  <span className="icon-block mb-6">
                    <OfferIcon name={offer.icon} />
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{offer.name}</h3>
                  <p className="mt-3 flex-grow leading-relaxed text-gray-700">{offer.cardText}</p>
                  <p className="mt-6 text-sm font-medium text-gray-700">A partir de</p>
                  <p className="font-heading text-2xl font-bold text-gray-900">
                    {offer.priceFrom}
                    {offer.priceFromUnit && (
                      <span className="ml-2 font-body text-sm font-medium text-gray-700">{offer.priceFromUnit}</span>
                    )}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-bold text-primary-text">
                    Ver o que inclui
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
