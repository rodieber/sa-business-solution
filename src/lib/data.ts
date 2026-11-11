export const WHATSAPP_PHONE = "5544991859393";
export const PHONE_DISPLAY = "+55 (44) 99185-9393";
export const EMAIL_ADDRESS = "diretoria@sabusinesssolution.com.br";
export const WEBSITE_DISPLAY = "sabusinesssolution.com.br";
export const DIRECTOR_NAME = "Silvana A. Ozima";
export const DIRECTOR_ROLE = "Diretora Executiva";
export const LOCATION_DISPLAY = "Paraná — Atendimento Nacional & In-Company";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=Ol%C3%A1%2C%20Silvana!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20S.A%20Business%20Solution%20sobre%20consultoria%20para%20minha%20empresa.`;
export const MAILTO_URL = `mailto:${EMAIL_ADDRESS}?subject=Diagn%C3%B3stico%20Empresarial%20%E2%80%94%20S.A%20Business%20Solution`;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "A Consultoria", href: "#sobre" },
  { label: "Desafios", href: "#desafios" },
  { label: "Conquistas", href: "#conquistas" },
  { label: "Serviços", href: "#solucoes" },
  { label: "Diretoria", href: "#lideranca" },
  { label: "Perguntas Frequentes", href: "#faq" },
];

export const IMAGES = {
  heroConsulting: "/images/hero-consulting.jpg",
  horizonGlow: "/images/horizon-glow.jpg",
  hero: "/images/hero-corporate.jpg",
  silvana: "/images/silvana-ozima.jpg",
  team: "/images/corporate-team.jpg",
  cards: "/images/brand-cards.jpg",
  folder: "/images/brand-folder.jpg",
  stationery: "/images/brand-stationery.jpg",
  brochure: "/images/brand-brochure.jpg",
  envelope: "/images/brand-envelope.jpg",
  logoNavy: "/images/logo-navy.jpg",
  logoWhite: "/images/logo-white.jpg",
};

export interface BarrierItem {
  question: string;
  answer: string;
  highlight: string;
  iconName: "wallet" | "handshake" | "trending" | "workflow";
}

export const BARRIERS: BarrierItem[] = [
  {
    question: "Descontrole no fluxo de caixa e inadimplência afetando o capital de giro?",
    answer:
      "Com nossa Gestão Financeira especializada, assumimos o controle rigoroso de pagamentos e recebimentos, conciliação bancária e cobranças estruturadas para recuperar receitas.",
    highlight: "Financeiro & Inadimplência",
    iconName: "wallet",
  },
  {
    question: "Acordos desfavoráveis com fornecedores e desgaste nas tratativas com clientes?",
    answer:
      "Com Negociações Estratégicas conduzidas por especialistas, revisamos prazos, custos e condições junto a fornecedores e clientes, protegendo a margem do seu negócio.",
    highlight: "Negociações Estratégicas",
    iconName: "handshake",
  },
  {
    question: "Faturamento estagnado e dezenas de clientes inativos esquecidos na base?",
    answer:
      "Com nossa atuação Comercial focada em performance, estruturamos a prospecção ativa de novos clientes e campanhas direcionadas para reativação de clientes inativos.",
    highlight: "Expansão Comercial",
    iconName: "trending",
  },
  {
    question: "Processos confusos, retrabalho diário e falta de indicadores para decidir?",
    answer:
      "Com POPs departamentais, fluxogramas, programa 5S, organograma claro e apresentação mensal em dashboard, sua empresa ganha governança e previsibilidade.",
    highlight: "Processos, 5S & Dashboard",
    iconName: "workflow",
  },
];

export interface ConquestItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  metric: string;
  metricLabel: string;
  bullets: string[];
  image: string;
}

export const CONQUESTS: ConquestItem[] = [
  {
    id: "financeiro",
    title: "Gestão financeira blindada e previsível",
    description:
      "Organize pagamentos e recebimentos, garanta conciliação bancária exata e reduza drasticamente a inadimplência com réguas de cobrança eficientes.",
    badge: "Unidade 01 · Financeiro",
    metric: "100%",
    metricLabel: "Controle de caixa e conciliação bancária",
    bullets: [
      "Pagamentos e recebimentos organizados",
      "Conciliação bancária diária e mensal",
      "Cobranças ativas e controle de inadimplência",
    ],
    image: IMAGES.cards,
  },
  {
    id: "negociacoes",
    title: "Negociações mais lucrativas e seguras",
    description:
      "Conte com representação executiva experiente para negociar prazos, descontos e renegociações tanto com fornecedores estratégicos quanto com clientes.",
    badge: "Unidade 02 · Negociações",
    metric: "+30 anos",
    metricLabel: "De experiência em mesa de negociação",
    bullets: [
      "Negociações estratégicas com fornecedores",
      "Negociações e acordos com clientes",
      "Proteção de fluxo de caixa e margens",
    ],
    image: IMAGES.stationery,
  },
  {
    id: "comercial",
    title: "Crescimento de vendas e carteira reativada",
    description:
      "Aumente sua receita combinando a abertura estruturada de novos mercados com o resgate inteligente de clientes que deixaram de comprar.",
    badge: "Unidade 03 · Comercial",
    metric: "2 Frentes",
    metricLabel: "Aquisição ativa + Recuperação de base",
    bullets: [
      "Prospecção estruturada de novos clientes",
      "Reativação estratégica de clientes inativos",
      "Acompanhamento de metas e conversão",
    ],
    image: IMAGES.team,
  },
  {
    id: "processos",
    title: "Padronização com POPs, Fluxogramas e Organograma",
    description:
      "Elimine gargalos e dependências operacionais documentando como cada departamento funciona e definindo responsabilidades claras.",
    badge: "Unidade 04 · Processos & Organização",
    metric: "Padronização",
    metricLabel: "Clareza em todos os departamentos",
    bullets: [
      "Elaboração de POPs dos departamentos",
      "Desenho de fluxogramas de processos",
      "Estruturação do organograma da empresa",
    ],
    image: IMAGES.folder,
  },
  {
    id: "programa5s",
    title: "Implantação prática do Programa 5S",
    description:
      "Transforme o ambiente de trabalho, reduza desperdícios de tempo e materiais e engaje toda a equipe em uma cultura de disciplina e melhoria contínua.",
    badge: "Excelência Operacional · 5S",
    metric: "5 Sensos",
    metricLabel: "Utilização, Ordenação, Limpeza, Padronização e Disciplina",
    bullets: [
      "Implantação completa do programa 5S",
      "Auditoria e treinamento das equipes",
      "Ambiente produtivo, organizado e eficiente",
    ],
    image: IMAGES.brochure,
  },
  {
    id: "indicadores",
    title: "Decisões guiadas por Dashboard Mensal",
    description:
      "Substitua o improviso por governança: receba mensalmente a apresentação executiva em dashboard e acompanhe a evolução real da sua empresa.",
    badge: "Unidade 05 · Gestão & Indicadores",
    metric: "Mensal",
    metricLabel: "Apresentação executiva em Dashboard",
    bullets: [
      "Apresentação mensal em dashboard",
      "Acompanhamento da evolução da empresa",
      "Análise comparativa de metas e resultados",
    ],
    image: IMAGES.heroConsulting,
  },
];

export interface Service {
  index: string;
  name: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  meta: string;
  image: string;
  iconName: "wallet" | "handshake" | "trending" | "workflow" | "chart";
}

export const SERVICES: Service[] = [
  {
    index: "01",
    name: "Financeiro",
    subtitle: "Controle rigoroso de caixa e saúde financeira",
    description:
      "Assumimos e estruturamos as rotinas financeiras essenciais para garantir pontualidade, exatidão bancária e queda na inadimplência.",
    deliverables: [
      "Pagamentos e recebimentos",
      "Conciliação bancária",
      "Cobranças e controle de inadimplência",
    ],
    meta: "Gestão Financeira Operacional & Estratégica",
    image: IMAGES.cards,
    iconName: "wallet",
  },
  {
    index: "02",
    name: "Negociações",
    subtitle: "Articulação executiva com clientes e fornecedores",
    description:
      "Conduzimos negociações com técnica e experiência para reduzir custos de compras, viabilizar acordos e preservar relacionamentos comerciais.",
    deliverables: [
      "Negociações com fornecedores",
      "Negociações com clientes",
    ],
    meta: "Acordos Comerciais & Financeiros",
    image: IMAGES.stationery,
    iconName: "handshake",
  },
  {
    index: "03",
    name: "Comercial",
    subtitle: "Geração de novas receitas e recuperação de carteira",
    description:
      "Impulsionamos o faturamento atuando diretamente na conquista de novas contas e na reativação estruturada de clientes que pararam de comprar.",
    deliverables: [
      "Prospecção de novos clientes",
      "Reativação de clientes inativos",
    ],
    meta: "Expansão & Recuperação de Clientes",
    image: IMAGES.team,
    iconName: "trending",
  },
  {
    index: "04",
    name: "Processos e Organização",
    subtitle: "Padronização departamental, método 5S e estrutura",
    description:
      "Organizamos a empresa de ponta a ponta com procedimentos documentados, fluxos visuais, clareza hierárquica e implantação do programa 5S.",
    deliverables: [
      "POPs dos departamentos",
      "Fluxogramas de processos",
      "Implantação do programa 5S",
      "Organograma da empresa",
    ],
    meta: "Governança & Eficiência Operacional",
    image: IMAGES.folder,
    iconName: "workflow",
  },
  {
    index: "05",
    name: "Gestão e Indicadores",
    subtitle: "Visibilidade executiva e acompanhamento mensal",
    description:
      "Transformamos os dados financeiros, comerciais e operacionais em dashboards claros para orientar cada decisão estratégica da diretoria.",
    deliverables: [
      "Apresentação mensal em dashboard",
      "Acompanhamento da evolução da empresa",
    ],
    meta: "Inteligência de Gestão & KPIs",
    image: IMAGES.brochure,
    iconName: "chart",
  },
];

export interface Credential {
  degree: string;
  institution: string;
  focus: string;
}

export const CREDENTIALS: Credential[] = [
  {
    degree: "Processos Gerenciais",
    institution: "UNINTER — Centro Universitário Internacional",
    focus: "Planejamento empresarial, governança, controladoria e tomada de decisão estratégica.",
  },
  {
    degree: "MBA em Recursos Humanos",
    institution: "UNINTER — Centro Universitário Internacional",
    focus: "Gestão estratégica de pessoas, cargos e salários, legislação trabalhista e liderança.",
  },
  {
    degree: "Psicopedagogia Clínica e Institucional",
    institution: "UNINTER — Centro Universitário Internacional",
    focus: "Desenvolvimento humano, aprendizagem organizacional e integração de equipes.",
  },
  {
    degree: "Especialização em Formação de Docentes e Orientadores Acadêmicos em EAD",
    institution: "UNINTER — Centro Universitário Internacional",
    focus: "Coordenação pedagógica de graduação e pós-graduação e orientação de bancas de MBA.",
  },
];

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  area: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "A implantação dos POPs dos departamentos, dos fluxogramas e do programa 5S transformou nossa rotina. Hoje cada colaborador sabe exatamente o que fazer e reduzimos drasticamente os retrabalhos.",
    author: "Gestão Operacional & Industrial",
    role: "Diretoria Administrativa",
    area: "Processos, 5S & Organograma",
  },
  {
    quote:
      "Com a conciliação bancária em dia, o controle rigoroso de pagamentos e recebimentos e a atuação firme nas cobranças, nossa inadimplência caiu e voltamos a ter previsibilidade no caixa.",
    author: "Setor de Serviços & Comércio",
    role: "Diretoria Financeira",
    area: "Financeiro & Negociações",
  },
  {
    quote:
      "A reativação de clientes inativos aliada à apresentação mensal em dashboard nos trouxe faturamento imediato e uma visão clara da evolução da empresa mês a mês.",
    author: "Grupo Empresarial",
    role: "Diretoria Comercial & Executiva",
    area: "Comercial & Dashboard Mensal",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Como funciona a consultoria empresarial da S.A Business Solution?",
    answer:
      "A Consultoria em Gestão Empresarial da S.A Business Solution oferece uma atuação ponta a ponta — do diagnóstico à execução prática — nas áreas de Financeiro, Negociações, Comercial, Processos e Organização e Gestão por Indicadores, sempre conduzida sob a direção executiva de Silvana A. Ozima (+30 anos de experiência).",
  },
  {
    question: "Como a S.A Business Solution atua no Financeiro e nas Negociações?",
    answer:
      "Assumimos e organizamos os pagamentos e recebimentos, realizamos a conciliação bancária detalhada e estruturamos as cobranças e o controle de inadimplência. Além disso, conduzimos negociações diretas com fornecedores e clientes para proteger o fluxo de caixa e melhorar prazos e margens.",
  },
  {
    question: "O que está incluso em Processos e Organização?",
    answer:
      "Entregamos a padronização completa da empresa por meio da criação dos POPs (Procedimentos Operacionais Padrão) dos departamentos, desenho dos fluxogramas de processos, implantação prática do programa 5S e estruturação do organograma oficial da empresa.",
  },
  {
    question: "Como a consultoria ajuda a aumentar as vendas no setor Comercial?",
    answer:
      "Atuamos em duas frentes de resultado rápido e consistente: a prospecção estruturada de novos clientes para expandir sua participação de mercado e a reativação estratégica de clientes inativos que já conhecem sua empresa.",
  },
  {
    question: "Como funciona a Gestão e Indicadores em Dashboard?",
    answer:
      "Consolidamos os principais números financeiros, comerciais e operacionais do seu negócio e realizamos uma apresentação mensal em dashboard para a diretoria, garantindo o acompanhamento contínuo da evolução da empresa e apoiando decisões seguras.",
  },
];
