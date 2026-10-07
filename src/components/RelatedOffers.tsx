import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { getOffer } from "@/data/offers";
import OfferIcon from "./OfferIcon";

/** Links internos no fim de cada página de oferta: serviços que combinam com ela. */
export default function RelatedOffers({ slugs }: { slugs: string[] }) {
  if (slugs.length === 0) return null;
  const related = slugs.map(getOffer);

  return (
    <section className="px-4 pt-20 sm:px-6 lg:px-8" aria-labelledby="veja-tambem">
      <div className="container-page">
        <h2 id="veja-tambem" className="mb-8 text-center text-2xl font-bold text-gray-900 lg:text-3xl">
          Serviços que combinam com este
        </h2>
        <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {related.map((offer) => (
            <li key={offer.slug}>
              <Link
                href={`/${offer.slug}/`}
                className="group flex h-full items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <span className="icon-block flex-none">
                  <OfferIcon name={offer.icon} />
                </span>
                <span>
                  <span className="block font-heading text-lg font-bold text-gray-900">{offer.name}</span>
                  <span className="mt-1 block leading-relaxed text-gray-700">{offer.cardText}</span>
                  <span className="mt-3 inline-flex items-center gap-2 font-bold text-primary-text">
                    A partir de {offer.priceFrom}
                    {offer.priceFromUnit ? ` ${offer.priceFromUnit}` : ""}
                    <ArrowRightIcon
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center">
          <Link href="/precos/" className="font-bold text-primary-text underline underline-offset-4">
            Ver a tabela de preços completa
          </Link>
        </p>
      </div>
    </section>
  );
}
