import About from "@/components/About";
import Audiences from "@/components/Audiences";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { homeFaq, howItWorks } from "@/data/offers";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Sites, automação e sistemas para pequenas empresas em BH | EasyDev",
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
      <Faq items={homeFaq} />
      <Contact />
    </>
  );
}
