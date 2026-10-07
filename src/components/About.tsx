import { reasons } from "@/data/offers";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

/** "Por que a EasyDev": o que sustenta a promessa, sem adjetivo. */
export default function About() {
  return (
    <section className="section-padding" aria-labelledby="por-que">
      <div className="container-page">
        <SectionHeading
          id="por-que"
          title="Por que a EasyDev"
          lead="Uma empresa pequena atendendo empresas pequenas: você sabe quanto custa, quando fica pronto e com quem falar."
        />
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <li key={reason.title}>
              <ScrollReveal delay={index * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <span className="mb-4 block h-1 w-8 rounded-full bg-primary" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-gray-900">{reason.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-700">{reason.text}</p>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
