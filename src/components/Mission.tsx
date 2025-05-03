const Mission = () => {
  return (
    <section
      id="mission"
      className="bg-white section-padding"
      aria-labelledby="mission-title"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2
            id="mission-title"
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Nossa Missão
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transformar o futuro digital das empresas através de soluções
            inovadoras e personalizadas
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          <article className="bg-gray-50 p-6 rounded-lg" role="listitem">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Visão</h3>
            <p className="text-gray-600">
              Ser referência em desenvolvimento de software e consultoria em TI,
              reconhecida pela excelência e inovação em cada projeto.
            </p>
          </article>
          <article className="bg-gray-50 p-6 rounded-lg" role="listitem">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Valores
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Inovação constante</li>
              <li>Qualidade em primeiro lugar</li>
              <li>Compromisso com o cliente</li>
              <li>Ética e transparência</li>
            </ul>
          </article>
          <article className="bg-gray-50 p-6 rounded-lg" role="listitem">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Objetivos
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Entregar soluções de alta qualidade</li>
              <li>Superar expectativas dos clientes</li>
              <li>Promover transformação digital</li>
              <li>Desenvolver parcerias duradouras</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Mission;
