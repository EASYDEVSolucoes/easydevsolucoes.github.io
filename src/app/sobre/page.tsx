import Image from "next/image";
import About from "@/components/About";
import CompanyFacts from "@/components/CompanyFacts";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import { site, team } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbNode, graph, ORG_ID, webPageNode, type Crumb } from "@/lib/schema";

const title = "Sobre a EasyDev Soluções Digitais";
const description =
  "A EasyDev fica em Ibirité, na Grande BH, e faz sites, atendimento no WhatsApp e sistemas sob medida para pequenas e médias empresas. Atende o Brasil todo de forma remota.";
const path = "/sobre/";
const crumbs: Crumb[] = [{ name: "Sobre", path }];

export const metadata = pageMetadata({ title, description, path, image: "/og/sobre.png" });

const stats = [
  { value: "100+", label: "projetos entregues" },
  { value: "50+", label: "clientes atendidos" },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        chip="Sobre"
        crumbs={crumbs}
        title={["Uma empresa pequena, para empresas ", "pequenas", "."]}
        lead="A EasyDev Soluções Digitais fica em Ibirité, na Grande BH. Faz sites, atendimento no WhatsApp e sistemas sob medida para pequenas e médias empresas, e atende o Brasil todo de forma remota."
        origin="hero-sobre"
      >
        <div className="grid grid-cols-2 gap-4 self-center">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="font-heading text-3xl font-bold text-primary-text">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-700">{stat.label}</p>
            </div>
          ))}
          <div className="col-span-2 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <p className="font-heading text-lg font-bold text-gray-900">Produtos próprios no ar</p>
            <p className="mt-1 leading-relaxed text-gray-700">
              Além dos projetos de clientes, a EasyDev mantém produtos próprios, como o DiAna ShowTrack e o
              Liberi.
            </p>
          </div>
        </div>
      </PageHero>

      {team.length > 0 && (
        <section className="section-padding bg-white" aria-labelledby="quem-atende">
          <div className="container-page">
            <h2 id="quem-atende" className="mb-10 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
              Quem atende você
            </h2>
            <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
              {team.map((person) => (
                <li key={person.name} className="card items-center text-center">
                  {person.photo && (
                    <Image
                      src={person.photo}
                      alt={`Foto de ${person.name}`}
                      width={160}
                      height={160}
                      className="mb-5 h-40 w-40 rounded-full object-cover"
                    />
                  )}
                  <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                  <p className="text-sm font-medium text-primary-text">{person.role}</p>
                  <p className="mt-3 leading-relaxed text-gray-700">{person.bio}</p>
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 font-bold text-primary-text underline underline-offset-4"
                    >
                      LinkedIn de {person.name.split(" ")[0]}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <About />
      <Testimonials />

      <CompanyFacts showLegal />

      <Partners />
      <Contact origin="cta-sobre" />
      <JsonLd
        data={graph(
          webPageNode({ path, title, description, type: "AboutPage", mainEntityId: ORG_ID }),
          breadcrumbNode(path, crumbs)
        )}
      />
    </>
  );
}
