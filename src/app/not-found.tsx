import Link from "next/link";
import { offers } from "@/data/offers";

export default function NotFound() {
  return (
    <section className="px-4 pb-24 pt-40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="chip mb-6">Erro 404</p>
        <h1 className="text-balance text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
          Esta página não <span className="text-primary">existe</span>.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          O endereço pode ter mudado. Estes são os caminhos mais procurados:
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {offers.map((offer) => (
            <li key={offer.slug}>
              <Link href={`/${offer.slug}/`} className="btn-secondary btn-sm">
                {offer.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/precos/" className="btn-secondary btn-sm">
              Preços
            </Link>
          </li>
        </ul>
        <div className="mt-10">
          <Link href="/" className="btn-primary">
            Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
}
