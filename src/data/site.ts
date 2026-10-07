/**
 * Dados da empresa usados no site inteiro: cabeçalho, rodapé, links de WhatsApp,
 * dados estruturados (JSON-LD), sitemap e llms.txt.
 *
 * Mudou telefone, e-mail, horário ou rede social? É só aqui.
 */

export const site = {
  name: "EasyDev",
  fullName: "EasyDev Soluções Digitais",
  legalName: "EASY DEV SOLUCOES EM INFORMATICA LTDA",
  cnpj: "34.534.858/0001-58",
  url: "https://easydevsolucoes.com.br",

  tagline: "A equipe de tecnologia da sua pequena empresa.",
  description:
    "Site que aparece no Google, WhatsApp que responde sozinho e sistema no lugar da planilha, para pequenas empresas da Grande BH. Preço fechado e diagnóstico gratuito.",

  email: "contato@easydevsolucoes.com.br",
  phoneDisplay: "(31) 99278-4329",
  /** Formato internacional, usado em links tel: e nos dados estruturados. */
  phoneE164: "+5531992784329",
  /** Só dígitos, com 55 do Brasil na frente. O wa.me não funciona sem o código do país. */
  whatsappNumber: "5531992784329",

  city: "Ibirité",
  region: "MG",
  regionName: "Minas Gerais",
  serviceArea: "Grande BH",
  /** Cidades onde a prospecção acontece primeiro; entram em areaServed. */
  serviceCities: ["Belo Horizonte", "Contagem", "Betim", "Ibirité"],

  hours: {
    display: "Segunda a sexta, das 8h às 18h",
    opens: "08:00",
    closes: "18:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },

  social: {
    instagram: "https://www.instagram.com/easydevsolucoes",
    linkedin: "https://www.linkedin.com/company/easydevsolucoes",
    github: "https://github.com/EASYDEVSolucoes",
    facebook: "https://www.facebook.com/Easydevsolucoes",
  },

  /** Data da última revisão de conteúdo; vai para o sitemap e para as páginas legais. */
  lastUpdated: "2026-10-07",
} as const;

/** Mensagem padrão do WhatsApp quando a página não define a sua. */
export const defaultWhatsAppMessage =
  "Olá! Vim pelo site da EasyDev e quero pedir o diagnóstico gratuito.";

/** Link de WhatsApp com a mensagem já escrita. */
export function whatsappLink(message: string = defaultWhatsAppMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Endereço completo de uma rota, com a barra final que o site usa. */
export function absoluteUrl(path: string = "/"): string {
  const clean = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}/`;
  return `${site.url}${clean}`;
}

/** Parceiros mostrados na página inicial e em Sobre. */
export const partners: { name: string; url: string; logo: string }[] = [
  {
    name: "GCDigicont",
    url: "https://gcdigicont.com.br/",
    logo: "https://gcdigicont.com.br/logo.png",
  },
  {
    name: "Kenny Almeida Lab",
    url: "https://kennygalmeida.com.br/",
    logo: "https://kennygalmeida.com.br/kennylogo.png",
  },
];

/**
 * Sócios mostrados em /sobre. Enquanto a lista estiver vazia, a seção não aparece.
 * Para publicar: coloque a foto em public/company/ e preencha um item por pessoa.
 *
 *   { name: "Nome Sobrenome", role: "Sócio, tecnologia", photo: "/company/nome.webp",
 *     bio: "Uma frase sobre o que faz na EasyDev.", linkedin: "https://www.linkedin.com/in/..." }
 */
export const team: {
  name: string;
  role: string;
  photo?: string;
  bio: string;
  linkedin?: string;
}[] = [];

/**
 * Depoimentos. Só entram com autorização por escrito do cliente.
 * Enquanto a lista estiver vazia, a seção não aparece em lugar nenhum.
 *
 *   { quote: "O que o cliente disse.", author: "Nome Sobrenome",
 *     role: "Cargo, Empresa", link: "https://site-do-cliente.com.br" }
 */
export const testimonials: {
  quote: string;
  author: string;
  role: string;
  link?: string;
}[] = [];

/** Data de `site.lastUpdated` por extenso: "7 de outubro de 2026". */
export function lastUpdatedLong(): string {
  const [year, month, day] = site.lastUpdated.split("-").map(Number);
  const months = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ];
  return `${day} de ${months[month - 1]} de ${year}`;
}

/**
 * Definição da empresa em uma frase que se sustenta sozinha. É o trecho pensado
 * para ser citado por buscadores e assistentes de IA; aparece no site, nos
 * dados estruturados e no /llms.txt.
 */
export const companyDefinition =
  "A EasyDev Soluções Digitais é uma empresa de tecnologia de Ibirité, na Grande BH (Minas Gerais), que faz sites, gestão do Perfil da Empresa no Google, atendimento com inteligência artificial no WhatsApp, gestão de redes sociais e sistemas sob medida para empresas de 3 a 50 pessoas, com preço de partida publicado e diagnóstico gratuito.";

/** Assuntos em que a empresa atua, para os dados estruturados (knowsAbout). */
export const expertise = [
  "Criação de sites",
  "SEO local",
  "Perfil da Empresa no Google",
  "Atendimento automático no WhatsApp",
  "Inteligência artificial para pequenas empresas",
  "Automação de processos",
  "Desenvolvimento de sistemas sob medida",
  "Desenvolvimento de aplicativos",
  "Gestão de redes sociais",
];
