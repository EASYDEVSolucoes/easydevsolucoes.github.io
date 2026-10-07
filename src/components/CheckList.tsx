import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

/** Lista com ✓ em dourado (o que entra) ou × em cinza (o que não entra). */
export default function CheckList({
  items,
  variant = "check",
  className = "",
}: {
  items: readonly string[];
  variant?: "check" | "cross";
  className?: string;
}) {
  const Icon = variant === "check" ? CheckIcon : XMarkIcon;
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-gray-700">
          <Icon
            className={`mt-0.5 h-5 w-5 flex-none ${variant === "check" ? "text-primary-text" : "text-gray-600"}`}
            strokeWidth={2.5}
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
