# EasyDev Website

Website institucional da EasyDev, uma empresa especializada em desenvolvimento de software e soluções digitais.

## Tecnologias Utilizadas

- Next.js 16 (exportação estática)
- TypeScript
- Tailwind CSS
- Heroicons
- React

## Requisitos

- Node.js 18.17 ou superior
- npm 9.6.7 ou superior

## Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/EASYDEVSolucoes/easydevsolucoes.github.io.git
cd easydevsolucoes.github.io
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Onde editar

| Quero mudar | Arquivo |
| --- | --- |
| Preços, prazos, escopo e perguntas frequentes de cada oferta | `src/data/offers.ts` |
| Telefone, WhatsApp, e-mail, horário, redes sociais, CNPJ, parceiros, sócios e depoimentos | `src/data/site.ts` |
| Resumo para assistentes de IA (repete os preços em texto) | `public/llms.txt` |
| Cores e fontes do design system | `tailwind.config.js` e `src/app/globals.css` |

As páginas de oferta (`/presenca-local`, `/sites`, `/whatsapp-ia`, `/sob-medida`, `/redes-sociais`) usam o mesmo modelo, `src/components/OfferPage.tsx`, e leem o conteúdo de `src/data/offers.ts`. A página `/precos`, o sitemap e os dados estruturados saem do mesmo arquivo.

Regras que o site segue:

- Todo link de WhatsApp passa por `whatsappLink()` em `src/data/site.ts`, com o 55 do Brasil.
- Google Analytics, Tag Manager e Pixel da Meta só carregam depois do aceite no aviso de cookies (`src/components/CookieConsent.tsx`).
- Depoimentos e sócios só aparecem quando as listas em `src/data/site.ts` são preenchidas. Depoimento, só com autorização do cliente.
- Texto escuro sobre dourado nos botões (`btn-primary`); dourado em texto pequeno usa `text-primary-text`.

## Estrutura do Projeto

```
src/
├── app/                  # uma pasta por página (rota)
│   ├── layout.tsx        # cabeçalho, rodapé, dados estruturados da empresa
│   ├── page.tsx          # página inicial
│   ├── diagnostico/      # destino de todos os CTAs
│   ├── precos/ sobre/    # tabela de preços e dados da empresa
│   └── <oferta>/         # presenca-local, sites, whatsapp-ia, sob-medida, redes-sociais
├── components/           # seções e peças de interface
├── data/                 # offers.ts e site.ts: todo o conteúdo editável
├── hooks/ e lib/         # consentimento de cookies, eventos de conversão, metadados
public/
├── company/              # logos
└── og-easydev.png        # imagem de compartilhamento (1200 × 630)
```

## Deploy

O deploy é feito automaticamente quando há um push na branch `main`: o workflow `hostinger.yml` publica o site em https://easydevsolucoes.com.br e o `deploy.yml` publica no GitHub Pages uma versão que só redireciona para o domínio novo.

### Configuração Inicial do GitHub Pages

1. No repositório do GitHub, vá para Settings > Pages
2. Em "Source", selecione "GitHub Actions"
3. Certifique-se de que o repositório tem as seguintes permissões habilitadas em Settings > Actions > General:
   - Actions permissions: "Allow all actions and reusable workflows"
   - Workflow permissions: Marque "Read and write permissions"

### Deploy Manual

Para fazer o deploy manualmente:

1. Faça suas alterações no código
2. Commit e push para a branch main:

```bash
git add .
git commit -m "Update website"
git push origin main
```

O GitHub Actions irá automaticamente fazer o build e deploy do site para o GitHub Pages.

O site estará disponível em: https://easydevsolucoes.com.br

## Contato

Para mais informações, entre em contato:

- Email: contato@easydevsolucoes.com.br
- Telefone: (31) 99278-4329
- Ibirité, MG
