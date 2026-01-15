import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const Partners = () => {
  return (
    <section id="partners" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal width="100%">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
            Nossos Parceiros
          </h2>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
          <ScrollReveal delay={0.1}>
            <a
              href="https://gcdigicont.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative w-[200px] h-[100px] grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-105"
            >
              <Image
                src="https://gcdigicont.com.br/logo.png"
                alt="GCDigicont Logo"
                fill
                className="object-contain"
              />
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <a
              href="https://kennygalmeida.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative w-[200px] h-[100px] grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-105"
            >
              <Image
                src="https://kennygalmeida.com.br/kennylogo.png"
                alt="Kenny Almeida Lab Logo"
                fill
                className="object-contain"
              />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Partners;
