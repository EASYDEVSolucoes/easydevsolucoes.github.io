/**
 * Catálogo de ofertas da EasyDev.
 *
 * Os preços, prazos e escopos mostrados no site saem deste arquivo:
 * página inicial, páginas de oferta, /precos e dados estruturados.
 * Mudou a tabela? Edite aqui e publique.
 *
 * Dois lugares repetem valores em texto e precisam ser conferidos à mão:
 * as respostas de perguntas frequentes (campos `faq` e `homeFaq`, abaixo)
 * e o arquivo public/llms.txt.
 */

export type IconKey =
  | "diagnostico"
  | "presenca"
  | "sites"
  | "whatsapp"
  | "sobmedida"
  | "redes";

export type Plan = {
  name: string;
  /** Valor como aparece na tela, por exemplo "R$ 2.400". */
  price: string;
  /** Complemento do valor: "por mês", "de implantação". */
  unit?: string;
  /** Segunda linha do preço: "+ R$ 690 por mês". */
  priceExtra?: string;
  /** Prazo ou condição: "10 dias úteis", "mínimo de 3 meses". */
  term?: string;
  description: string;
  includes: string[];
  featured?: boolean;
};

export type Faq = { q: string; a: string };

export type Offer = {
  slug: string;
  name: string;
  icon: IconKey;
  /** Título da página: antes, palavra em dourado, depois. Uma palavra de destaque por título. */
  title: [string, string, string];
  lead: string;
  /** Texto curto para os cards da página inicial e de /precos. */
  cardText: string;
  /** Preço de partida mostrado nos cards. */
  priceFrom: string;
  priceFromUnit?: string;
  /** Menor preço em reais, para os dados estruturados. */
  priceFromValue: number;
  metaTitle: string;
  metaDescription: string;
  forWho: string;
  /** Dado de mercado com fonte e ano, quando houver. */
  evidence?: string;
  plansTitle: string;
  plans: Plan[];
  /** Plano mensal que acompanha a oferta (Plano Cuidar, mensalidade do atendente). */
  addOn?: { title: string; text: string; plans: Plan[] };
  notIncluded: string[];
  steps: { title: string; text: string }[];
  faq: Faq[];
  /** Mensagem que já vai escrita no WhatsApp quando o clique sai desta página. */
  whatsappMessage: string;
};

/* -------------------------------------------------------------------------- */
/* Diagnóstico Digital: a porta de entrada, destino de todos os CTAs           */
/* -------------------------------------------------------------------------- */

export const diagnostico = {
  slug: "diagnostico",
  name: "Diagnóstico Digital",
  price: "Gratuito",
  duration: "30 minutos",
  delivery: "Página com os 5 achados em até 24 horas depois da conversa",
  title: ["Descubra os 5 pontos que mais custam ", "clientes", " à sua empresa."] as [
    string,
    string,
    string,
  ],
  lead: "Em 30 minutos de conversa, você sai sabendo o que corrigir primeiro no seu site, no Google e no WhatsApp. É gratuito e você não precisa contratar nada depois.",
  cardText:
    "30 minutos de conversa e uma página com 5 achados sobre o seu site, o Google e o WhatsApp.",
  metaTitle: "Diagnóstico digital gratuito para pequenas empresas",
  metaDescription:
    "Em 30 minutos, descubra os 5 pontos que mais custam clientes no seu site, no Google e no WhatsApp. Gratuito, sem compromisso, para empresas da Grande BH e de todo o Brasil.",
  includes: [
    "Análise do seu site, do seu perfil no Google e do seu WhatsApp, feita antes da conversa",
    "Chamada de 30 minutos com um sócio da EasyDev",
    "Uma página com os 5 achados, em ordem de prioridade",
    "Uma recomendação: o que fazer primeiro",
  ],
  notIncluded: [
    "Execução das correções",
    "Análise de concorrentes além de dois nomes",
    "Segunda reunião",
  ],
  steps: [
    {
      title: "Você pede",
      text: "Pelo formulário ou pelo WhatsApp. Só precisamos do seu nome, do seu contato e do endereço do site ou do Instagram.",
    },
    {
      title: "A gente analisa",
      text: "Antes da conversa, olhamos como a sua empresa aparece para quem procura por ela.",
    },
    {
      title: "Conversa de 30 minutos",
      text: "Um sócio mostra o que encontrou e ouve como a empresa funciona hoje.",
    },
    {
      title: "Página com 5 achados",
      text: "Em até 24 horas você recebe o resumo por escrito, com uma recomendação.",
    },
  ],
  /** Exemplo mostrado no topo da página inicial. É ilustrativo, não é de um cliente. */
  example: [
    { title: "Link do WhatsApp quebrado", text: "Falta o código do país no botão do site." },
    { title: "Perfil no Google sem horário", text: "Quem procura não sabe se está aberto." },
    { title: "Site sem preço nem serviço", text: "O visitante não descobre o que comprar." },
    { title: "Avaliações sem resposta", text: "Sete comentários esperando retorno." },
    { title: "Mensagens fora do horário", text: "Pedidos à noite ficam para o dia seguinte." },
  ],
  faq: [
    {
      q: "É gratuito mesmo?",
      a: "É. São 30 minutos de conversa e uma página com 5 achados. Você não precisa contratar nada depois.",
    },
    {
      q: "Não tenho site. Vale a pena pedir?",
      a: "Vale. A análise também olha o seu perfil no Google, o Instagram e o atendimento pelo WhatsApp.",
    },
    {
      q: "Quem faz o diagnóstico?",
      a: "Um sócio da EasyDev, do começo ao fim. A conversa é por chamada de vídeo ou, na Grande BH, pode ser presencial.",
    },
    {
      q: "O que acontece depois?",
      a: "Você recebe a página com os achados e uma recomendação. Se fizer sentido, a gente envia uma proposta com escopo, prazo e preço fechados.",
    },
  ] as Faq[],
  whatsappMessage: "Olá! Quero pedir o diagnóstico gratuito da EasyDev para a minha empresa.",
};

