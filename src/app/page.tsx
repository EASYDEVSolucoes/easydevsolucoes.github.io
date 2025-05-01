"use client";

import Image from "next/image";
import Header from "@/components/Header";
import {
  CodeBracketIcon,
  CpuChipIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "@/components/ContactForm";
import { useCallback } from "react";
import { smoothScroll } from "@/utils/smoothScroll";
import Link from "next/link";

export default function Home() {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      smoothScroll(href);
    },
    []
  );

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
                  <Link
                    href="#contact"
                    onClick={(e) => handleClick(e, "#contact")}
                    className="btn-primary"
                  >
                    Comece seu projeto
                  </Link>
                  <Link
                    href="#services"
                    onClick={(e) => handleClick(e, "#services")}
                    className="btn-secondary"
                  >
                    Nossos serviços
                  </Link>
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

        {/* Mission Section */}
        <section id="mission" className="bg-white section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nossa Missão
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transformar o futuro digital das empresas através de soluções
                inovadoras e personalizadas
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Visão
                </h3>
                <p className="text-gray-600">
                  Ser referência em desenvolvimento de software e consultoria em
                  TI, reconhecida pela excelência e inovação em cada projeto.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Valores
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Inovação constante</li>
                  <li>Qualidade em primeiro lugar</li>
                  <li>Compromisso com o cliente</li>
                  <li>Ética e transparência</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Objetivos
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Entregar soluções de alta qualidade</li>
                  <li>Superar expectativas dos clientes</li>
                  <li>Promover transformação digital</li>
                  <li>Desenvolver parcerias duradouras</li>
                </ul>
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
              <ContactForm />
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
                <li>Email: easydevsolucoes@gmail.com</li>
                <li>Telefone: (31) 99278-4329</li>
                <li>Ibirité, MG</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="https://www.linkedin.com/company/easydevsolucoes"
                    className="hover:text-primary"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/EASYDEVSolucoes"
                    className="hover:text-primary"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/easydevsolucoes"
                    className="hover:text-primary"
                  >
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
            <Link
              href="/politica-privacidade"
              className="text-gray-300 hover:text-primary mt-2 inline-block"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
