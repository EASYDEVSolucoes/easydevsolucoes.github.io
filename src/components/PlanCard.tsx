import type { Plan } from "@/data/offers";
import CheckList from "./CheckList";

/** Card de plano: nome, preço, prazo e o que está incluído. */
export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={`card h-full ${plan.featured ? "border-primary ring-1 ring-primary" : ""}`}
    >
      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
      <p className="mt-2 text-gray-700">{plan.description}</p>

      <p className="mt-6 font-heading text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
        {plan.price}
        {plan.unit && <span className="ml-2 text-base font-medium text-gray-700">{plan.unit}</span>}
      </p>
      {plan.priceExtra && <p className="mt-1 font-heading text-xl font-bold text-gray-900">{plan.priceExtra}</p>}
      {plan.term && <p className="mt-2 text-sm font-medium text-primary-text">{plan.term}</p>}

      <CheckList items={plan.includes} className="mt-6 border-t border-gray-100 pt-6" />
    </article>
  );
}
