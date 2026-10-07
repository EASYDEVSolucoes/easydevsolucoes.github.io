import About from "@/components/About";
import Audiences from "@/components/Audiences";
import CompanyFacts from "@/components/CompanyFacts";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Partners from "@/components/Partners";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { homeFaq, howItWorks } from "@/data/offers";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { graph, ORG_ID, webPageNode } from "@/lib/schema";

const title = "Sites, automação e sistemas para pequenas empresas em BH | EasyDev";

export const metadata = pageMetadata({
  title,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Audiences />
      <Services />
      <Process
        lead="Do primeiro contato ao acompanhamento mensal, você sabe o que vem depois."
        steps={howItWorks}
      />
      <About />
      <Testimonials />
      <Partners />
      <CompanyFacts />
      <Faq items={homeFaq} path="/" />
      <Contact />
      <JsonLd
        data={graph(
          webPageNode({
            path: "/",
            title,
            description: site.description,
            mainEntityId: ORG_ID,
            hasBreadcrumb: false,
          })
        )}
      />
    </>
  );
}
