import spotify_clone from "../assets/projects/spotify_clone.png";
import rescue_game from "../assets/projects/recue_game.png";
import dino_game from "../assets/projects/dino_game.png";
import first_portfolio from "../assets/projects/first_portfolio.png";
import calculator from "../assets/projects/calculator.png";
import crud from "../assets/projects/crud.png";
import spiderverse from "../assets/projects/spiderverse.png";

export const PROJECTS = [
  {
    title: "Spiderverse",
    image: spiderverse,
    description:
      "Dive into my custom Spider-Verse! Explore an interactive multiverse filled with hero profiles, dynamic animations, and immersive audio effects, all brought to life with modern web technologies.",
    technologies: ["React", "NextJs", "SASS", "Typescript", "Framer Motion"],
    url: "https://spiderverse-rouge.vercel.app/",
  },
  {
    title: "CRUD",
    image: crud,
    description:
      "CRUD application built with React and Firebase to deepen my understanding of full-stack development. Although the backend is currently offline, feel free to explore the codebase on GitHub.",
    technologies: [
      "React",
      "NextJs",
      "Eslint",
      "TailwindCss",
      "Typescript",
      "Javascript",
    ],
    url: "https://github.com/Kadu1811/CRUD",
  },
  {
    title: "Spotify Clone",
    image: spotify_clone,
    description:
      "Responsive Spotify clone crafted to practice Bootstrap, HTML, and CSS. Features a sleek interface inspired by the original design. Perfect for showcasing my UI/UX design skills.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    url: "https://kadu1811.github.io/SpotifyClone/index.html",
  },
  {
    title: "Rescue Game",
    image: rescue_game,
    description:
      "An immersive mini-game where you pilot a helicopter, fire missiles, and protect the soldier on the ground. Experience a blend of strategy and action in this engaging browser game!",
    technologies: ["HTML", "CSS", "Javascript"],
    url: "https://kadu1811.github.io/RescueGame/",
  },
  {
    title: "Dino Game",
    image: dino_game,
    description:
      "A nostalgic take on the classic Dino Game, built from scratch with dynamic animations and responsive controls. Jump over obstacles and keep running in this endlessly entertaining adventure!",
    technologies: ["HTML", "CSS", "Javascript"],
    url: "https://kadu1811.github.io/DinoGame/",
  },
  {
    title: "Calculator",
    image: calculator,
    description:
      "A simple and intuitive calculator to help you with everyday calculations. Fully functional and user-friendly—try it out now!",
    technologies: ["HTML", "CSS", "Javascript"],
    url: "https://kadu1811.github.io/Calculator/",
  },
  {
    title: "First Portfolio",
    image: first_portfolio,
    description:
      "My first-ever portfolio project, built with HTML and CSS. A creative playground where I let my imagination and design skills shine for the first time.",
    technologies: ["HTML", "CSS"],
    url: "https://kadu1811.github.io/MeuPortfolio/",
  },
];

export const EXPERIENCES = [
  {
    year: "2023 - current",
    role: "Front-End Developer",
    company: "FITec – Fundação para Inovações Tecnológicas",
    description: `
Atuação como desenvolvedor front-end na equipe Acer, contribuindo para diversos projetos voltados à gestão de serviços, marketplaces e análise de preços.

**Principais projetos:**

- **PTT (Product Price Tracking):** Ferramenta para análise de preços de produtos Acer em diferentes marketplaces. Atuei no desenvolvimento do front-end e integração de filtros e paginação. **(Equipe de São Paulo)** 
- **Marketplace:** Sistema para cadastro e gerenciamento de produtos Acer, como notebooks e monitores. Trabalhei na implementação de UI, lógica de negócios e consumo de APIs. **(Equipe de Recife)**  
- **B2B (Business to Business):** Plataforma para venda de produtos Acer a parceiros, incluindo diversos recursos para otimização do processo comercial. Participei da construção e manutenção do sistema. **(Equipe de Manaus)**  
- **Gestão de Serviços:** Sistema interno para facilitar a gestão de dados por funcionários da Acer, com dois módulos: **Gestão de Serviços** e **Gestão de Preço do Serviço**. Desenvolvi toda a interface e integração com APIs, incluindo filtros e paginação.  
`,
    technologies: [
      "React",
      "TypeScript",
      "Ant Design",
      "Zustand",
      "Vite",
      "Vitest",
    ],
  },
];
