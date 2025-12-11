# EasyDev Website

Website institucional da EasyDev, uma empresa especializada em desenvolvimento de software e soluções digitais.

## Tecnologias Utilizadas

- Next.js 14
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

## Estrutura do Projeto

```
easydevsolucoes.github.io/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       └── Header.tsx
├── public/
│   ├── company/
│   │   ├── logoEasyDev.png
│   │   └── logoEasyDev_comFundo.png
│   └── favicon/
│       ├── favicon.ico
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       ├── apple-touch-icon.png
│       ├── android-chrome-192x192.png
│       └── android-chrome-512x512.png
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## Deploy

Este site está configurado para ser hospedado no GitHub Pages. O deploy é feito automaticamente quando há um push na branch `main`.

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
