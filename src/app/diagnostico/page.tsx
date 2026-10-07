import CheckList from "@/components/CheckList";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import Summary from "@/components/Summary";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import WhatsAppLink from "@/components/WhatsAppLink";
import { diagnostico } from "@/data/offers";
import { absoluteUrl, site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbNode, graph, ORG_ID, webPageNode, type Crumb } from "@/lib/schema";

export const metadata = pageMetadata({
  title: diagnostico.metaTitle,
  description: diagnostico.metaDescription,
  path: "/diagnostico/",
  image: "/og/diagnostico.png",
});

const path = "/diagnostico/";
const crumbs: Crumb[] = [{ name: "Diagnóstico gratuito", path }];

export default function DiagnosticoPage() {
  const url = absoluteUrl("diagnostico");

  return (
    <>
      <PageHero
        chip="Diagnóstico gratuito"
        crumbs={crumbs}
        title={diagnostico.title}
        lead={diagnostico.lead}
        origin="hero-diagnostico"
        showCta={false}
        note={
          <>
            Prefere falar agora?{" "}
            <WhatsAppLink
              message={diagnostico.whatsappMessage}
              origin="hero-diagnostico"
              className="inline-flex items-center gap-1.5 font-bold text-gray-900 underline underline-offset-2"
            >
              <WhatsAppIcon className="h-4 w-4 text-whatsapp-dark" />
              Peça pelo WhatsApp {site.phoneDisplay}
            </WhatsAppLink>
          </>
        }
      >
        <div id="pedir" className="card">
          <h2 className="text-xl font-bold text-gray-900">Peça o seu</h2>
          <p className="mb-6 mt-2 text-gray-700">
            {diagnostico.duration} de conversa. {diagnostico.delivery}.
          </p>
          <ContactForm />
        </div>
      </PageHero>

      <Summary
        heading={diagnostico.searchHeading}
        definition={diagnostico.definition}
        facts={[
          { label: "Preço", value: "Gratuito, sem compromisso de contratar" },
          { label: "Duração", value: `${diagnostico.duration} de conversa com um sócio` },
          { label: "Entrega", value: diagnostico.leadTime },
          { label: "Para quem é", value: diagnostico.forWho },
          {
            label: "Onde a EasyDev atende",
            value: `${site.serviceCities.join(", ")} e, de forma remota, todo o Brasil`,
          },
          { label: "Como pedir", value: `Pelo formulário desta página ou pelo WhatsApp ${site.phoneDisplay}` },
        ]}
      />

      <section className="section-padding bg-white" aria-labelledby="o-que-recebe">
        <div className="container-page grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="card">
            <h2 id="o-que-recebe" className="text-2xl font-bold text-gray-900">
              O que você recebe
            </h2>
            <CheckList items={diagnostico.includes} className="mt-6" />
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900">O que não está incluído</h2>
            <p className="mt-2 text-gray-700">O diagnóstico mostra o que corrigir. A correção é outra conversa.</p>
            <CheckList items={diagnostico.notIncluded} variant="cross" className="mt-6" />
          </div>
        </div>
      </section>

      <Process steps={diagnostico.steps} />
      <Faq items={diagnostico.faq} path={path} />

      <section className="section-padding" aria-labelledby="pedir-final">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="pedir-final" className="text-balance text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
            São 30 minutos. Você sai sabendo o que corrigir primeiro.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#pedir" className="btn-primary">
              Pedir meu diagnóstico gratuito
            </a>
            <WhatsAppLink message={diagnostico.whatsappMessage} origin="cta-diagnostico" className="btn-whatsapp">
              <WhatsAppIcon className="h-5 w-5 text-whatsapp-dark" />
              Chamar no WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <JsonLd
        data={graph(
          webPageNode({
            path,
            title: diagnostico.metaTitle,
            description: diagnostico.metaDescription,
            mainEntityId: `${url}#servico`,
          }),
          breadcrumbNode(path, crumbs),
          {
            "@type": "Service",
            "@id": `${url}#servico`,
            name: diagnostico.name,
            serviceType: diagnostico.searchHeading,
            description: diagnostico.definition,
            url,
            provider: { "@id": ORG_ID },
            offers: { "@type": "Offer", url, price: 0, priceCurrency: "BRL" },
          }
        )}
      />
    </>
  );
}
