import ScrollReveal from "./ScrollReveal";

const Mission = () => {
  return (
    <section
      id="mission"
      className="bg-white section-padding"
      aria-labelledby="mission-title"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal width="100%">
          <header className="text-center mb-16">
            <h2
              id="mission-title"
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Nossa Missão
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transformar o futuro digital das empresas através de soluções
              inovadoras e personalizadas
            </p>
          </header>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 " role="list">
          <ScrollReveal
            delay={0}
            width="100%"
            className="h-full sticky md:static z-10"
            style={{ top: "6rem" }}
          >
            <article
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 h-full flex flex-col"
              role="listitem"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                Visão
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Ser referência em desenvolvimento de software e consultoria em TI,
                reconhecida pela excelência e inovação em cada projeto.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal
            delay={0.1}
            width="100%"
            className="h-full sticky md:static z-20"
            style={{ top: "7rem" }}
          >
            <article
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 h-full flex flex-col"
              role="listitem"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                Valores
              </h3>
              <ul className="space-y-3 text-gray-600 flex-grow">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Inovação constante
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Qualidade em primeiro lugar
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Compromisso com o cliente
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Ética e transparência
                </li>
              </ul>
            </article>
          </ScrollReveal>

          <ScrollReveal
            delay={0.2}
            width="100%"
            className="h-full sticky md:static z-30"
            style={{ top: "8rem" }}
          >
            <article
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 h-full flex flex-col"
              role="listitem"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                Objetivos
              </h3>
              <ul className="space-y-3 text-gray-600 flex-grow">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Entregar soluções high-end
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Superar expectativas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Transformação digital
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Parcerias duradouras
                </li>
              </ul>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Mission;