/* -------------------------------------------------------------------------- */
/* Ofertas                                                                     */
/* -------------------------------------------------------------------------- */

export const offers: Offer[] = [
  {
    slug: "presenca-local",
    name: "Presença Local",
    icon: "presenca",
    title: ["Apareça no Google e no Maps para quem procura no seu ", "bairro", "."],
    lead: "A gente cria ou recupera o Perfil da Empresa no Google, mantém tudo atualizado todo mês e mostra o resultado em buscas, ligações e pedidos de rota.",
    cardText:
      "Perfil da Empresa no Google arrumado, 4 publicações por mês, avaliações respondidas e relatório.",
    priceFrom: "R$ 490",
    priceFromUnit: "por mês",
    priceFromValue: 490,
    metaTitle: "Presença Local: sua empresa no Google e no Maps",
    metaDescription:
      "Perfil da Empresa no Google criado ou recuperado, 4 publicações por mês, resposta a avaliações e relatório mensal. R$ 490 por mês para negócios da Grande BH.",
    forWho:
      "Negócio local de serviço, com endereço ou área de atendimento: clínicas, salões, oficinas e escritórios.",
    evidence:
      "Em Minas Gerais, 31% dos pequenos negócios não têm Perfil da Empresa no Google e outros 23% quase não atualizam (Sebrae, 2024).",
    plansTitle: "Um plano, um preço",
    plans: [
      {
        name: "Presença Local",
        price: "R$ 490",
        unit: "por mês",
        term: "Mínimo de 3 meses · perfil arrumado em 5 dias úteis",
        description: "Tudo o que o seu perfil precisa para ficar completo e ativo.",
        includes: [
          "Perfil da Empresa no Google criado ou recuperado, e completo",
          "4 publicações por mês no perfil",
          "Resposta a todas as avaliações",
          "Roteiro para pedir avaliação aos seus clientes",
          "Relatório mensal com buscas, ligações e rotas",
        ],
        featured: true,
      },
    ],
    notIncluded: ["Site", "Anúncios", "Gestão de Instagram", "Fotos profissionais"],
    steps: [
      {
        title: "Diagnóstico gratuito",
        text: "A gente mostra como a sua empresa aparece hoje no Google e no Maps.",
      },
      {
        title: "Perfil arrumado",
        text: "Em 5 dias úteis: categorias, horário, serviços, fotos que você enviar e link do WhatsApp.",
      },
      {
        title: "Rotina do mês",
        text: "Quatro publicações no perfil e resposta a cada avaliação que chegar.",
      },
      {
        title: "Relatório",
        text: "Todo mês você vê quantas buscas, ligações e pedidos de rota o perfil gerou.",
      },
    ],
    faq: [
      {
        q: "Preciso ter site?",
        a: "Não. O Perfil da Empresa no Google funciona sem site. Se você tiver um, a gente liga os dois.",
      },
      {
        q: "Minha empresa não recebe clientes no endereço. Funciona?",
        a: "Funciona. O Google permite cadastrar a área de atendimento no lugar do endereço.",
      },
      {
        q: "Por que o mínimo de 3 meses?",
        a: "Porque o perfil leva algumas semanas para juntar avaliações e histórico de publicações. Em menos tempo, o relatório ainda não mostra a diferença.",
      },
      {
        q: "Vocês prometem a primeira posição no Google?",
        a: "Não, e ninguém pode prometer: a ordem é decidida pelo Google. O que entra no combinado é o perfil completo, ativo e com as avaliações respondidas.",
      },
    ],
    whatsappMessage:
      "Olá! Vi a página de Presença Local e quero saber como a minha empresa aparece no Google.",
  },
  {
    slug: "sites",
    name: "Site Profissional",
    icon: "sites",
    title: ["Um site que transforma visita em conversa no ", "WhatsApp", "."],
    lead: "Feito em código próprio, na identidade da sua empresa, com preço e prazo fechados. Sem Wix, sem WordPress e sem mensalidade de plataforma.",
    cardText:
      "Landing page em 10 dias úteis, ou site com páginas de serviço e SEO local em 25.",
    priceFrom: "R$ 2.400",
    priceFromValue: 2400,
    metaTitle: "Criação de sites para pequenas empresas em BH e região",
    metaDescription:
      "Landing page por R$ 2.400 em 10 dias úteis, ou site com páginas de serviço e SEO local por R$ 5.400. Código próprio, preço fechado e suporte.",
    forWho:
      "Profissionais técnicos, consultorias e negócios locais que precisam de um site que passe confiança e gere pedido de orçamento.",
    plansTitle: "Dois tamanhos, preço fechado",
    plans: [
      {
        name: "Landing page",
        price: "R$ 2.400",
        term: "10 dias úteis depois do material recebido",
        description: "Para profissional ou negócio com uma oferta principal.",
        includes: [
          "Design na identidade da sua empresa",
          "Até 6 seções",
          "Botão de WhatsApp com mensagem pronta",
          "Formulário de contato",
          "SEO básico e Google Analytics",
          "Publicação no seu domínio",
          "30 dias de suporte",
        ],
      },
      {
        name: "Site com páginas de serviço",
        price: "R$ 5.400",
        term: "25 dias úteis",
        description: "Para empresa com 3 ou mais serviços e concorrência local no Google.",
        includes: [
          "Tudo da landing page",
          "Até 4 páginas de serviço",
          "Perguntas frequentes",
          "Dados de negócio local para o Google",
          "Google Search Console configurado",
          "Páginas de privacidade e termos",
          "Design system da sua marca",
        ],
        featured: true,
      },
    ],
    addOn: {
      title: "Plano Cuidar",
      text: "O acompanhamento mensal do site. Entra em toda proposta e você tira se quiser.",
      plans: [
        {
          name: "Cuidar",
          price: "R$ 290",
          unit: "por mês",
          description: "Para o site continuar no ar, seguro e atualizado.",
          includes: [
            "Hospedagem acompanhada",
            "Até 2 horas de ajustes por mês",
            "Backup",
            "Relatório mensal",
          ],
        },
        {
          name: "Cuidar com SEO local",
          price: "R$ 690",
          unit: "por mês",
          description: "Tudo do Cuidar, mais trabalho contínuo para o site aparecer nas buscas da sua região.",
          includes: ["Tudo do plano Cuidar", "SEO local contínuo"],
        },
      ],
    },
    notIncluded: [
      "Redação completa dos textos",
      "Fotos",
      "Blog",
      "Loja virtual",
      "Registro de domínio e contas de e-mail",
    ],
    steps: [
      {
        title: "Diagnóstico gratuito",
        text: "A gente olha o que você tem hoje e o que os seus concorrentes mostram.",
      },
      {
        title: "Proposta fechada",
        text: "Escopo, prazo e preço definidos antes de começar.",
      },
      {
        title: "Construção",
        text: "Você envia logo, textos e fotos. A gente monta, você aprova.",
      },
      {
        title: "Publicação e suporte",
        text: "O site vai ao ar no seu domínio e tem 30 dias de suporte.",
      },
    ],
    faq: [
      {
        q: "Por que não usar Wix ou WordPress?",
        a: "Para muita gente eles resolvem. A gente trabalha com código próprio (Next.js) porque o site fica leve e você não paga mensalidade de plataforma nem depende de plugin.",
      },
      {
        q: "Já tenho domínio. Dá para usar?",
        a: "Dá. A publicação é feita no seu domínio. O registro e a anuidade do domínio ficam por sua conta.",
      },
      {
        q: "Quem escreve os textos?",
        a: "Você envia os textos e as fotos. A redação completa não está incluída no preço.",
      },
      {
        q: "Quando o prazo começa a contar?",
        a: "Na landing page, os 10 dias úteis contam a partir do dia em que a gente recebe o material: logo, textos e fotos.",
      },
      {
        q: "O que é o Plano Cuidar?",
        a: "É o acompanhamento mensal do site: hospedagem acompanhada, até 2 horas de ajustes, backup e relatório, por R$ 290 por mês. Entra em toda proposta de site e você tira se quiser.",
      },
    ],
    whatsappMessage: "Olá! Vi a página de sites da EasyDev e quero um orçamento para a minha empresa.",
  },
  {
    slug: "whatsapp-ia",
    name: "Atendente IA no WhatsApp",
    icon: "whatsapp",
    title: ["Seu WhatsApp respondendo na hora, a qualquer ", "hora", "."],
    lead: "Um atendente com inteligência artificial, treinado com as respostas da sua empresa. Ele tira dúvidas, qualifica, agenda e passa a conversa para você quando precisa de gente.",
    cardText:
      "Atendente treinado com as respostas da sua empresa, que qualifica, agenda e passa para uma pessoa.",
    priceFrom: "R$ 2.500",
    priceFromUnit: "+ R$ 690 por mês",
    priceFromValue: 2500,
    metaTitle: "Atendimento automático no WhatsApp com IA para empresas",
    metaDescription:
      "Atendente com inteligência artificial no WhatsApp Business: responde dúvidas, qualifica, agenda e passa para uma pessoa. Implantação de R$ 2.500 e R$ 690 por mês.",
    forWho:
      "Negócio que recebe 20 ou mais mensagens por dia com perguntas repetidas: clínicas, salões, oficinas, escolas e imobiliárias.",
    evidence:
      "Entre os pequenos negócios que vendem pela internet, 82% vendem pelo WhatsApp (Sebrae, 2026).",
    plansTitle: "Implantação e mensalidade",
    plans: [
      {
        name: "Atendente IA",
        price: "R$ 2.500",
        unit: "de implantação",
        priceExtra: "+ R$ 690 por mês",
        term: "No ar em 15 dias úteis",
        description: "Do levantamento das perguntas até o atendente respondendo no seu número.",
        includes: [
          "Levantamento das 20 perguntas mais comuns",
          "Atendente com a base de respostas da sua empresa",
          "Qualificação e agendamento",
          "Passagem da conversa para uma pessoa",
          "Número na API oficial do WhatsApp Business",
          "30 dias de ajuste fino",
        ],
        featured: true,
      },
    ],
    addOn: {
      title: "O que a mensalidade cobre",
      text: "O atendente não fica sozinho: todo mês alguém da EasyDev revisa as conversas.",
      plans: [
        {
          name: "Acompanhamento mensal",
          price: "R$ 690",
          unit: "por mês",
          description: "Para o atendente continuar respondendo certo quando a sua empresa muda.",
          includes: [
            "Monitoramento",
            "Revisão das conversas",
            "Ajustes na base de respostas",
            "Relatório mensal",
          ],
        },
      ],
    },
    notIncluded: [
      "Custo de mensagens da API e de uso do modelo acima da franquia combinada",
      "Disparo em massa",
      "Integração com sistema que não tem API",
    ],
    steps: [
      {
        title: "Diagnóstico gratuito",
        text: "A gente entende quantas mensagens chegam e quais perguntas se repetem.",
      },
      {
        title: "Base de respostas",
        text: "Levantamos as 20 perguntas mais comuns e as respostas da sua empresa para cada uma.",
      },
      {
        title: "No ar em 15 dias úteis",
        text: "O atendente passa a responder no seu número, pela API oficial do WhatsApp Business.",
      },
      {
        title: "Ajuste fino",
        text: "Nos 30 dias seguintes, revisamos as conversas reais e corrigimos o que for preciso.",
      },
    ],
    faq: [
      {
        q: "E se ele responder errado para o meu cliente?",
        a: "Ele responde só com a base de respostas da sua empresa e dentro do que foi combinado. Não inventa preço, prazo nem orientação técnica: o que estiver fora disso vai para uma pessoa da sua equipe.",
      },
      {
        q: "Tem custo além da mensalidade?",
        a: "O WhatsApp cobra pelas mensagens da API oficial e o modelo de IA tem custo de uso. A proposta traz uma franquia; o que passar dela é cobrado à parte.",
      },
      {
        q: "O que entra na mensalidade?",
        a: "Monitoramento, revisão das conversas, ajustes na base de respostas e relatório mensal.",
      },
      {
        q: "Dá para fazer disparo em massa?",
        a: "Não. O serviço é de atendimento a quem chama a sua empresa.",
      },
      {
        q: "Funciona com o meu sistema de agenda?",
        a: "Se o sistema tiver API, dá para integrar. Integração com sistema sem API não está incluída.",
      },
    ],
    whatsappMessage:
      "Olá! Vi a página do Atendente IA e quero entender como funcionaria no WhatsApp da minha empresa.",
  },
  {
    slug: "sob-medida",
    name: "Sob Medida",
    icon: "sobmedida",
    title: ["Troque a planilha por um sistema feito para a sua ", "empresa", "."],
    lead: "Automação e sistemas em três passos. O primeiro é um diagnóstico de processo, que mostra onde está o retrabalho e quanto custa resolver cada parte.",
    cardText:
      "Diagnóstico de processo, depois automação pontual ou sistema completo, com suporte mensal.",
    priceFrom: "R$ 900",
    priceFromUnit: "pelo diagnóstico de processo",
    priceFromValue: 900,
    metaTitle: "Sistema sob medida e automação para pequenas empresas",
    metaDescription:
      "Troque a planilha por sistema: diagnóstico de processo por R$ 900, automações de R$ 1.500 a R$ 6.000 e sistemas de R$ 12.000 a R$ 30.000, com suporte mensal.",
    forWho:
      "Distribuidoras, pequenas indústrias e prestadoras de serviço para outras empresas, de 10 a 50 pessoas, com planilhas e sistemas que não conversam.",
    plansTitle: "Três passos e o suporte",
    plans: [
      {
        name: "1. Diagnóstico de processo",
        price: "R$ 900",
        term: "1 semana · valor abatido se o projeto fechar",
        description: "Para saber o que automatizar primeiro, antes de gastar com sistema.",
        includes: [
          "Mapa do processo atual",
          "As 3 automações que mais economizam tempo",
          "Estimativa de preço e prazo de cada uma",
        ],
        featured: true,
      },
      {
        name: "2. Automação pontual",
        price: "R$ 1.500 a R$ 6.000",
        term: "1 a 3 semanas",
        description: "Para resolver uma tarefa repetida sem trocar tudo o que você já usa.",
        includes: [
          "Integração entre dois sistemas",
          "Relatório automático",
          "Robô para uma tarefa repetida, como enviar comprovante pelo WhatsApp",
        ],
      },
      {
        name: "3. Sistema completo",
        price: "R$ 12.000 a R$ 30.000",
        term: "6 a 12 semanas",
        description: "Para quando a planilha já não dá conta.",
        includes: [
          "Sistema web ou aplicativo",
          "Telas, usuários e relatórios",
          "Entrega em ciclos semanais",
        ],
      },
    ],
    addOn: {
      title: "Suporte e evolução",
      text: "Todo sistema sai com um plano de suporte mensal.",
      plans: [
        {
          name: "Suporte e evolução",
          price: "A partir de R$ 600",
          unit: "por mês",
          description: "Para o sistema continuar funcionando e crescer com a empresa.",
          includes: ["Correções", "Pequenas melhorias", "Monitoramento"],
        },
      ],
    },
    notIncluded: [],
    steps: [
      {
        title: "Conversa inicial",
        text: "Você conta onde está o retrabalho. Essa primeira conversa é gratuita.",
      },
      {
        title: "Diagnóstico de processo",
        text: "Em uma semana, o mapa do processo e as 3 automações que mais economizam tempo.",
      },
      {
        title: "Projeto em ciclos",
        text: "Automação ou sistema entregue por partes: toda semana você vê o que ficou pronto.",
      },
      {
        title: "Suporte mensal",
        text: "Correções, pequenas melhorias e monitoramento depois que entra no ar.",
      },
    ],
    faq: [
      {
        q: "Por que o diagnóstico de processo é pago?",
        a: "Porque é uma semana de trabalho e o resultado serve mesmo que você não feche o projeto com a gente. Se fechar, os R$ 900 são abatidos do valor.",
      },
      {
        q: "Como eu sei quanto o sistema vai custar?",
        a: "O diagnóstico termina com a estimativa de cada automação. O valor do projeto vai fechado na proposta.",
      },
      {
        q: "Vocês fazem aplicativo para celular?",
        a: "Fazemos. A EasyDev tem aplicativos próprios publicados nas lojas.",
      },
      {
        q: "Como acompanho o andamento?",
        a: "As entregas são semanais: toda semana você vê o que ficou pronto.",
      },
      {
        q: "E depois que o sistema entra no ar?",
        a: "Ele sai com um plano de suporte mensal, a partir de R$ 600, para correções, pequenas melhorias e monitoramento.",
      },
    ],
    whatsappMessage:
      "Olá! Vi a página Sob Medida e quero conversar sobre um processo da minha empresa.",
  },
  {
    slug: "redes-sociais",
    name: "Redes Sociais",
    icon: "redes",
    title: ["Suas redes postando toda semana, com a cara da sua ", "marca", "."],
    lead: "Calendário do mês aprovado de uma vez, posts agendados e comentários respondidos. Funciona melhor junto com o site ou com o atendimento no WhatsApp: é para lá que os posts levam.",
    cardText:
      "8 ou 12 posts por mês com criativo, legenda, agendamento e resposta a comentários.",
    priceFrom: "R$ 1.200",
    priceFromUnit: "por mês",
    priceFromValue: 1200,
    metaTitle: "Gestão de redes sociais para pequenas empresas em BH",
    metaDescription:
      "8 ou 12 posts por mês com criativo, legenda, agendamento, resposta a comentários e relatório. A partir de R$ 1.200 por mês, com calendário aprovado de uma vez.",
    forWho:
      "Empresas que já têm para onde levar o cliente, um site ou um WhatsApp bem atendido, e não conseguem manter as redes em dia.",
    plansTitle: "Dois planos mensais",
    plans: [
      {
        name: "Essencial",
        price: "R$ 1.200",
        unit: "por mês",
        term: "Contrato mínimo de 3 meses",
        description: "Para manter o perfil ativo toda semana.",
        includes: [
          "8 posts por mês, entre imagem e carrossel",
          "Legendas",
          "Calendário aprovado de uma vez",
          "Agendamento",
          "Resposta a comentários em 1 dia útil",
          "Relatório mensal",
        ],
      },
      {
        name: "Completo",
        price: "R$ 2.200",
        unit: "por mês",
        term: "Contrato mínimo de 3 meses",
        description: "O Essencial, com vídeo curto e Stories.",
        includes: [
          "12 posts por mês",
          "4 deles são Reels, com roteiro",
          "8 Stories",
          "Tudo do plano Essencial",
        ],
        featured: true,
      },
    ],
    notIncluded: [
      "Verba de anúncio",
      "Gravação de vídeo e captação no local",
      "Atendimento comercial por direct",
    ],
    steps: [
      {
        title: "Diagnóstico gratuito",
        text: "A gente olha o perfil, o que já foi postado e para onde ele leva.",
      },
      {
        title: "Identidade",
        text: "Cores, logo e modelos de criativo da sua marca, para todo post sair com a mesma cara.",
      },
      {
        title: "Calendário do mês",
        text: "Você recebe todos os posts de uma vez e aprova em uma rodada.",
      },
      {
        title: "No ar e medido",
        text: "Agendamento, resposta a comentários em 1 dia útil e relatório mensal.",
      },
    ],
    faq: [
      {
        q: "Vocês gravam os vídeos?",
        a: "Não. No plano Completo a gente escreve o roteiro dos Reels; a gravação fica com você.",
      },
      {
        q: "Anúncio está incluído?",
        a: "Não. A verba de anúncio é à parte.",
      },
      {
        q: "Como eu aprovo os posts?",
        a: "Você recebe o calendário do mês inteiro e aprova de uma vez.",
      },
      {
        q: "Quem responde os comentários?",
        a: "A gente, em até 1 dia útil. O atendimento comercial por direct não está incluído.",
      },
    ],
    whatsappMessage:
      "Olá! Vi a página de redes sociais da EasyDev e quero saber como funcionaria para a minha empresa.",
  },
];

