import Image from "next/image";
import Header from "@/components/Header";
import {
  CodeBracketIcon,
  CpuChipIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
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

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-white to-gray-50 section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Transformando ideias em soluções digitais inovadoras
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Somos especialistas em desenvolvimento de software e
                  consultoria em TI, ajudando empresas a alcançarem seus
                  objetivos através da tecnologia.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="btn-primary">
                    Comece seu projeto
                  </a>
                  <a href="#services" className="btn-secondary">
                    Nossos serviços
                  </a>
                </div>
              </div>
              <div className="relative h-[400px] w-full">
                <Image
                  src="/company/logoEasyDev.png"
                  alt="EasyDev Solutions"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-white section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nossos Serviços
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Oferecemos soluções completas em tecnologia para impulsionar seu
                negócio
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-50 section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Sobre a EasyDev
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Somos uma empresa especializada em desenvolvimento de software
                  e soluções digitais, comprometida em entregar excelência e
                  inovação em cada projeto.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Nossa equipe é formada por profissionais altamente
                  qualificados e apaixonados por tecnologia, sempre buscando as
                  melhores soluções para nossos clientes.
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

        {/* Contact Section */}
        <section id="contact" className="bg-white section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Entre em Contato
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Estamos prontos para ajudar a transformar suas ideias em
                realidade
              </p>
            </div>
            <div className="max-w-lg mx-auto">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full btn-primary">
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/company/logoEasyDev.png"
                alt="EasyDev Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-300">
                Transformando ideias em soluções digitais inovadoras
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: diogo.coutinho.ads@gmail.com</li>
                <li>Telefone: (11) 99999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-primary">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>
              &copy; {new Date().getFullYear()} EasyDev. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
