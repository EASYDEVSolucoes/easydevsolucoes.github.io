/**
 * Dados estruturados (schema.org) das páginas. Cada página publica um grafo
 * com WebPage, a trilha de navegação e, nas ofertas, o serviço com os planos.
 * Tudo sai de src/data: o que o Google e os assistentes de IA leem aqui é o
 * mesmo que a pessoa vê na página.
 */

import type { Offer, Plan } from "@/data/offers";
import { absoluteUrl, site } from "@/data/site";

type Node = Record<string, unknown>;

export const ORG_ID = `${site.url}/#empresa`;
export const SITE_ID = `${site.url}/#site`;

export type Crumb = { name: string; path: string };

const areaServed = [
  ...site.serviceCities.map((name) => ({ "@type": "City", name })),
  { "@type": "Country", name: "Brasil" },
];

/** Trilha: Início > ... > página atual. */
export function breadcrumbNode(path: string, crumbs: Crumb[]): Node {
  const items = [{ name: "Início", path: "/" }, ...crumbs];
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#trilha`,
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function webPageNode({
  path,
  title,
  description,
  type = "WebPage",
  mainEntityId,
  hasBreadcrumb = true,
}: {
  path: string;
  title: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  mainEntityId?: string;
  hasBreadcrumb?: boolean;
}): Node {
  const url = absoluteUrl(path);
  return {
    "@type": type,
    "@id": `${url}#pagina`,
    url,
    name: title,
    description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    dateModified: site.lastUpdated,
    ...(hasBreadcrumb ? { breadcrumb: { "@id": `${url}#trilha` } } : {}),
    ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
  };
}

function planOffer(plan: Plan, url: string): Node {
  const priceSpecification: Node = {
    "@type": "UnitPriceSpecification",
    priceCurrency: "BRL",
    ...(plan.maxValue ? { minPrice: plan.value, maxPrice: plan.maxValue } : { price: plan.value }),
    // cobrado a cada 1 mês
    ...(plan.monthly ? { unitCode: "MON", billingIncrement: 1 } : {}),
  };
  return {
    "@type": "Offer",
    name: plan.name.replace(/^\d+\.\s*/, ""),
    description: `${plan.description} Inclui: ${plan.includes.join("; ")}.`,
    url,
    priceCurrency: "BRL",
    ...(plan.maxValue ? {} : { price: plan.value }),
    priceSpecification,
    seller: { "@id": ORG_ID },
  };
}

/** Serviço de uma página de oferta, com os planos, a faixa de preço e o plano mensal que o acompanha. */
export function serviceNode(offer: Offer): Node {
  const url = absoluteUrl(offer.slug);
  // A faixa considera só os planos principais; o plano mensal de acompanhamento
  // vai em um catálogo à parte para não puxar o "a partir de" para baixo.
  const values = offer.plans.flatMap((plan) => [plan.value, plan.maxValue ?? plan.value]);
  return {
    "@type": "Service",
    "@id": `${url}#servico`,
    name: offer.name,
    serviceType: offer.searchHeading,
    description: offer.definition,
    url,
    provider: { "@id": ORG_ID },
    areaServed,
    audience: { "@type": "BusinessAudience", name: offer.forWho },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      lowPrice: Math.min(...values),
      highPrice: Math.max(...values),
      offerCount: offer.plans.length,
      offers: offer.plans.map((plan) => planOffer(plan, url)),
    },
    ...(offer.addOn
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: offer.addOn.title,
            itemListElement: offer.addOn.plans.map((plan) => planOffer(plan, url)),
          },
        }
      : {}),
  };
}

/** Embrulha os nós de uma página em um grafo JSON-LD. */
export function graph(...nodes: Node[]): Node {
  return { "@context": "https://schema.org", "@graph": nodes };
}
