import {
  CodeBracketIcon,
  CpuChipIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

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
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-white section-padding"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2
            id="services-title"
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em tecnologia para impulsionar seu
            negócio
          </p>
        </header>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
        >
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              role="listitem"
            >
              <service.icon
                className="h-12 w-12 text-primary mb-4"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
