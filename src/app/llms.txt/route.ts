import { llmsTxt } from "@/lib/llms";

export const dynamic = "force-static";

/** /llms.txt: resumo do site para assistentes de IA, gerado do catálogo. */
export function GET() {
  return new Response(llmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
