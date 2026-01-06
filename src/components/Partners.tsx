import Image from "next/image";

const Partners = () => {
  return (
    <section id="partners" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nossos Parceiros
        </h2>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <a href="https://gcdigicont.com.br/" target="_blank">
              <Image
                src="https://gcdigicont.com.br/logo.png"
                alt="GCDigicont Logo"
                width={350}
                height={196}
                className="object-contain"
                priority
              />
            </a>
          </div>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <a href="https://kennygalmeida.com.br/" target="_blank">
              <Image
                src="https://kennygalmeida.com.br/kennylogo.png"
                alt="Kenny Almeida Lab Logo"
                width={350}
                height={196}
                className="object-contain"
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
