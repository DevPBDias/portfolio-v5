export const navItems = [
  { name: "Início", link: "#start" },
  { name: "Sobre", link: "#about" },
  { name: "Projetos", link: "#projects" },
  { name: "Experiência", link: "#work" },
  { name: "Contato", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Tenho sonho de impactar as pessoas do mundo com tecnologia",
    description: "",
    className: "row-span-1 md:col-span-6 md:row-span-1 lg:col-span-3",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start md:justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Sou Paulo Bruno, desenvolvedor web com foco em front-end, com sólidos conhecimentos em React, Next.js e Node.js. Especializado em UX/UI Design e Figma.",
    description: "",
    className:
      "row-span-1 lg:col-span-2 lg:row-span-2 md:col-span-6 md:row-span-2",
    imgClassName: "md:opacity-30 opacity-0",
    titleClassName: "justify-end md:text-xs",
    img: "/me-video.gif",
    spareImg: "",
  },
  {
    id: 3,
    title: "Minhas tech stacks",
    description: "Procuro sempre aprender novas tecnologias",
    className: "row-span-1 lg:col-span-3 md:col-span-6 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center lg:justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Atualmente estou estudando na Escola da Nuvem e colaborando com um projeto voluntário",
    description: "2025",
    className:
      " row-span-1 md:col-span-6 md:row-span-1 lg:col-span-3 lg:row-span-1",
    imgClassName:
      "absolute right-0 bottom-0 w-24 md:w-32 2xl:w-60 rounded-lg opcity-30",
    titleClassName: "justify-center",
    img: "/logo-nuvem.png",
    spareImg: "/grid.svg",
  },
  {
    id: 5,
    title: "Pronto para transformar sua ideia em realidade? Fale comigo!",
    description: "",
    className:
      "row-span-1 md:col-span-6 md:row-span-1 lg:col-span-2 lg:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Olé midia website V3",
    description:
      "Site da Olé Mídia em que apresenta a empresa e seus serviços. É possível enviar e-mails a empresa.",
    img: "/Ole.JPG",
    link: "https://olemidia.com.br/",
    iconLists: ["/re.svg", "/ts.svg", "/Styled.png", "/fm.svg", "git.png"],
  },
  {
    id: 2,
    title: "Max Trainning website",
    type: "Freelancer",
    description:
      "Site de vendas responsivo do Max Training em que apresenta depoimentos e seus serviços.",
    img: "Abertura.png",
    link: "https://max-training-lp.vercel.app/maxtrainingperformance",
    iconLists: ["/re.svg", "/ts.svg", "/Styled.png", "git.png"],
  },
  {
    id: 3,
    title: "App de trailers",
    description:
      "Projeto pessoal de um mockup de UX/UI Design feito por mim. Foi desenvolvido um app mobile para navegar por filmes, series e animes",
    img: "/trailersApp.png",
    link: "https://github.com/DevPBDias/app-trailers",
    iconLists: [
      "/re.svg",
      "/ts.svg",
      "/Styled.png",
      "Nodejs.png",
      "Mongo Db.png",
      "git.png",
    ],
  },
  {
    id: 4,
    title: "TrybeTunes Reworked",
    description:
      "Foi desenvolvida uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.",
    img: "Trybetunes.JPG",
    link: "https://github.com/DevPBDias/trybetunes-reworked",
    iconLists: ["/re.svg", "/next.svg", "sass.png", "/ts.svg", "git.png"],
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Freelancer - Web Dev",
    desc: [
      "Desenvolvimento de interfaces responsivas com React, TypeScript e Styled-components, a partir de design Pixel Perfect no Figma",
      "Gerenciamento completo do projeto: versionamento com Git, deploy na Vercel e organização via Kanban",
      "sContato direto com o cliente, entrega em uma semana e manutenção com envio de métricas via Vercel Analytics.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Projeto Voluntário - Front-end Dev",
    desc: [
      "Desenvolvimento do front-end com React, Next.js, Tailwind e Shadcn, com melhorias visuais no Magick Tracker",
      "Refatoração de código utilizando design patterns, separando lógicas complexas em componentes, hooks e contextos",
      "Criação de nova Home no Figma, versionamento com Git/GitHub e participação ativa em reuniões semanais da equipe.",
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://www.linkedin.com/in/devpaulobrunomdias/",
  },
  {
    id: 2,
    img: "/be.png",
    link: "https://www.behance.net/paulobrunodias",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://github.com/DevPBDias",
  },
];
