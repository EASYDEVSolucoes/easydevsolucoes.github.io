# Guia Completo: Google Search Console

**Atualizado em:** Janeiro 2026
**Nível:** Iniciante a Intermediário
**Tempo estimado de leitura:** 15 minutos

---

## Sumário

1. [O que é o Google Search Console?](#o-que-é-o-google-search-console)
2. [Por que usar o Google Search Console?](#por-que-usar-o-google-search-console)
3. [Como configurar o Google Search Console](#como-configurar-o-google-search-console)
4. [Verificando a propriedade do site](#verificando-a-propriedade-do-site)
5. [Configurações iniciais importantes](#configurações-iniciais-importantes)
6. [Enviando o Sitemap](#enviando-o-sitemap)
7. [Principais funcionalidades](#principais-funcionalidades)
8. [Monitoramento e análise](#monitoramento-e-análise)
9. [Resolução de problemas comuns](#resolução-de-problemas-comuns)
10. [Melhores práticas 2026](#melhores-práticas-2026)

---

## O que é o Google Search Console?

O **Google Search Console** (anteriormente conhecido como Google Webmaster Tools) é uma ferramenta gratuita do Google que permite monitorar e manter a presença do seu site nos resultados de pesquisa do Google.

### Principais benefícios:
- Entender como o Google vê seu site
- Identificar e corrigir problemas de indexação
- Monitorar o desempenho de pesquisa
- Receber alertas sobre problemas críticos
- Otimizar a visibilidade do site nos resultados de busca

---

## Por que usar o Google Search Console?

1. **Monitoramento de Desempenho**: Veja quais consultas trazem tráfego
2. **Indexação**: Garanta que o Google encontre e indexe suas páginas
3. **Mobile-Friendly**: Verifique se o site é otimizado para dispositivos móveis
4. **Segurança**: Receba alertas sobre problemas de segurança
5. **Links**: Analise quem está linkando para seu site
6. **Rich Results**: Verifique se os dados estruturados estão funcionando

---

## Como configurar o Google Search Console

### Passo 1: Acessar o Google Search Console

1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Faça login com sua conta Google (recomendamos usar a conta oficial da empresa)
3. Clique em **"Iniciar agora"**

### Passo 2: Adicionar uma propriedade

Você terá duas opções:

#### Opção A: Propriedade de Domínio (Recomendada)
- Cobre todos os subdomínios e protocolos (http/https, www/sem www)
- Requer verificação via DNS
- Digite apenas o domínio: `easydevsolucoes.com.br`

#### Opção B: Propriedade de URL Prefix
- Cobre apenas a URL específica
- Mais opções de verificação
- Digite a URL completa: `https://easydevsolucoes.com.br`

**Para o site EasyDev, recomendamos usar a Propriedade de Domínio.**

---

## Verificando a propriedade do site

### Método 1: Verificação via DNS (Para Propriedade de Domínio)

1. O Google fornecerá um registro TXT
2. Acesse o painel de controle do seu domínio (Hostinger, GoDaddy, etc.)
3. Vá para **Gerenciamento de DNS**
4. Adicione um novo registro:
   - **Tipo**: TXT
   - **Host/Nome**: @ (ou deixe em branco)
   - **Valor**: O código fornecido pelo Google (ex: `google-site-verification=xxxxx`)
   - **TTL**: 3600 (ou padrão)
5. Salve e aguarde a propagação (pode levar até 48 horas)
6. Volte ao Search Console e clique em **"Verificar"**

### Método 2: Tag HTML (Para Propriedade de URL Prefix)

1. Copie a meta tag fornecida pelo Google
2. Adicione ao `<head>` do seu site

**Já configurado no EasyDev:**
```html
<meta name="google-site-verification" content="BPnXcpPDKavEMiXzQ94uU2dKQIVFX2pnewz4d30hu9g" />
```

### Método 3: Arquivo HTML

1. Baixe o arquivo de verificação HTML fornecido
2. Faça upload para a raiz do seu site
3. Acesse `https://seusite.com/googleXXXXXX.html` para confirmar
4. Clique em **"Verificar"** no Search Console

**Já configurado no EasyDev:**
Arquivo: `/public/google2b785bd8b55e553b.html`

---

## Configurações iniciais importantes

### 1. Configurar URL preferencial

Não é mais necessário no Search Console novo, mas certifique-se de usar canonical tags no seu HTML.

### 2. Configurar país de destino

1. Vá em **Configurações** > **Segmentação internacional**
2. Selecione **Brasil** como país de destino

### 3. Associar ao Google Analytics

1. Vá em **Configurações** > **Associações**
2. Clique em **"Associar"** ao lado do Google Analytics
3. Selecione a propriedade do GA4 correspondente

---

## Enviando o Sitemap

### Passo a passo:

1. No menu lateral, clique em **"Sitemaps"**
2. No campo "Adicionar um novo sitemap", digite: `sitemap.xml`
3. Clique em **"Enviar"**

### Verificar o status:

Após alguns minutos, você verá:
- **Status**: Êxito (verde) ou Com erros (vermelho)
- **Tipo**: Sitemap
- **URLs descobertos**: Quantidade de URLs no sitemap

### Sitemap do EasyDev:
```
https://easydevsolucoes.com.br/sitemap.xml
```

---

## Principais funcionalidades

### 1. Desempenho

Mostra métricas sobre como seu site aparece nas pesquisas:

- **Cliques**: Quantas vezes os usuários clicaram no seu site
- **Impressões**: Quantas vezes seu site apareceu nos resultados
- **CTR (Taxa de Cliques)**: Porcentagem de impressões que resultaram em cliques
- **Posição Média**: Posição média do seu site nos resultados

**Filtros disponíveis:**
- Por consulta (palavras-chave)
- Por página
- Por país
- Por dispositivo
- Por data

### 2. Inspeção de URL

Permite verificar o status de indexação de uma URL específica:

1. Cole a URL na barra de pesquisa
2. Veja se está indexada
3. Verifique problemas de rastreamento
4. Solicite indexação se necessário

### 3. Cobertura do Índice

Mostra quais páginas estão:
- **Válidas**: Indexadas corretamente
- **Válidas com avisos**: Indexadas mas com possíveis melhorias
- **Excluídas**: Não indexadas (por escolha ou erro)
- **Erros**: Problemas que impedem a indexação

### 4. Core Web Vitals

Métricas de experiência do usuário:

- **LCP (Largest Contentful Paint)**: Tempo de carregamento do maior elemento
  - Bom: < 2.5s
- **INP (Interaction to Next Paint)**: Responsividade a interações
  - Bom: < 200ms
- **CLS (Cumulative Layout Shift)**: Estabilidade visual
  - Bom: < 0.1

### 5. Links

Informações sobre backlinks:
- **Links externos**: Sites que linkam para você
- **Links internos**: Sua estrutura de links internos
- **Sites com mais links**: Domínios que mais linkam para você

---

## Monitoramento e análise

### Relatório semanal recomendado:

1. **Verificar erros de rastreamento** (Cobertura)
2. **Analisar consultas de pesquisa** (Desempenho)
3. **Monitorar Core Web Vitals**
4. **Verificar novos backlinks** (Links)

### Métricas-chave para acompanhar:

| Métrica | O que indica | Meta |
|---------|--------------|------|
| Cliques | Tráfego orgânico | Crescimento constante |
| CTR | Atratividade nos resultados | > 3% |
| Posição média | Ranking geral | < 20 |
| Páginas indexadas | Cobertura | 100% das páginas importantes |
| Core Web Vitals | Experiência do usuário | Todos "Bom" |

---

## Resolução de problemas comuns

### Problema 1: Página não indexada

**Possíveis causas:**
- robots.txt bloqueando
- Meta tag noindex
- Canonical apontando para outra URL
- Página nova (aguarde alguns dias)

**Solução:**
1. Inspecione a URL no Search Console
2. Verifique o motivo da exclusão
3. Corrija o problema
4. Solicite indexação

### Problema 2: Queda de posições

**Possíveis causas:**
- Atualização de algoritmo do Google
- Concorrência aumentou
- Conteúdo desatualizado
- Problemas técnicos

**Solução:**
1. Verifique alertas de segurança
2. Analise Core Web Vitals
3. Atualize o conteúdo
4. Verifique links quebrados

### Problema 3: Erros de dados estruturados

**Possíveis causas:**
- Sintaxe incorreta no JSON-LD
- Campos obrigatórios faltando
- Dados inconsistentes

**Solução:**
1. Use o Rich Results Test do Google
2. Valide o JSON-LD
3. Corrija os erros indicados
4. Solicite nova validação

---

## Melhores práticas 2026

### 1. Otimização para AI Overviews

Com o crescimento das respostas geradas por IA do Google:
- Estruture o conteúdo em formato de perguntas e respostas
- Use listas e tabelas quando apropriado
- Mantenha respostas claras e concisas
- Adicione dados estruturados FAQPage

### 2. Core Web Vitals

Foco principal em 2026:
- Otimize para INP (substituto do FID)
- Priorize LCP abaixo de 2.5s
- Mantenha CLS abaixo de 0.1

### 3. Mobile-First

- 100% do conteúdo deve estar disponível no mobile
- Velocidade de carregamento é crítica
- Touch targets devem ser adequados

### 4. E-E-A-T

Demonstre Experiência, Expertise, Autoridade e Confiabilidade:
- Mantenha informações de contato visíveis
- Adicione páginas sobre a empresa
- Inclua avaliações e depoimentos
- Mantenha conteúdo atualizado

---

## Links úteis

- [Google Search Console](https://search.google.com/search-console)
- [Central de Pesquisa do Google](https://developers.google.com/search)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## Checklist de configuração

- [ ] Criar conta no Google Search Console
- [ ] Adicionar propriedade (domínio ou URL)
- [ ] Verificar propriedade (DNS, HTML tag ou arquivo)
- [ ] Enviar sitemap
- [ ] Associar com Google Analytics
- [ ] Verificar cobertura de índice
- [ ] Analisar Core Web Vitals
- [ ] Configurar alertas por e-mail
- [ ] Revisar dados estruturados
- [ ] Criar rotina de monitoramento semanal

---

*Este guia faz parte da documentação de SEO da EasyDev Soluções.*
