

import { StarIcon } from "@heroicons/react/24/solid";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
    {
        content:
            "A EasyDev transformou completamente nossa presença digital. O novo sistema otimizou nossos processos em 200%.",
        author: "Ricardo Silva",
        role: "CEO, TechFlow",
        rating: 5,
    },
    {
        content:
            "Profissionalismo e qualidade técnica excepcionais. Entregaram o projeto antes do prazo e com qualidade superior.",
        author: "Ana Martins",
        role: "Diretora de Marketing, CreativeLabs",
        rating: 5,
    },
    {
        content:
            "A melhor parceria de tecnologia que já fizemos. O suporte contínuo e a atenção aos detalhes são diferenciais.",
        author: "Carlos Santos",
        role: "CTO, FutureSystems",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal width="100%">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            O que dizem nossos clientes
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Histórias reais de transformação e sucesso com a EasyDev.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.1}
                            className="h-full sticky md:static"
                            style={{
                                top: `${6 + index * 1}rem`,
                                zIndex: 10 + index
                            }}
                        >
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300 shadow-xl">
                                <div className="flex gap-1 mb-4 text-primary">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <StarIcon key={i} className="h-5 w-5" />
                                    ))}
                                </div>
                                <p className="text-gray-700 italic mb-6 flex-grow">
                                    "{testimonial.content}"
                                </p>
                                <div>
                                    <p className="font-bold text-gray-900">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
