import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import FacebookPixel from "@/components/FacebookPixel";
import GoogleTag from "@/components/GoogleTag";
import ScrollTracker from "@/components/ScrollTracker";
import DomainRedirect from "@/components/DomainRedirect";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "EasyDev - Soluções Digitais",
    template: "%s | EasyDev",
  },
  description:
    "Desenvolvimento de Software e Apps sob medida e Consultoria em TI. Transforme sua ideia em realidade com a EasyDev. Solicite um orçamento!",
  keywords: [
    "EasyDev Soluções Digitais",
    "desenvolvimento de software",
    "consultoria em TI",
    "aplicativos mobile",
    "sistemas web",
    "transformação digital",
    "EasyDev Ibirité",
    "criação de sites",
    "automação de processos",
    "soluções tecnológicas",
  ],
  authors: [{ name: "EasyDev Soluções" }],
  creator: "EasyDev Soluções",
  publisher: "EasyDev Soluções",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://easydevsolucoes.com.br"),
  alternates: {
    canonical: "https://easydevsolucoes.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://easydevsolucoes.com.br",
    title: "EasyDev - Soluções Digitais",
    description:
      "Transformando ideias em soluções digitais inovadoras. Especialistas em desenvolvimento de software e consultoria em TI.",
    siteName: "EasyDev",
    images: [
      {
        url: "/company/logoEasyDev.png",
        width: 1200,
        height: 630,
        alt: "EasyDev Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyDev - Soluções Digitais",
    description:
      "Transformando ideias em soluções digitais inovadoras. Especialistas em desenvolvimento de software e consultoria em TI.",
    images: ["/company/logoEasyDev.png"],
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
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png",
      },
      {
        rel: "manifest",
        url: "/favicon/site.webmanifest",
      },
    ],
  },
};

