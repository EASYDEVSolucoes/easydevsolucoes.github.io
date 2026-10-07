# Depois de publicar: Search Console, Bing e o que mais falta

**Atualizado em:** outubro de 2026

O site já sai do build com tudo o que os buscadores precisam: sitemap, robots, verificação do Google e do Bing, dados estruturados, `/llms.txt` e a chave do IndexNow. O que está nesta lista depende do seu login ou só funciona com o site novo no ar. Faça na ordem.

## No dia da publicação (30 minutos)

### 1. Conferir que subiu

- [ ] `https://easydevsolucoes.com.br/sitemap.xml` mostra 11 endereços
- [ ] `https://easydevsolucoes.com.br/llms.txt` abre e começa com "# EasyDev Soluções Digitais"
- [ ] `https://easydevsolucoes.com.br/a03c75db28cfd46d02df3cc46e027d09.txt` abre e mostra a chave
- [ ] Botão de WhatsApp testado no celular
- [ ] Formulário de `/diagnostico` enviado e e-mail recebido

### 2. Google Search Console

Entre em https://search.google.com/search-console com a conta que já verificou o domínio.

- [ ] **Sitemaps** → reenviar `sitemap.xml` (o antigo tinha 3 endereços; o novo tem 11)
- [ ] **Inspeção de URL** → colar cada endereço novo e clicar em "Solicitar indexação". Comece por `/`, `/diagnostico/`, `/sites/` e `/presenca-local/`; há um limite diário de pedidos, então pode levar dois dias
- [ ] **Configurações → Usuários** → dar acesso à sócia

Se a propriedade for do tipo "prefixo de URL", vale criar também a propriedade de **domínio** (`easydevsolucoes.com.br`), que junta http, https e www. Ela pede um registro TXT no DNS da Hostinger.

### 3. Bing Webmaster Tools

O Bing alimenta o Copilot e a busca do ChatGPT. Entre em https://www.bing.com/webmasters.

- [ ] Se o site ainda não estiver lá: **Importar do Google Search Console**. O arquivo `BingSiteAuth.xml` já está publicado, então a verificação por arquivo também funciona
- [ ] **Sitemaps** → enviar `https://easydevsolucoes.com.br/sitemap.xml`
- [ ] No terminal, na pasta do projeto: `yarn indexnow`. O script lê o sitemap que está no ar e avisa o Bing de todas as páginas. Rode de novo sempre que publicar mudança de conteúdo

### 4. Conferir os dados estruturados

- [ ] https://search.google.com/test/rich-results com `/sites/` e com `/`: nenhum erro
- [ ] https://validator.schema.org com `/presenca-local/`

### 5. Google Analytics 4

- [ ] **Administrador → Eventos** → marcar `generate_lead` e `whatsapp_click` como eventos principais. Eles só aparecem na lista depois do primeiro disparo: aceite os cookies, clique no WhatsApp e envie o formulário uma vez
- [ ] **Administrador → Vinculações de produtos** → vincular o Search Console

## Na primeira semana

### 6. Perfil da Empresa no Google

É o item de maior efeito para busca local e o único que nenhum código resolve. Passo a passo em [03-google-meu-negocio.md](./03-google-meu-negocio.md).

- [ ] Criar ou reivindicar em https://business.google.com
- [ ] Nome, telefone e site **idênticos** aos do rodapé: EasyDev Soluções Digitais, (31) 99278-4329, https://easydevsolucoes.com.br
- [ ] Categoria principal mais próxima de "Empresa de software" ou "Web designer" entre as que o Google oferecer; área de atendimento Belo Horizonte, Contagem, Betim e Ibirité
- [ ] Serviços com os mesmos nomes e preços da página `/precos`
- [ ] Link de agendamento apontando para `/diagnostico/`
- [ ] Pedir avaliação a 10 clientes

### 7. Bing Places

- [ ] https://www.bingplaces.com → importar do Perfil da Empresa no Google

### 8. Redes

- [ ] Bio do Instagram com público e promessa, e link para `https://easydevsolucoes.com.br/diagnostico/?utm_source=instagram&utm_medium=bio`
- [ ] Mesmo link no LinkedIn da empresa e na Página do Facebook
- [ ] Conferir se o link do Facebook no rodapé é a Página certa (`src/data/site.ts`)

## Todo mês

- [ ] Search Console → **Desempenho**: quais buscas trazem impressões; ajustar títulos em `src/data/offers.ts`
- [ ] Search Console → **Páginas**: nenhuma página nova em "Rastreada, mas não indexada"
- [ ] https://pagespeed.web.dev no celular: desempenho acima de 90
- [ ] Perguntar ao ChatGPT, ao Gemini e ao Perplexity "quanto custa um site para pequena empresa em BH" e "empresa de criação de sites em Ibirité" e anotar se a EasyDev aparece
- [ ] Mudou preço ou escopo? Altere `src/data/offers.ts`, atualize `lastUpdated` em `src/data/site.ts`, publique e rode `yarn indexnow`

## O que mais pesa e ainda falta

| O que | Por que importa | Depende de |
| --- | --- | --- |
| Três casos publicados | Prova para o cliente e conteúdo próprio para o Google e para as IAs citarem | Autorização dos clientes |
| Sócios com nome e foto em `/sobre` | Sinal de autoria e confiança | Fotos e textos (`team` em `src/data/site.ts`) |
| Avaliações no Google | Fator local e prova social | Perfil da Empresa criado |
| Blog com dúvidas dos diagnósticos | Buscas de cauda longa e perguntas feitas às IAs | Dois artigos por mês |
| Menções em outros sites (parceiros, associações, Sebraetec) | Autoridade do domínio | Parcerias |
