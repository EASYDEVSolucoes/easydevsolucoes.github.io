import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

/** Seção escura "Como funciona": quatro passos numerados. */
export default function Process({
  title = "Como funciona",
  lead,
  steps,
}: {
  title?: string;
  lead?: string;
  steps: readonly { title: string; text: string }[];
}) {
  return (
    <section className="on-dark section-padding bg-gray-900" aria-labelledby="como-funciona">
      <div className="container-page">
        <SectionHeading id="como-funciona" title={title} lead={lead} dark />
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <ScrollReveal delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-gray-700 bg-gray-800 p-8 shadow-2xl">
                  <span
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 font-heading text-xl font-bold text-primary"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                  <p className="leading-relaxed text-gray-300">{step.text}</p>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
