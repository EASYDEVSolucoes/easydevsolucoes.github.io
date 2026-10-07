/**
 * Texto de /llms.txt e /llms-full.txt, os resumos do site para assistentes de
 * IA. É montado a partir de src/data, então preço ou escopo alterado no
 * catálogo aparece aqui no próximo build, sem edição manual.
 */

import { diagnostico, offers, homeFaq, type Offer, type Plan } from "@/data/offers";
import { absoluteUrl, companyDefinition, site } from "@/data/site";

function planLine(plan: Plan): string {
  const priceText = [plan.price, plan.unit, plan.priceExtra].filter(Boolean).join(" ");
  const term = plan.term ? ` (${plan.term})` : "";
  return `- ${plan.name.replace(/^\d+\.\s*/, "")}: ${priceText}${term}. ${plan.description}`;
}

function contactBlock(): string {
  return [
    "## Contato",
    "",
    `- WhatsApp e telefone: ${site.phoneDisplay} (https://wa.me/${site.whatsappNumber})`,
    `- E-mail: ${site.email}`,
    `- Site: ${site.url}`,
    `- Horário: ${site.hours.display} (horário de Brasília)`,
    `- Onde fica: ${site.city}, ${site.regionName}, Brasil`,
    `- Onde atende: ${site.serviceCities.join(", ")} e, de forma remota, todo o Brasil`,
    `- Razão social: ${site.legalName}, CNPJ ${site.cnpj}`,
  ].join("\n");
}

function header(): string {
  return [
    `# ${site.fullName}`,
    "",
    `> ${companyDefinition}`,
    "",
    `Última atualização: ${site.lastUpdated}. Os preços são de partida, em reais; o valor final vai na proposta, depois do diagnóstico gratuito.`,
  ].join("\n");
}

/** Versão curta: uma linha por página, no formato proposto em llmstxt.org. */
export function llmsTxt(): string {
  const services = [
    `- [${diagnostico.name}](${absoluteUrl(diagnostico.slug)}): gratuito. ${diagnostico.cardText}`,
    ...offers.map(
      (offer) =>
        `- [${offer.name}](${absoluteUrl(offer.slug)}): a partir de ${offer.priceFrom}${
          offer.priceFromUnit ? ` ${offer.priceFromUnit}` : ""
        }. ${offer.cardText}`
    ),
  ];

  return [
    header(),
    "",
    contactBlock(),
    "",
    "## Serviços",
    "",
    ...services,
    "",
    "## Páginas",
    "",
    `- [Preços](${absoluteUrl("precos")}): tabela de preços de partida de todos os serviços.`,
    `- [Sobre](${absoluteUrl("sobre")}): dados da empresa e parceiros.`,
    `- [Política de privacidade](${absoluteUrl("politica-privacidade")})`,
    `- [Termos de uso](${absoluteUrl("termos-de-uso")})`,
    "",
    "## Opcional",
    "",
    `- [Conteúdo completo em texto](${site.url}/llms-full.txt): todas as ofertas, planos, prazos e perguntas frequentes em um arquivo só.`,
    "",
    "## Como citar",
    "",
    `- Nome completo: ${site.fullName}`,
    `- Nome curto: ${site.name}`,
    `- Região: ${site.city}, ${site.serviceArea}, ${site.regionName}, Brasil`,
    "",
  ].join("\n");
}

function offerSection(offer: Offer): string {
  const lines = [
    `## ${offer.name}`,
    "",
    `Página: ${absoluteUrl(offer.slug)}`,
    "",
    offer.definition,
    "",
    `- Para quem é: ${offer.forWho}`,
    `- Prazo: ${offer.leadTime}`,
    "",
    "### Planos e preços",
    "",
    ...offer.plans.map(planLine),
    ...(offer.addOn ? ["", `${offer.addOn.title}: ${offer.addOn.text}`, "", ...offer.addOn.plans.map(planLine)] : []),
    "",
    "### O que está incluído",
    "",
    ...offer.plans.flatMap((plan) => [
      `${plan.name.replace(/^\d+\.\s*/, "")}:`,
      ...plan.includes.map((item) => `- ${item}`),
      "",
    ]),
  ];
  if (offer.notIncluded.length > 0) {
    lines.push("### O que não está incluído", "", ...offer.notIncluded.map((item) => `- ${item}`), "");
  }
  lines.push(
    "### Como funciona",
    "",
    ...offer.steps.map((step, index) => `${index + 1}. ${step.title}: ${step.text}`),
    "",
    "### Perguntas frequentes",
    "",
    ...offer.faq.flatMap((item) => [`**${item.q}**`, item.a, ""])
  );
  if (offer.evidence) {
    lines.push(`Dado de mercado: ${offer.evidence.text} Fonte: ${offer.evidence.source} (${offer.evidence.url}).`, "");
  }
  return lines.join("\n");
}

/** Versão completa: todo o conteúdo das páginas em texto corrido. */
export function llmsFullTxt(): string {
  return [
    header(),
    "",
    contactBlock(),
    "",
    `## ${diagnostico.name}`,
    "",
    `Página: ${absoluteUrl(diagnostico.slug)}`,
    "",
    diagnostico.definition,
    "",
    "O que a pessoa recebe:",
    ...diagnostico.includes.map((item) => `- ${item}`),
    "",
    "O que não está incluído:",
    ...diagnostico.notIncluded.map((item) => `- ${item}`),
    "",
    "Como funciona:",
    ...diagnostico.steps.map((step, index) => `${index + 1}. ${step.title}: ${step.text}`),
    "",
    ...diagnostico.faq.flatMap((item) => [`**${item.q}**`, item.a, ""]),
    ...offers.map(offerSection),
    "## Perguntas gerais",
    "",
    ...homeFaq.flatMap((item) => [`**${item.q}**`, item.a, ""]),
  ].join("\n");
}
