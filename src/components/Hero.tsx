import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { smoothScroll } from "@/utils/smoothScroll";
import { motion } from "framer-motion";

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
      className="relative min-h-[90vh] flex items-center bg-gray-50 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 to-transparent blur-3xl opacity-50 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-accent/10 to-transparent blur-3xl opacity-50 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.article
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-6">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">
                Inovação e Tecnologia
              </span>
            </div>
            <h1
              id="hero-title"
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.1]"
            >
              Transformando <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                ideias
              </span>{" "}
              em soluções digitais.
            </h1>
            <p className="text-lg sm:text-x text-gray-600 mb-8 leading-relaxed max-w-lg">
              Somos especialistas em desenvolvimento de software e consultoria em
              TI, ajudando empresas a alcançarem o próximo nível com tecnologia de
              ponta.
            </p>
            <div className="flex flex-wrap gap-4" aria-label="Ações principais">
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
            </div>
          </motion.article>

          <motion.figure
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="relative w-full h-full"
            >
              <Image
                src="/company/logoEasyDev.png"
                alt="EasyDev Solutions - Logo da empresa"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
