import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

/**
 * Rastreadores de busca e de assistentes de IA. Todos já são liberados pela
 * regra geral; a lista explícita deixa a intenção clara e evita que uma regra
 * futura bloqueie algum deles sem querer.
 */
const aiCrawlers = [
  "GPTBot", // OpenAI: treino
  "OAI-SearchBot", // OpenAI: busca do ChatGPT
  "ChatGPT-User", // OpenAI: visita a pedido do usuário
  "ClaudeBot", // Anthropic
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // Gemini
  "Applebot-Extended",
  "Bingbot", // Bing e Copilot
  "CCBot", // Common Crawl
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
