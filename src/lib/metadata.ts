import type { Metadata } from "next";
import { site } from "@/data/site";

export const ogImage = {
  url: "/og-easydev.png",
  width: 1200,
  height: 630,
  alt: "EasyDev: a equipe de tecnologia da sua pequena empresa",
};

/**
 * Metadados de uma página: título, descrição, endereço canônico próprio e
 * cartão de compartilhamento. `path` é a rota com barras, por exemplo "/sites/".
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  /** true para não acrescentar " | EasyDev" (página inicial). */
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
