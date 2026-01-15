"use client";

import ScrollReveal from "./ScrollReveal";
import {
    MagnifyingGlassIcon,
    PencilSquareIcon,
    CodeBracketIcon,
    RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const steps = [
    {
        title: "1. Descoberta",
        description:
            "Entendemos profundamente seu negócio, objetivos e desafios para traçar a melhor estratégia.",
        icon: MagnifyingGlassIcon,
    },
    {
        title: "2. Design",
        description:
            "Criamos protótipos e interfaces intuitivas focadas na melhor experiência do usuário.",
        icon: PencilSquareIcon,
    },
    {
        title: "3. Desenvolvimento",
        description:
            "Codificamos sua solução com as tecnologias mais modernas e robustas do mercado.",
        icon: CodeBracketIcon,
    },
    {
        title: "4. Lançamento",
        description:
            "Realizamos testes rigorosos e deploy, garantindo uma entrega perfeita e escalável.",
        icon: RocketLaunchIcon,
    },
];

export default function Process() {
    return (
        <section id="process" className="py-24 bg-gray-900 text-white relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Background blobs for visual interest */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal width="100%">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            Nosso Processo
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Uma metodologia ágil e transparente para transformar sua ideia em
                            software.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.1}
                            width="100%"
                            className="h-full sticky md:static"
                            style={{
                                top: `${6 + index * 1}rem`,
                                zIndex: 10 + index
                            }}
                        >
                            <div className="relative group h-full">
                                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-primary/50 transition-colors duration-300 h-full flex flex-col items-center text-center shadow-2xl">
                                    <div className="bg-gray-700 p-4 rounded-full mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                                        <step.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
