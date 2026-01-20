# Documentação de Integrações e SEO

Este documento detalha as configurações de integração com ferramentas de análise (Meta, Google) e otimizações de SEO implementadas no projeto.

## 1. Integrações Meta (Facebook/Instagram)

### Configuração
- **Pixel ID**: Configurado via variável de ambiente `NEXT_PUBLIC_FACEBOOK_PIXEL_ID`.
- **Verificação de Domínio**: Token meta-tag configurado em `src/app/layout.tsx`.

### Eventos Rastreados
O Pixel dispara automaticamente para todas as páginas e eventos específicos para interações de alto valor:

| Evento | Gatilho | Componente |
| :--- | :--- | :--- |
| `PageView` | Carregamento de qualquer página | `FacebookPixel.tsx` |
| `Contact` | Envio do formulário de contato | `ContactForm.tsx` |
| `Lead` (Custom) | Clique no botão WhatsApp | `WhatsAppButton.tsx` |
| `FormSubmit` | Envio do formulário de contato | `ContactForm.tsx` |

### Validação
Utilize a extensão **Meta Pixel Helper** para Chrome.
1. Acesse o site.
2. Verifique se o `PageView` foi disparado com sucesso.
3. Preencha o formulário ou clique no WhatsApp para verificar os eventos `Contact` e `Lead`.

---

## 2. Integrações Google (GA4 & GTM)

### Configuração
- **Google Tag Manager (GTM)**: ID configurado via `NEXT_PUBLIC_GOOGLE_TAG_ID`.
- **Google Analytics 4 (GA4)**: ID de medição via `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

### Eventos Rastreados
Eventos personalizados são disparados para o GA4 via `gtag.js` ou Data Layer do GTM:

| Evento | Gatilho | Parâmetros |
| :--- | :--- | :--- |
| `page_view` | Carregamento de página | `page_path` |
| `form_submit` | Sucesso no envio do formulário | `form_name: "contact_form"` |
| `contact` | Sucesso no envio do formulário | `method: "email"` |
| `whatsapp_click`| Clique no botão flutuante | N/A |

### Validação
Utilize a extensão **Google Tag Assistant** ou o modo de Debug do GTM.
1. Verifique se as tags do GTM/GA4 estão disparando.
2. No Console do navegador, verifique se não há erros de `gtag is not defined`.

---

## 3. SEO (Otimização para Motores de Busca)

### Estrutura Técnica
- **Next.js Metadata**: Títulos, descrições e Open Graph configurados em `src/app/layout.tsx`.
- **Sitemap**: Gerado automaticamente em `https://easydevsolucoes.com.br/sitemap.xml`.
- **Robots.txt**: Configurado em `https://easydevsolucoes.com.br/robots.txt`.
- **Schema Markup**: JSON-LD para `Organization` incluído no `layout.tsx` para Rich Snippets.

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
