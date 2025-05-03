import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { smoothScroll } from "@/utils/smoothScroll";

const Hero = () => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      smoothScroll(href);
    },
    []
  );

  return (
    <section
      className="relative bg-gradient-to-b from-white to-gray-50 section-padding"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <article>
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            >
              Transformando ideias em soluções digitais inovadoras
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Somos especialistas em desenvolvimento de software e consultoria
              em TI, ajudando empresas a alcançarem seus objetivos através da
              tecnologia.
            </p>
            <nav className="flex flex-wrap gap-4" aria-label="Ações principais">
              <Link
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="btn-primary"
                aria-label="Iniciar um projeto conosco"
              >
                Comece seu projeto
              </Link>
              <Link
                href="#services"
                onClick={(e) => handleClick(e, "#services")}
                className="btn-secondary"
                aria-label="Conhecer nossos serviços"
              >
                Nossos serviços
              </Link>
            </nav>
          </article>
          <figure className="relative h-[400px] w-full">
            <Image
              src="/company/logoEasyDev.png"
              alt="EasyDev Solutions - Logo da empresa"
              fill
              className="object-contain"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
