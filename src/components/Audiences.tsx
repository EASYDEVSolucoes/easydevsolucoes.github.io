import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { audiences } from "@/data/offers";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

/** "Para quem é": os três públicos, cada um com a sua dor e a sua porta de entrada. */
export default function Audiences() {
  return (
    <section className="section-padding" aria-labelledby="para-quem">
      <div className="container-page">
        <SectionHeading
          id="para-quem"
          title="Para quem a gente trabalha"
          lead="Três tipos de empresa, cada um com um problema diferente e um primeiro passo diferente."
        />
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {audiences.map((audience, index) => (
            <li key={audience.title}>
              <ScrollReveal delay={index * 0.08} className="h-full">
                <article className="card h-full">
                  <h3 className="text-xl font-bold text-gray-900">{audience.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{audience.who}</p>
                  <p className="mt-5 flex-grow font-heading text-lg font-bold leading-snug text-gray-900">
                    {audience.pain}
                  </p>
                  <Link
                    href={`/${audience.offerSlug}/`}
                    className="group mt-6 inline-flex items-center gap-2 font-bold text-primary-text"
                  >
                    {audience.linkLabel}
                    <ArrowRightIcon
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
