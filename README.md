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
git clone https://github.com/EASYDEVSolucoes/easydev.github.io.git
cd easydev.github.io
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
easydev.github.io/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       └── Header.tsx
├── public/
│   └── company/
│       ├── logoEasyDev.png
│       └── logoEasyDev_comFundo.png
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## Deploy

Este site está configurado para ser hospedado no GitHub Pages. O deploy é feito automaticamente quando há um push na branch `main`.

Para fazer o deploy manualmente:

1. Build o projeto:

```bash
npm run build
```

2. Faça o commit das alterações e push para o GitHub:

```bash
git add .
git commit -m "Update website"
git push origin main
```

## Contato

Para mais informações, entre em contato:

- Email: contato@easydev.com.br
- Telefone: (11) 99999-9999
