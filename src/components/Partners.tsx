import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const Partners = () => {
  const partners = [
    {
      name: "GCDigicont",
      url: "https://gcdigicont.com.br/",
      logo: "https://gcdigicont.com.br/logo.png",
    },
    {
      name: "Kenny Almeida Lab",
      url: "https://kennygalmeida.com.br/",
      logo: "https://kennygalmeida.com.br/kennylogo.png",
    },
    // Duplicating for infinite scroll effect if needed, or we can map twice
    {
      name: "GCDigicont",
      url: "https://gcdigicont.com.br/",
      logo: "https://gcdigicont.com.br/logo.png",
    },
    {
      name: "Kenny Almeida Lab",
      url: "https://kennygalmeida.com.br/",
      logo: "https://kennygalmeida.com.br/kennylogo.png",
    },
  ];

  return (
    <section id="partners" className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <ScrollReveal width="100%">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900">
            Nossos Parceiros
          </h2>
        </ScrollReveal>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 min-w-full justify-around items-center px-8">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[200px] h-[100px] grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-105 flex-shrink-0"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                fill
                className="object-contain"
              />
            </a>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 min-w-full justify-around items-center px-8">
          {partners.map((partner, index) => (
            <a
              key={`clone-${index}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[200px] h-[100px] grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-105 flex-shrink-0"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                fill
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
