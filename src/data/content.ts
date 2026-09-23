// Fonte única de conteúdo do site. Perfil, experiência e formação vêm
// diretamente do currículo exportado do LinkedIn (linkedin.com/in/vitor-klein).
// A lista de projetos ainda é provisória — o Vitor pediu para deixar isso
// para depois, então não mexa nela sem instrução nova.

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Project = {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  tags: string[];
  year: string;
  links: {
    live?: string;
    code?: string;
  };
  featured?: boolean;
};

export type JourneyItem = {
  period: string;
  title: string;
  org: string;
  location?: string;
  description: string;
  type: "education" | "experience";
};

export const profile = {
  name: "Vitor Klein",
  initials: "VK",
  role: "Mobile & Web Developer",
  tagline:
    "Desenvolvo aplicações mobile e web full stack — hoje em Flutter, e nos últimos anos em React, Node.js e Vue.js em produtos reais.",
  location: "Missal, Paraná — Brasil",
  bio: "Minha atuação como desenvolvedor de software é marcada pela aplicação prática de competências sólidas em JavaScript, TypeScript, Flutter e Inteligência Artificial — habilidades construídas ao longo da formação técnica e continuamente aprimoradas em experiências reais de desenvolvimento. Participo ativamente da construção de soluções full stack e mobile, sempre com foco em qualidade, performance e evolução técnica. Atualmente curso Ciência da Computação na UTFPR e exploro o universo da IA, tanto na integração de modelos em aplicações reais quanto no desenvolvimento de soluções que ampliam a experiência do usuário e automatizam processos.",
  avatar: "/VK-logo.svg",
  resumeUrl: "/Curriculum.pdf",
  availableForWork: true,
};

export const socials = {
  email: "vitorhklein2@gmail.com",
  github: "https://github.com/Vitor-Klein",
  linkedin: "https://www.linkedin.com/in/vitor-klein/",
  figma: "https://www.figma.com/@vitorKlein",
};

export const skills: SkillGroup[] = [
  {
    category: "Linguagens",
    items: ["TypeScript", "JavaScript", "Dart", "Java"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Arquitetura de Aplicativo", "iOS", "Android"],
  },
  {
    category: "Web",
    items: ["React.js", "Next.js", "Vue.js", "Node.js"],
  },
  {
    category: "Práticas & Ferramentas",
    items: ["REST APIs", "Scrum", "Git", "GitHub", "Figma", "IA aplicada"],
  },
];

export const certifications: string[] = [
  "Curso de Java",
  "Desenvolvimento Mobile em Flutter",
  "UX no processo de desenvolvimento de aplicações web e mobile",
  "Semana OmniStack 11 (Rocketseat)",
  "Extensão: Ensino de Programação de Computadores com LEGO Mindstorm",
];

// NOTE(vitor): lista provisória — combinamos que os projetos ficam para
// depois. Não altere sem instrução nova.
export const projects: Project[] = [
  {
    slug: "trash-it",
    name: "Trash-It",
    emoji: "♻️",
    description:
      "Aplicação web para potencializar a coleta de lixo em pequenas e médias cidades, facilitando a comunicação entre prefeitura e moradores. Desenvolvido como projeto de conclusão do curso técnico em Informática.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    year: "2023",
    links: {
      live: "https://trash-it.vercel.app",
      code: "https://github.com/Vitor-Klein/TRASHIT-WEB",
    },
    featured: true,
  },
  {
    slug: "drink-it",
    name: "Drink-It",
    emoji: "🍹",
    description:
      "Drinking game para festas: cartas e desafios dinâmicos pensados para diversão em grupo, com uma interface leve e direta ao ponto.",
    tags: ["React", "JavaScript"],
    year: "2022",
    links: {
      code: "https://github.com/Vitor-Klein?tab=repositories&q=drink-it",
    },
  },
  {
    slug: "coffeapp",
    name: "CoffeApp",
    emoji: "☕",
    description:
      "App para auxiliar baristas e entusiastas de café especial a criar, organizar e guardar receitas — do grão ao método de preparo.",
    tags: ["React Native", "Mobile"],
    year: "2022",
    links: {
      code: "https://github.com/Vitor-Klein?tab=repositories&q=coffeapp",
    },
  },
  {
    slug: "vk-portfolio",
    name: "VK Portfolio",
    emoji: "🖋️",
    description:
      "Este site: design system próprio em liquid glass, construído do zero em Next.js — a versão atual de um portfólio em constante evolução.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2026",
    links: {
      code: "https://github.com/Vitor-Klein/VK-Portfolio",
    },
  },
];

export const journey: JourneyItem[] = [
  {
    period: "Abr 2025 — atual",
    title: "Desenvolvedor Mobile",
    org: "bfac.com",
    location: "Mississippi, Estados Unidos (remoto)",
    description:
      "Desenvolvimento e manutenção de aplicativo mobile multiplataforma (iOS e Android) com Flutter e Dart em empresa americana de soluções de software. Boas práticas de arquitetura mobile, integração com APIs REST e serviços backend, colaborando com uma equipe internacional em ambiente 100% remoto.",
    type: "experience",
  },
  {
    period: "Fev 2024 — Abr 2024",
    title: "Desenvolvedor de Software",
    org: "Jacad",
    location: "Medianeira, Paraná",
    description:
      "Desenvolvimento de funcionalidades em Java para sistemas acadêmicos de instituições de ensino, com VRaptor e Jasper Reports para geração de relatórios. Participação em cerimônias ágeis com metodologia Scrum.",
    type: "experience",
  },
  {
    period: "Mar 2023 — Dez 2026",
    title: "Bacharelado em Ciência da Computação",
    org: "UTFPR",
    location: "Medianeira, Paraná",
    description:
      "Formação com foco em desenvolvimento de software, estrutura de dados e engenharia de sistemas — cursando em paralelo às experiências profissionais abaixo.",
    type: "education",
  },
  {
    period: "Fev 2023 — Out 2023",
    title: "Desenvolvedor Full Stack",
    org: "Clindy",
    location: "Missal, Paraná",
    description: "Desenvolvimento full stack com Node.js e Vue.js.",
    type: "experience",
  },
  {
    period: "Nov 2021 — Jan 2023",
    title: "Desenvolvedor de Software",
    org: "Laços do Agro",
    location: "Paraná",
    description:
      "Atuação full stack — front-end, back-end e mobile — construindo soluções de ponta a ponta.",
    type: "experience",
  },
  {
    period: "Jan 2019 — Dez 2022",
    title: "Ensino Técnico em Programação de Computadores",
    org: "Colégio Estadual João Manuel Mondrone",
    location: "Missal, Paraná",
    description:
      "Formação técnica em desenvolvimento de aplicativos específicos — base que originou o projeto Trash-It, meu TCC do curso técnico.",
    type: "education",
  },
];
