import type { MetadataRoute } from "next";
import { diagnostico, offers } from "@/data/offers";
import { absoluteUrl, site } from "@/data/site";

export const dynamic = "force-static";

/** O sitemap sai do catálogo: página nova de oferta entra aqui sozinha. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${site.lastUpdated}T12:00:00-03:00`);

  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl(diagnostico.slug), lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...offers.map((offer) => ({
      url: absoluteUrl(offer.slug),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: absoluteUrl("precos"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("sobre"), lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("politica-privacidade"), lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("termos-de-uso"), lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
