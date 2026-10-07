import {
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  MegaphoneIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import type { IconKey } from "@/data/offers";

const icons = {
  diagnostico: MagnifyingGlassIcon,
  presenca: MapPinIcon,
  sites: ComputerDesktopIcon,
  whatsapp: ChatBubbleLeftRightIcon,
  sobmedida: Squares2X2Icon,
  redes: MegaphoneIcon,
} satisfies Record<IconKey, unknown>;

/** Ícone de contorno (Heroicons, traço 1,5) de cada oferta. */
export default function OfferIcon({
  name,
  className = "w-8 h-8",
}: {
  name: IconKey;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
