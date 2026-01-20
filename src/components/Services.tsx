import {
  CodeBracketIcon,
  CpuChipIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Desenvolvimento de Software",
    description:
      "Criamos soluções personalizadas para sua empresa, desde aplicações web até sistemas complexos.",
    icon: CodeBracketIcon,
  },
  {
    title: "Consultoria em TI",
    description:
      "Oferecemos consultoria especializada para otimizar seus processos e infraestrutura tecnológica.",
    icon: CpuChipIcon,
  },
  {
    title: "Desenvolvimento Ágil",
    description:
      "Utilizamos metodologias ágeis para entregar resultados rápidos e de alta qualidade.",
    icon: UserGroupIcon,
  },
  {
    title: "Otimização de SEO",
    description:
      "Otimize seu site para alcançar melhores resultados nos motores de busca.",
    icon: ChartBarIcon,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-white section-padding"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal width="100%">
          <header className="text-center mb-12">
            <h2
              id="services-title"
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em tecnologia para impulsionar seu
              negócio
            </p>
          </header>
        </ScrollReveal>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-4 px-2 sm:px-0"
          role="list"
        >
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              delay={index * 0.1}
              width="100%"
              className="h-full sticky md:static"
              style={{
                top: `${6 + index * 1}rem`,
                zIndex: 10 + index
              }}
            >
              <article
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 h-full flex flex-col"
                role="listitem"
              >
                <div className="bg-primary/10 w-fit p-3 rounded-xl mb-6">
                  <service.icon
                    className="h-8 w-8 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