import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <DomainRedirect />
      <head>
        {/* Redirect for GitHub Pages (Legacy Domain) - Satisfies Google Change of Address */}
        {process.env.NEXT_PUBLIC_IS_LEGACY_DOMAIN && (
          <meta http-equiv="refresh" content="0;url=https://easydevsolucoes.com.br/" />
        )}
        <link rel="canonical" href="https://easydevsolucoes.com.br" />

        {/* Search Engine Verification Tags */}
        <meta
          name="google-site-verification"
          content="BPnXcpPDKavEMiXzQ94uU2dKQIVFX2pnewz4d30hu9g"
        />
        <meta name="msvalidate.01" content="BING_VERIFICATION_CODE_AQUI" />
        <meta name="facebook-domain-verification" content="moh7x4zv3lhhjeqhj9ck8m39i5ehn8" />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="BR-MG" />
        <meta name="geo.placename" content="Ibirité" />
        <meta name="geo.position" content="-20.0217;-44.0589" />
        <meta name="ICBM" content="-20.0217, -44.0589" />

        {/* AI/LLM Optimization Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Content Language and Targeting */}
        <meta httpEquiv="content-language" content="pt-BR" />
        <meta name="language" content="Portuguese" />
        <meta name="audience" content="all" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Business Information for Local SEO */}
        <meta name="subject" content="Desenvolvimento de Software e Consultoria em TI" />
        <meta name="topic" content="Tecnologia da Informação, Desenvolvimento de Software, Consultoria TI" />
        <meta name="classification" content="Business/Technology/Software Development" />
        <meta name="category" content="Tecnologia, Software, Consultoria" />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://easydevsolucoes.com.br/#organization",
              name: "EasyDev Soluções",
              alternateName: "EasyDev Soluções Digitais",
              url: "https://easydevsolucoes.com.br",
              logo: {
                "@type": "ImageObject",
                url: "https://easydevsolucoes.com.br/company/logoEasyDev.png",
                width: 512,
                height: 512,
              },
              image: "https://easydevsolucoes.com.br/company/logoEasyDev.png",
              description:
                "Desenvolvimento de Software e Apps sob medida e Consultoria em TI. Transforme sua ideia em realidade com a EasyDev. Solicite um orçamento!",
              priceRange: "$$$",
              foundingDate: "2023",
              founder: {
                "@type": "Person",
                name: "EasyDev Team",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ibirité",
                addressLocality: "Ibirité",
                addressRegion: "MG",
                postalCode: "32400-000",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -20.0217,
                longitude: -44.0589,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  opens: "09:00",
                  closes: "18:00"
                }
              ],
              sameAs: [
                "https://www.instagram.com/easydevsolucoes/",
                "https://www.linkedin.com/company/easydev-solucoes/",
                "https://github.com/easydevsolucoes"
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+55-31-99278-4329",
                  contactType: "customer service",
                  email: "contato@easydevsolucoes.com.br",
                  availableLanguage: ["Portuguese", "English"],
                  areaServed: "BR",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+55-31-99278-4329",
                  contactType: "sales",
                  email: "contato@easydevsolucoes.com.br",
                  availableLanguage: ["Portuguese", "English"],
                },
              ],

              areaServed: {
                "@type": "Country",
                name: "Brazil",
              },
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -20.0217,
                  longitude: -44.0589,
                },
                geoRadius: "50000",
              },
              knowsAbout: [
                "Desenvolvimento de Software",
                "Consultoria em TI",
                "Desenvolvimento Web",
                "Aplicativos Mobile",
                "Transformação Digital",
                "Cloud Computing",
                "DevOps",
                "Inteligência Artificial",
              ],
            }),
          }}
        />
        {/* ProfessionalService Schema for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://easydevsolucoes.com.br/#ProfessionalService",
              name: "EasyDev Soluções",
              image: "https://easydevsolucoes.com.br/company/logoEasyDev.png",
              url: "https://easydevsolucoes.com.br",
              telephone: "+55-31-99278-4329",
              email: "contato@easydevsolucoes.com.br",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ibirité",
                addressLocality: "Ibirité",
                addressRegion: "MG",
                postalCode: "32400-000",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -20.0217,
                longitude: -44.0589,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/easydevsolucoes",
                "https://github.com/EASYDEVSolucoes",
                "https://www.instagram.com/easydevsolucoes",
              ],
            }),
          }}
        />
        {/* WebSite Schema for Site Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://easydevsolucoes.com.br/#website",
              url: "https://easydevsolucoes.com.br",
              name: "EasyDev Soluções Digitais",
              description:
                "Transformando ideias em soluções digitais inovadoras. Especialistas em desenvolvimento de software e consultoria em TI.",
              publisher: {
                "@id": "https://easydevsolucoes.com.br/#organization",
              },
              inLanguage: "pt-BR",
            }),
          }}
        />
        {/* Service Schema for Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "Service",
                  position: 1,
                  name: "Desenvolvimento de Software",
                  description:
                    "Criamos soluções de software personalizadas, desde aplicações web até sistemas empresariais completos, utilizando as tecnologias mais modernas do mercado.",
                  provider: {
                    "@id": "https://easydevsolucoes.com.br/#organization",
                  },
                  areaServed: "BR",
                  serviceType: "Software Development",
                },
                {
                  "@type": "Service",
                  position: 2,
                  name: "Consultoria em TI",
                  description:
                    "Oferecemos consultoria especializada para otimizar seus processos de TI, desde a análise de requisitos até a implementação de soluções.",
                  provider: {
                    "@id": "https://easydevsolucoes.com.br/#organization",
                  },
                  areaServed: "BR",
                  serviceType: "IT Consulting",
                },
                {
                  "@type": "Service",
                  position: 3,
                  name: "Desenvolvimento Ágil",
                  description:
                    "Utilizamos metodologias ágeis como Scrum e Kanban para entregar valor de forma rápida e contínua, com foco na qualidade e satisfação do cliente.",
                  provider: {
                    "@id": "https://easydevsolucoes.com.br/#organization",
                  },
                  areaServed: "BR",
                  serviceType: "Agile Development",
                },
              ],
            }),
          }}
        />
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://easydevsolucoes.com.br",
                },
              ],
            }),
          }}
        />
        {/* FAQPage Schema for common questions */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Quais serviços a EasyDev oferece?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A EasyDev oferece desenvolvimento de software personalizado, consultoria em TI, desenvolvimento web e mobile, implementação de metodologias ágeis, transformação digital e soluções em nuvem.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Onde a EasyDev está localizada?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A EasyDev está localizada em Ibirité, Minas Gerais, Brasil, e atende clientes em todo o território nacional de forma remota.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Como posso entrar em contato com a EasyDev?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Você pode entrar em contato conosco pelo WhatsApp (31) 99278-4329, pelo e-mail contato@easydevsolucoes.com.br ou através do formulário de contato em nosso site.",
                  },
                },
                {
                  "@type": "Question",
                  name: "A EasyDev trabalha com quais tecnologias?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Trabalhamos com diversas tecnologias modernas incluindo React, Next.js, Node.js, Python, TypeScript, AWS, Azure, Google Cloud, Docker, Kubernetes, e muitas outras.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ScrollProgress />
        <WhatsAppButton />
        <FacebookPixel />
        <GoogleTag />
        <ScrollTracker />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
