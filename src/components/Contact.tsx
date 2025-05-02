import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para ajudar a transformar suas ideias em realidade
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
