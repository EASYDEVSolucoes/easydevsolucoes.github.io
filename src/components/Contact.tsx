import ContactForm from "./ContactForm";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  return (
    <section id="contact" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal width="100%">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos prontos para ajudar a transformar suas ideias em realidade
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} width="100%">
          <div className="max-w-lg mx-auto bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
