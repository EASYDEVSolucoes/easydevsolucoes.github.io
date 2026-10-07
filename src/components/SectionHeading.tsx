import type { ReactNode } from "react";

/** Cabeçalho de seção: selo opcional, título e uma linha de apoio. */
export default function SectionHeading({
  chip,
  title,
  lead,
  align = "center",
  dark = false,
  id,
}: {
  chip?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  id?: string;
}) {
  return (
    <header className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {chip && <p className="chip mb-5">{chip}</p>}
      <h2
        id={id}
        className={`text-balance text-3xl font-bold leading-tight lg:text-4xl ${dark ? "text-white" : "text-gray-900"}`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-pretty text-lg leading-relaxed ${dark ? "text-gray-300" : "text-gray-700"}`}>
          {lead}
        </p>
      )}
    </header>
  );
}
