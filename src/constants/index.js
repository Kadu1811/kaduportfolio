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
Front-End Developer at Acer Team, contributing to various projects focused on service management, marketplaces, and price analysis.

**Principal projects:**

• **PTT (Product Price Tracking):** A tool for analyzing Acer product prices across different marketplaces. I worked on front-end development and the integration of filters and pagination. **(São Paulo Team)** 

• **Marketplace:** A system for registering and managing Acer products, such as laptops and monitors. I contributed to UI implementation, business logic, and API consumption. **(Recife Team)**  

• **B2B (Business to Business):** A platform for selling Acer products to partners, featuring various tools for optimizing the sales process. I participated in the system's development and maintenance. **(Manaus Team)** 

• **Service:** An internal system to facilitate data management for Acer employees, with two modules: Service Management and Service Price Management. I developed the entire interface and API integration, including filters and pagination.  
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
