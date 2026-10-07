# Documentação de Integrações e SEO

Este documento detalha as configurações de integração com ferramentas de análise (Meta, Google) e otimizações de SEO implementadas no projeto.

## 1. Integrações Meta (Facebook/Instagram)

### Configuração
- **Pixel ID**: Configurado via variável de ambiente `NEXT_PUBLIC_FACEBOOK_PIXEL_ID`.
- **Verificação de Domínio**: Token meta-tag configurado em `src/app/layout.tsx`.

### Eventos Rastreados
O Pixel só é carregado depois que a pessoa aceita os cookies de medição (`CookieConsent.tsx`). Os eventos ficam em `src/lib/analytics.ts`:

| Evento | Gatilho | Onde |
| :--- | :--- | :--- |
| `PageView` | Carregamento de página, depois do aceite | `FacebookPixel.tsx` |
| `Contact` (`method: whatsapp`) | Clique em qualquer link de WhatsApp | `WhatsAppLink.tsx` |
| `Lead` | Envio do formulário de diagnóstico | `ContactForm.tsx` |

### Validação
Utilize a extensão **Meta Pixel Helper** para Chrome.
1. Acesse o site.
2. Verifique se o `PageView` foi disparado com sucesso.
3. Aceite os cookies, preencha o formulário ou clique no WhatsApp para verificar os eventos `Lead` e `Contact`.

---

## 2. Integrações Google (GA4 & GTM)

### Configuração
- **Google Tag Manager (GTM)**: ID configurado via `NEXT_PUBLIC_GOOGLE_TAG_ID`.
- **Google Analytics 4 (GA4)**: ID de medição via `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

### Eventos Rastreados
GTM e GA4 também só carregam depois do aceite de cookies. Eventos enviados ao GA4 via `gtag`:

| Evento | Gatilho | Parâmetros |
| :--- | :--- | :--- |
| `page_view` | Carregamento de página (automático do GA4) | padrão |
| `whatsapp_click` | Clique em qualquer link de WhatsApp | `origin`, `page` |
| `generate_lead` | Envio do formulário de diagnóstico | `form: "diagnostico"`, `page` |

Marque `whatsapp_click` e `generate_lead` como eventos principais (conversões) no GA4.

### Validação
Utilize a extensão **Google Tag Assistant** ou o modo de Debug do GTM.
1. Verifique se as tags do GTM/GA4 estão disparando.
2. No Console do navegador, verifique se não há erros de `gtag is not defined`.

---

## 3. SEO (Otimização para Motores de Busca)

### Estrutura Técnica
- **Next.js Metadata**: padrões em `src/app/layout.tsx`; cada página define título, descrição e canonical com `pageMetadata()` (`src/lib/metadata.ts`).
- **Sitemap**: Gerado automaticamente em `https://easydevsolucoes.com.br/sitemap.xml`.
- **Robots.txt**: Configurado em `https://easydevsolucoes.com.br/robots.txt`.
- **Schema Markup**: um bloco `ProfessionalService` no `layout.tsx`, `Service` em cada página de oferta e `FAQPage` gerado das perguntas visíveis. Tudo sai de `src/data`.

### Verificação
- Utilize o **Google Search Console** para verificar a indexação.
- Teste os dados estruturados com a ferramenta [Rich Results Test](https://search.google.com/test/rich-results).

---

## 4. Variáveis de Ambiente Necessárias

Certifique-se de que o arquivo `.env` (ou as variáveis de ambiente na hospedagem) contenha chaves válidas:

```env
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=seu_pixel_id
NEXT_PUBLIC_GOOGLE_TAG_ID=seu_gtm_id
NEXT_PUBLIC_GA_MEASUREMENT_ID=seu_ga4_id
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```