export function getOffer(slug: string): Offer {
  const offer = offers.find((o) => o.slug === slug);
  if (!offer) throw new Error(`Oferta não encontrada: ${slug}`);
  return offer;
}

/* -------------------------------------------------------------------------- */
/* Página inicial                                                              */
/* -------------------------------------------------------------------------- */

export const audiences = [
  {
    title: "Negócio local de serviço",
    who: "Clínicas, salões, oficinas e escritórios, de 3 a 15 pessoas.",
    pain: "Quem procura o seu serviço no Google encontra o concorrente.",
    offerSlug: "presenca-local",
    linkLabel: "Ver Presença Local",
  },
  {
    title: "Profissional técnico ou consultoria",
    who: "Contadores, engenheiros e consultorias ambientais e empresariais.",
    pain: "O site não mostra a autoridade que você tem e não gera pedido de orçamento.",
    offerSlug: "sites",
    linkLabel: "Ver Site Profissional",
  },
  {
    title: "Empresa com processo manual",
    who: "Distribuidoras, pequenas indústrias e prestadoras B2B, de 10 a 50 pessoas.",
    pain: "Planilhas e sistemas que não conversam viram retrabalho toda semana.",
    offerSlug: "sob-medida",
    linkLabel: "Ver Sob Medida",
  },
] as const;

