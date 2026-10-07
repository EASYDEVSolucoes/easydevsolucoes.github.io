import { partners } from "@/data/site";

/** Parceiros. A lista fica em src/data/site.ts. */
export default function Partners() {
  if (partners.length === 0) return null;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="parceiros">
      <div className="container-page text-center">
        <h2 id="parceiros" className="text-sm font-bold uppercase tracking-wider text-gray-700">
          Parceiros
        </h2>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {partners.map((partner) => (
            <li key={partner.name}>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={80}
                  loading="lazy"
                  decoding="async"
                  className="h-20 w-[200px] object-contain"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
