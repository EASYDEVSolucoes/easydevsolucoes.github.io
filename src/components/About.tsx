import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 section-padding"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <article>
              <h2
                id="about-title"
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              >
                Sobre a EasyDev
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Somos uma empresa especializada em desenvolvimento de software e
                  soluções digitais, comprometida em entregar excelência e
                  inovação em cada projeto.
                </p>
                <p>
                  Nossa equipe é formada por profissionais altamente qualificados
                  e apaixonados por tecnologia, sempre buscando as melhores
                  soluções para nossos clientes.
                </p>
              </div>
              <div
                className="grid grid-cols-2 gap-6 mt-8 text-center"
                role="list"
              >
                <div
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                  role="listitem"
                >
                  <div className="text-3xl font-bold text-primary mb-1">
                    100+
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    Projetos Entregues
                  </div>
                </div>
                <div
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                  role="listitem"
                >
                  <div className="text-3xl font-bold text-primary mb-1">
                    50+
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    Clientes Satisfeitos
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={0.2} width="100%">
            <figure className="relative h-[400px] lg:h-[500px] w-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/company/about-us.png"
                alt="EasyDev Solutions - Escritório moderno"
                fill
                className="object-cover"
              />
            </figure>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
