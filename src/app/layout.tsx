import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";
import DomainRedirect from "@/components/DomainRedirect";
import FacebookPixel from "@/components/FacebookPixel";
import Footer from "@/components/Footer";
import GoogleTag from "@/components/GoogleTag";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import { diagnostico, offers } from "@/data/offers";
import { absoluteUrl, companyDefinition, expertise, site } from "@/data/site";
import { ogImage } from "@/lib/metadata";
import { ORG_ID, SITE_ID } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });

/*
  Padrões do site. Cada página define o próprio título, descrição e endereço
  canônico com pageMetadata() (src/lib/metadata.ts).
*/
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sites, automação e sistemas para pequenas empresas em BH | EasyDev",
    template: "%s | EasyDev",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  publisher: site.fullName,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "BPnXcpPDKavEMiXzQ94uU2dKQIVFX2pnewz4d30hu9g",
    other: {
      "facebook-domain-verification": "moh7x4zv3lhhjeqhj9ck8m39i5ehn8",
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
};

/*
  Dados estruturados da empresa: um bloco só, montado a partir de src/data.
  Endereço fica em cidade e estado; rua e CEP só entram quando forem os do CNPJ
  e a empresa quiser publicá-los.
*/
const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: site.fullName,
  alternateName: site.name,
  legalName: site.legalName,
  taxID: site.cnpj,
  url: site.url,
  logo: `${site.url}/company/logoEasyDev.png`,
  image: `${site.url}${ogImage.url}`,
  description: companyDefinition,
  slogan: site.tagline,
  knowsAbout: expertise,
  telephone: site.phoneE164,
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "BR",
  },
  areaServed: [
    ...site.serviceCities.map((name) => ({ "@type": "City", name })),
    { "@type": "Country", name: "Brasil" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: site.hours.days,
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phoneE164,
    email: site.email,
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
  sameAs: Object.values(site.social),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços da EasyDev",
    itemListElement: [
      {
        "@type": "Offer",
        price: 0,
        priceCurrency: "BRL",
        itemOffered: {
          "@type": "Service",
          name: diagnostico.name,
          description: diagnostico.cardText,
          url: absoluteUrl(diagnostico.slug),
        },
      },
      ...offers.map((offer) => ({
        "@type": "Offer",
        priceCurrency: "BRL",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "BRL",
          minPrice: offer.priceFromValue,
        },
        itemOffered: {
          "@type": "Service",
          name: offer.name,
          description: offer.cardText,
          url: absoluteUrl(offer.slug),
        },
      })),
    ],
  },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE_ID,
  url: site.url,
  name: site.fullName,
  alternateName: site.name,
  description: site.description,
  inLanguage: "pt-BR",
  publisher: { "@id": ORG_ID },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        {/* Build do domínio antigo (GitHub Pages): leva para o domínio novo */}
        {process.env.NEXT_PUBLIC_IS_LEGACY_DOMAIN && (
          <meta httpEquiv="refresh" content="0;url=https://easydevsolucoes.com.br/" />
        )}
        <JsonLd data={organization} />
        <JsonLd data={website} />
      </head>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-bold focus:text-gray-900 focus:shadow-xl"
        >
          Pular para o conteúdo
        </a>
        <DomainRedirect />
        <ScrollProgress />
        <Navbar />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <CookieConsent />
        <FacebookPixel />
        <GoogleTag />
      </body>
    </html>
  );
}
