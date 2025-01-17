import spotify_clone from "../assets/projects/spotify_clone.png";
import rescue_game from "../assets/projects/recue_game.png";
import dino_game from "../assets/projects/dino_game.png";
import first_portfolio from "../assets/projects/first_portfolio.png";
import calculator from "../assets/projects/calculator.png";
import crud from "../assets/projects/crud.png";
import spiderverse from "../assets/projects/spiderverse.png";

export const EXPERIENCES = [
  {
    year: "2023",
    role: "developer",
    company: "google",
    description: `dream job`,
    technologies: ["Typescript", "React.js", "Next.js"],
  },
];

export const PROJECTS = [
  {
    title: "Spiderverse",
    image: spiderverse,
    description:
      "made my own spider multiverse with information about the heroes, with audio and animations",
    technologies: ["React", "NextJs", "SASS", "Typescript", "Framer Motion"],
    url: "https://spiderverse-rouge.vercel.app/",
  },
  {
    title: "CRUD",
    image: crud,
    description:
      "crud made with react and firebase in function to study, backend is now down but feel free to check my code",
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
      "a clone to practive javascript html css of spotfy to practice bootstrap",
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
    description: "calculator to calculate your accounts feel free to use it!",
    technologies: ["HTML", "CSS", "Javascript"],
    url: "https://kadu1811.github.io/Calculator/",
  },
  {
    title: "First Portfolio",
    image: first_portfolio,
    description:
      "my first portfolio built with html & css where i could first try my imagination and design run free",
    technologies: ["HTML", "CSS"],
    url: "https://kadu1811.github.io/MeuPortfolio/",
  },
];