export const howItWorks = [
  {
    title: "Diagnóstico",
    text: "30 minutos, gratuito. Você sai com 5 pontos para corrigir.",
  },
  {
    title: "Proposta",
    text: "Escopo, prazo e preço fechados antes de começar.",
  },
  {
    title: "Entrega",
    text: "Cada entrega tem uma lista de pronto que você confere e assina.",
  },
  {
    title: "Acompanhamento",
    text: "Plano mensal com relatório do que foi feito e do que mudou.",
  },
] as const;

export const reasons = [
  {
    title: "Preço fechado",
    text: "Cada serviço tem escopo, prazo e preço de partida publicados aqui no site.",
  },
  {
    title: "Um sócio responde",
    text: "Do diagnóstico ao suporte, você fala direto com quem decide e com quem faz.",
  },
  {
    title: "Código próprio",
    text: "Sites em Next.js, sem Wix nem WordPress: leves e sem mensalidade de plataforma.",
  },
  {
    title: "Produto no ar",
    text: "A EasyDev tem aplicativos próprios publicados nas lojas. Sabe levar um projeto até o fim.",
  },
] as const;

export const homeFaq: Faq[] = [
  {
    q: "Quanto custa?",
    a: "Cada serviço tem preço de partida publicado: Presença Local por R$ 490 por mês, landing page por R$ 2.400, atendente no WhatsApp com implantação de R$ 2.500. O valor final vai na proposta, depois do diagnóstico.",
  },
  {
    q: "O diagnóstico é gratuito mesmo?",
    a: "É. São 30 minutos de conversa e uma página com 5 achados. Você não precisa contratar nada depois.",
  },
  {
    q: "Em quanto tempo fica pronto?",
    a: "Perfil no Google arrumado em 5 dias úteis, landing page em 10, atendente no WhatsApp em 15 e site com páginas de serviço em 25 dias úteis.",
  },
  {
    q: "Vocês atendem fora da Grande BH?",
    a: "Sim, de forma remota, para todo o Brasil. Na Grande BH a conversa também pode ser presencial.",
  },
  {
    q: "Vocês usam Wix ou WordPress?",
    a: "Não. Os sites são feitos em código próprio (Next.js): ficam leves e você não paga mensalidade de plataforma.",
  },
];
