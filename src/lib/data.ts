export const WHATSAPP_PHONE = "5544991859393";
export const PHONE_DISPLAY = "+55 (44) 99185-9393";
export const EMAIL_ADDRESS = "diretoria@sabusinesssolution.com.br";
export const WEBSITE_DISPLAY = "sabusinesssolution.com.br";
export const DIRECTOR_NAME = "Silvana A. Ozima";
export const DIRECTOR_ROLE = "Diretora Executiva";
export const LOCATION_DISPLAY = "Paraná — Atendimento Nacional & In-Company";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=Ol%C3%A1%2C%20Silvana!%20Gostaria%20de%20conversar%20sobre%20os%20servi%C3%A7os%20da%20S.A%20Business%20Solution%20para%20minha%20empresa.`;
export const MAILTO_URL = `mailto:${EMAIL_ADDRESS}?subject=Diagn%C3%B3stico%20Empresarial%20%E2%80%94%20S.A%20Business%20Solution`;

export const NAV_LINKS = [
  { label: "A Consultoria", href: "#sobre" },
  { label: "Serviços", href: "#solucoes" },
  { label: "Diretoria Executiva", href: "#lideranca" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Dúvidas", href: "#faq" },
];

export const IMAGES = {
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

export interface Service {
  index: string;
  name: string;
  description: string;
  deliverables: string[];
  meta: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    index: "01",
    name: "Financeiro",
    description:
      "Gestão operacional e estratégica da rotina financeira, garantindo organização rigorosa do caixa, conciliação exata e recuperação eficiente de receitas.",
    deliverables: [
      "Pagamentos e recebimentos",
      "Conciliação bancária",
      "Cobranças e controle de inadimplência",
    ],
    meta: "Controle de Caixa & Receita",
    image: IMAGES.cards,
  },
  {
    index: "02",
    name: "Negociações",
    description:
      "Condução profissional e estratégica de tratativas comerciais e financeiras para proteger margens, otimizar prazos e fortalecer parcerias.",
    deliverables: [
      "Negociações com fornecedores",
      "Negociações com clientes",
    ],
    meta: "Acordos & Condições Comerciais",
    image: IMAGES.stationery,
  },
  {
    index: "03",
    name: "Comercial",
    description:
      "Ações estruturadas para expandir a carteira ativa e recuperar oportunidades dentro da base histórica de clientes da sua empresa.",
    deliverables: [
      "Prospecção de novos clientes",
      "Reativação de clientes inativos",
    ],
    meta: "Expansão & Receita",
    image: IMAGES.team,
  },
  {
    index: "04",
    name: "Processos e Organização",
    description:
      "Padronização completa das rotinas departamentais, clareza hierárquica e cultura de organização para eliminar retrabalhos e elevar a eficiência.",
    deliverables: [
      "POPs dos departamentos",
      "Fluxogramas de processos",
      "Implantação do programa 5S",
      "Organograma da empresa",
    ],
    meta: "Padronização & Método 5S",
    image: IMAGES.folder,
  },
  {
    index: "05",
    name: "Gestão e Indicadores",
    description:
      "Transformação de dados operacionais e financeiros em visão executiva clara, com acompanhamento periódico da evolução do negócio.",
    deliverables: [
      "Apresentação mensal em dashboard",
      "Acompanhamento da evolução da empresa",
    ],
    meta: "Dashboards & Performance",
    image: IMAGES.brochure,
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

export interface MethodologyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: "01",
    title: "Diagnóstico & Alinhamento",
    subtitle: "Levantamento completo do cenário",
    description:
      "Avaliamos o financeiro (pagamentos, recebimentos, inadimplência), a estrutura de processos e o potencial comercial da empresa para definir prioridades imediatas.",
  },
  {
    number: "02",
    title: "Padronização & Organização",
    subtitle: "POPs, Fluxogramas, 5S e Organograma",
    description:
      "Estruturamos o organograma da empresa, desenhamos os fluxogramas de processos, documentamos os POPs de cada departamento e implantamos o programa 5S.",
  },
  {
    number: "03",
    title: "Operação Financeira & Comercial",
    subtitle: "Caixa, Negociações e Clientes",
    description:
      "Atuamos na conciliação bancária, controle de cobranças, negociações com clientes e fornecedores, além da prospecção de novos clientes e reativação de inativos.",
  },
  {
    number: "04",
    title: "Gestão por Indicadores",
    subtitle: "Dashboard mensal e evolução",
    description:
      "Realizamos a apresentação mensal em dashboard executivo e o acompanhamento contínuo da evolução da empresa para apoiar decisões seguras.",
  },
];

export interface Pillar {
  title: string;
  tag: string;
  items: string[];
  image: string;
}

export const PILLARS: Pillar[] = [
  {
    title: "Financeiro & Negociações",
    tag: "Saúde de Caixa",
    items: [
      "Pagamentos, recebimentos e conciliação bancária",
      "Cobranças e controle de inadimplência",
      "Negociações estratégicas com fornecedores e clientes",
    ],
    image: IMAGES.cards,
  },
  {
    title: "Processos & Organização",
    tag: "Eficiência Operacional",
    items: [
      "POPs dos departamentos e fluxogramas de processos",
      "Implantação completa do programa 5S",
      "Estruturação do organograma da empresa",
    ],
    image: IMAGES.folder,
  },
  {
    title: "Comercial & Indicadores",
    tag: "Crescimento & Gestão",
    items: [
      "Prospecção de novos clientes e reativação de inativos",
      "Apresentação mensal em dashboard executivo",
      "Acompanhamento contínuo da evolução da empresa",
    ],
    image: IMAGES.team,
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Quais são os serviços oferecidos pela S.A Business Solution?",
    answer:
      "Atuamos em 5 frentes principais: Financeiro (pagamentos e recebimentos, conciliação bancária, cobranças e controle de inadimplência), Negociações (com fornecedores e clientes), Comercial (prospecção de novos clientes e reativação de inativos), Processos e Organização (POPs dos departamentos, fluxogramas, programa 5S e organograma) e Gestão e Indicadores (apresentação mensal em dashboard e acompanhamento da evolução da empresa).",
  },
  {
    question: "Como funciona a implantação de POPs, fluxogramas e programa 5S?",
    answer:
      "Mapeamos a rotina real de cada setor, desenhamos os fluxogramas e redigimos os Procedimentos Operacionais Padrão (POPs) de forma clara e aplicável. Em paralelo, definimos o organograma da empresa e conduzimos a implantação prática do programa 5S com a equipe.",
  },
  {
    question: "A S.A Business Solution assume a rotina financeira e de cobranças?",
    answer:
      "Sim. Atuamos diretamente na organização de pagamentos e recebimentos, na conciliação bancária diária/mensal e na condução profissional de cobranças e controle de inadimplência, além de negociar diretamente com clientes e fornecedores.",
  },
  {
    question: "Como é feito o acompanhamento de gestão e indicadores?",
    answer:
      "Consolidamos os resultados financeiros, comerciais e operacionais e realizamos uma apresentação mensal em dashboard para a diretoria, acompanhando de perto a evolução da empresa mês a mês.",
  },
  {
    question: "Como entrar em contato para solicitar uma proposta?",
    answer:
      "Você pode falar diretamente com nossa Diretora Executiva, Silvana A. Ozima, pelo WhatsApp +55 (44) 99185-9393 ou pelo e-mail diretoria@sabusinesssolution.com.br.",
  },
];

export const MARQUEE_ITEMS = [
  "Conciliação Bancária",
  "Controle de Inadimplência",
  "Negociações Estratégicas",
  "Prospecção & Reativação",
  "POPs & Fluxogramas",
  "Programa 5S",
  "Organograma Corporativo",
  "Dashboard Mensal",
];
