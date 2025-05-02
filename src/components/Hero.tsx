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
    <section className="relative bg-gradient-to-b from-white to-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Transformando ideias em soluções digitais inovadoras
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Somos especialistas em desenvolvimento de software e consultoria
              em TI, ajudando empresas a alcançarem seus objetivos através da
              tecnologia.
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
  );
};

export default Hero;
