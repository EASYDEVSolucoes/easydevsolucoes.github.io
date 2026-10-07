import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { Offer } from "@/data/offers";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbNode, graph, serviceNode, webPageNode, type Crumb } from "@/lib/schema";
import CheckList from "./CheckList";
import Contact from "./Contact";
import Faq from "./Faq";
import JsonLd from "./JsonLd";
import OfferIcon from "./OfferIcon";
import PageHero from "./PageHero";
import PlanCard from "./PlanCard";
import Process from "./Process";
import RelatedOffers from "./RelatedOffers";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import Summary from "./Summary";

export function offerMetadata(offer: Offer): Metadata {
  return pageMetadata({
    title: offer.metaTitle,
    description: offer.metaDescription,
    path: `/${offer.slug}/`,
    image: `/og/${offer.slug}.png`,
  });
}

const gridCols: Record<number, string> = {
  1: "max-w-xl mx-auto",
  2: "md:grid-cols-2 max-w-4xl mx-auto",
  3: "md:grid-cols-3",
};

/**
 * Modelo das páginas de oferta. A ordem é sempre a mesma: a dor, o resumo
 * citável, o que está incluído e o preço, o que não está, como funciona,
 * perguntas, serviços relacionados e o CTA. Todo o texto vem de src/data/offers.ts.
 */
export default function OfferPage({ offer, children }: { offer: Offer; children?: ReactNode }) {
  const path = `/${offer.slug}/`;
  const crumbs: Crumb[] = [{ name: offer.name, path }];
  // O card do topo mostra o plano de entrada, que é o do preço "a partir de"
  const mainPlan = offer.plans[0];

  return (
    <>
      <PageHero
        chip={offer.name}
        crumbs={crumbs}
        title={offer.title}
        lead={offer.lead}
        whatsappMessage={offer.whatsappMessage}
        origin={`hero-${offer.slug}`}
      >
        <aside className="card" aria-label="Preço de partida">
          <span className="icon-block mb-6">
            <OfferIcon name={offer.icon} />
          </span>
          <p className="text-sm font-medium text-gray-700">A partir de</p>
          <p className="font-heading text-4xl font-bold leading-tight text-gray-900">{offer.priceFrom}</p>
          {offer.priceFromUnit && <p className="mt-1 font-medium text-gray-700">{offer.priceFromUnit}</p>}
          <CheckList items={mainPlan.includes.slice(0, 4)} className="mt-6 border-t border-gray-100 pt-6" />
          <a href="#planos" className="mt-6 font-bold text-primary-text underline underline-offset-4">
            Ver tudo o que está incluído
          </a>
        </aside>
      </PageHero>

      <Summary
        heading={offer.searchHeading}
        definition={offer.definition}
        evidence={offer.evidence}
        facts={[
          {
            label: "Preço",
            value: `A partir de ${offer.priceFrom}${offer.priceFromUnit ? ` ${offer.priceFromUnit}` : ""}`,
          },
          { label: "Prazo", value: offer.leadTime },
          { label: "Para quem é", value: offer.forWho },
          {
            label: "Onde a EasyDev atende",
            value: `${site.serviceCities.join(", ")} e, de forma remota, todo o Brasil`,
          },
          {
            label: "Como começar",
            value: (
              <>
                Pelo{" "}
                <Link href="/diagnostico/" className="font-medium text-primary-text underline underline-offset-2">
                  diagnóstico gratuito
                </Link>
                , de 30 minutos
              </>
            ),
          },
          { label: "Contato", value: `WhatsApp ${site.phoneDisplay} · ${site.email}` },
        ]}
      />

      <section id="planos" className="section-padding bg-white" aria-labelledby="planos-titulo">
        <div className="container-page">
          <SectionHeading
            id="planos-titulo"
            title={offer.plansTitle}
            lead="Valores de partida. O preço final vai na proposta, depois do diagnóstico."
          />
          <div className={`grid grid-cols-1 gap-8 ${gridCols[Math.min(offer.plans.length, 3)]}`}>
            {offer.plans.map((plan, index) => (
              <ScrollReveal key={plan.name} delay={index * 0.08} className="h-full">
                <PlanCard plan={plan} />
              </ScrollReveal>
            ))}
          </div>

          {offer.addOn && (
            <div className="mt-16">
              <div className="mx-auto mb-8 max-w-2xl text-center">
                <h3 className="text-2xl font-bold text-gray-900">{offer.addOn.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-gray-700">{offer.addOn.text}</p>
              </div>
              <div className={`grid grid-cols-1 gap-8 ${gridCols[Math.min(offer.addOn.plans.length, 3)]}`}>
                {offer.addOn.plans.map((plan) => (
                  <PlanCard key={plan.name} plan={plan} />
                ))}
              </div>
            </div>
          )}

          {offer.notIncluded.length > 0 && (
            <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h3 className="text-xl font-bold text-gray-900">O que não está incluído</h3>
              <p className="mt-2 text-gray-700">Para você saber antes, e não na hora da proposta.</p>
              <CheckList items={offer.notIncluded} variant="cross" className="mt-5" />
            </div>
          )}
        </div>
      </section>

      {children}

      <Process steps={offer.steps} />
      <Faq items={offer.faq} path={path} />
      <RelatedOffers slugs={offer.related} />
      <Contact whatsappMessage={offer.whatsappMessage} origin={`cta-${offer.slug}`} />

      <JsonLd
        data={graph(
          webPageNode({
            path,
            title: offer.metaTitle,
            description: offer.metaDescription,
            mainEntityId: `${site.url}${path}#servico`,
          }),
          breadcrumbNode(path, crumbs),
          serviceNode(offer)
        )}
      />
    </>
  );
}
