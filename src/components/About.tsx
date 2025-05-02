import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sobre a EasyDev
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Somos uma empresa especializada em desenvolvimento de software e
              soluções digitais, comprometida em entregar excelência e inovação
              em cada projeto.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Nossa equipe é formada por profissionais altamente qualificados e
              apaixonados por tecnologia, sempre buscando as melhores soluções
              para nossos clientes.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-gray-600">Projetos Entregues</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-gray-600">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="/company/logoEasyDev.png"
              alt="Sobre a EasyDev"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
