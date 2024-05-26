
import { PROJECT_TYPES } from "./types";


export const FRONTEND_TECHNOLOGY_USED= [
  { name: "Javascript", image_url: "/skills/js.png" },
  { name: "ReactJS", image_url: "/skills/react.png" },
  { name: "Redux", image_url: "/skills/redux.png" },
  { name: "Vite", image_url: "/skills/vite.png" },
  { name: "TailwindCSS", image_url: "/skills/tailwind.png" },
  { name: "CSS", image_url: "/skills/css.png" },
  { name: "HTML", image_url: "/skills/html.png" },
]
//  project
export const PROJECTS : PROJECT_TYPES[]= [

    {
        id: "proj1",
        title: "Moviehub",
        description:
          "A movie website using Next.js, TypeScript, React, Tailwind CSS, and the TMDB API.",
        image_url: "projects/moviehub.png",
        github_link: "https://github.com/amreshpro/movieflix",
        live_link: "https://filmiflix.netlify.app/",
        tag: ["nextjs", "reactjs", "#redux-toolkit", "tailwindcss", "axios"],
      },
  
  
  ];
  
  
  
  // small-projects
  
  export const OTHERS_PROJECTS:PROJECT_TYPES[] = [
  {
    id: "small_proj_3",
    title: "Github User Search",
    description:
      "A github user search, which fetch all information about github user like name, username, follower, following etc.",
    image_url: "/projects/github-user.png",
    github_link: "https://github.com/amreshpro/github-search",
    live_link: "https://amresh-github-search.netlify.app/",
    tag: ["reactjs", "tailwindcss", "api", "javascript"],
   
  },
  ];
  
  export const ZSH_THEME:PROJECT_TYPES[] = [
  {
    id: "zsh_terminal_theme-1",
    title: "Oh My Zsh Terminal Theme ",
    description:
      "Oh My Zsh will not make you a 10x developer...but you may feel like one.",
    image_url: "/projects/zsh.png",
    live_link:
      "https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes#amresh-terminal-theme",
    github_link: "https://github.com/amreshpro/zsh-theme",
    tag: ["cli", "terminal", "zsh", "oh-my-zsh"],
  },
  ];
  

  