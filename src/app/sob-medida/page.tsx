import OfferPage, { offerMetadata } from "@/components/OfferPage";
import { getOffer } from "@/data/offers";

// O conteúdo desta página fica em src/data/offers.ts
const offer = getOffer("sob-medida");

export const metadata = offerMetadata(offer);

export default function Page() {
  return <OfferPage offer={offer} />;
}
