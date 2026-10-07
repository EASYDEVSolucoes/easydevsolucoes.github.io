/**
 * Título com uma palavra em dourado, a assinatura da marca.
 * `parts` é [antes, palavra de destaque, depois].
 */
export default function Headline({
  parts,
  as: Tag = "h1",
  id,
  className = "",
}: {
  parts: readonly [string, string, string];
  as?: "h1" | "h2";
  id?: string;
  className?: string;
}) {
  const size =
    Tag === "h1"
      ? "text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]"
      : "text-3xl lg:text-4xl font-bold leading-tight";

  return (
    <Tag id={id} className={`text-balance text-gray-900 ${size} ${className}`}>
      {parts[0]}
      <span className="text-primary">{parts[1]}</span>
      {parts[2]}
    </Tag>
  );
}
