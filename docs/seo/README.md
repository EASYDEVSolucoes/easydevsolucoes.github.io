# Documentação de SEO - EasyDev Soluções

**Última atualização:** Outubro 2026

---

## Visão Geral

Esta documentação contém guias completos e atualizados para otimização de SEO do site da EasyDev Soluções. Os tutoriais cobrem desde configurações básicas até estratégias avançadas para 2026.

---

## Índice de Tutoriais

| # | Tutorial | Descrição | Nível |
|---|----------|-----------|-------|
| 01 | [Google Search Console](./01-google-search-console.md) | Configuração e uso do GSC | Iniciante |
| 02 | [Bing Webmaster Tools](./02-bing-webmaster-tools.md) | Configuração do Bing e IndexNow | Iniciante |
| 03 | [Google Meu Negócio](./03-google-meu-negocio.md) | SEO local e presença no Maps | Iniciante |
| 04 | [Monitoramento SEO](./04-monitoramento-seo.md) | Métricas, ferramentas e estratégias | Intermediário |
| 05 | [Depois de publicar](./05-pos-publicacao.md) | Lista do que fazer no Search Console, no Bing e no Google após cada publicação | Iniciante |

---

## Status Atual de SEO

### Implementações Realizadas

#### On-Page SEO
- [x] Meta tags otimizadas (title, description)
- [x] Open Graph e Twitter Cards
- [x] Canonical URLs em todas as páginas
- [x] Hierarquia de headings correta
- [x] Alt text em imagens
- [x] Schema.org completo (Organization, ProfessionalService, WebSite, Service, FAQ, Breadcrumb)

#### Técnico
- [x] HTTPS habilitado
- [x] robots.txt otimizado (com regras para AI crawlers)
- [x] sitemap.xml com image sitemap
- [x] Redirecionamento de trailing slash
- [x] Compressão gzip
- [x] Cache headers configurados
- [x] Security headers (X-Frame-Options, etc.)

#### Verificações
- [x] Google Search Console verificado
- [ ] Bing Webmaster Tools (código placeholder - precisa configurar)
- [x] Facebook Domain Verification
- [x] Google Tag Manager
- [x] Google Analytics 4
- [x] Facebook Pixel

#### Local SEO
- [x] ProfessionalService Schema
- [x] Geo meta tags
- [ ] Google Business Profile (configurar manualmente)

#### AI Search (GEO)
- [x] llms.txt criado
- [x] robots.txt permite AI crawlers
- [x] FAQPage Schema
- [x] Conteúdo estruturado

---

## Arquivos de Configuração

| Arquivo | Localização | Descrição |
|---------|-------------|-----------|
| robots.txt | `/src/app/robots.ts` | Regras para buscadores e rastreadores de IA (gerado no build) |
| sitemap.xml | `/src/app/sitemap.ts` | Mapa do site, gerado do catálogo |
| llms.txt e llms-full.txt | `/src/lib/llms.ts` | Resumo e conteúdo completo para assistentes de IA, gerados do catálogo |
| Dados estruturados | `/src/lib/schema.ts` | WebPage, trilha, Service e ofertas de cada página |
| Catálogo | `/src/data/offers.ts` | Preços, prazos, definições e perguntas de cada oferta |
| IndexNow | `/scripts/indexnow.mjs` | Avisa o Bing das páginas alteradas (`yarn indexnow`) |
| layout.tsx | `/src/app/layout.tsx` | Meta tags e Schema.org |

---

## Próximas Ações

### Prioridade Alta
1. [ ] Conferir o site no Bing Webmaster Tools e enviar o sitemap (ver 05)
2. [ ] Criar e verificar Google Business Profile
3. [x] IndexNow implementado: rodar `yarn indexnow` depois de cada publicação

### Prioridade Média
4. [ ] Solicitar avaliações de clientes no Google
5. [ ] Criar conteúdo de blog (opcional, para keywords adicionais)
6. [ ] Monitorar Core Web Vitals e otimizar se necessário

### Prioridade Baixa
7. [ ] Integrar Microsoft Clarity para heatmaps
8. [ ] Configurar alertas automáticos no Search Console
9. [ ] Estabelecer rotina de relatórios mensais

---

## Métricas para Acompanhar

### Semanal
- Impressões e cliques (GSC)
- Posição média por keyword
- Erros de indexação

### Mensal
- Tráfego orgânico (GA4)
- Core Web Vitals
- Novas avaliações

### Trimestral
- Posição para keywords principais
- Crescimento de backlinks
- Comparação com concorrentes

---

## Contatos Importantes

### Contas Google
- **Search Console**: Conta Google da empresa
- **Analytics**: Mesma conta
- **Tag Manager**: GTM-TS6PQGFD
- **Analytics ID**: G-D94HDKTB13

### Códigos de Verificação
- **Google**: `BPnXcpPDKavEMiXzQ94uU2dKQIVFX2pnewz4d30hu9g`
- **Bing**: Configurar em https://www.bing.com/webmasters
- **Facebook**: `moh7x4zv3lhhjeqhj9ck8m39i5ehn8`

---

## Recursos Externos

### Documentação Oficial
- [Google Search Central](https://developers.google.com/search)
- [Bing Webmaster Help](https://www.bing.com/webmasters/help)
- [Schema.org](https://schema.org)

### Ferramentas de Teste
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Tutoriais Externos
- [Web.dev](https://web.dev)
- [SEO Learning Center - Moz](https://moz.com/learn/seo)
- [Backlinko Blog](https://backlinko.com/blog)

---

## Histórico de Atualizações

| Data | Alteração |
|------|-----------|
| 2026-01-13 | Documentação inicial criada |
| 2026-01-13 | Schema.org expandido (6 tipos) |
| 2026-01-13 | robots.txt otimizado para AI crawlers |
| 2026-01-13 | llms.txt criado |
| 2026-01-13 | Meta tags GEO adicionadas |
| 2026-01-13 | Tutoriais completos criados |

---

*Documentação mantida pela equipe EasyDev Soluções*
