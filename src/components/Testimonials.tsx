import { testimonials } from "@/data/site";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

/**
 * Depoimentos de clientes. A lista fica em src/data/site.ts e só recebe
 * depoimentos reais, com autorização. Vazia, a seção não é renderizada.
 */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="section-padding bg-white" aria-labelledby="depoimentos">
      <div className="container-page">
        <SectionHeading id="depoimentos" title="O que dizem os clientes" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.author} delay={index * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-xl">
                <blockquote className="mb-6 flex-grow italic leading-relaxed text-gray-700">
                  “{item.quote}”
                </blockquote>
                <figcaption>
                  <p className="font-bold text-gray-900">{item.author}</p>
                  <p className="text-sm text-gray-600">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                        {item.role}
                      </a>
                    ) : (
                      item.role
                    )}
                  </p>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
