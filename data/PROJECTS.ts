import { PROJECT_TYPES } from "@/types";


const VITE = { id: "techvite", name: "Vite", image_url: "/skills/vite.png" };
const REACT = {
  id: "techreact",
  name: "ReactJS",
  image_url: "/skills/react.png",
};
const JS = { id: "techjs", name: "Javascript", image_url: "/skills/js.png" };
const TAILWINDCSS = {
  id: "techtailwindcss",
  name: "TailwindCSS",
  image_url: "/skills/tailwind.png",
};
const HTML = { id: "techcss", name: "CSS", image_url: "/skills/css.png" };
const CSS = { id: "techhtml", name: "HTML", image_url: "/skills/html.png" };
const NEXTJS = {
  id: "technextjs",
  name: "NEXT",
  image_url: "/skills/nextjs.png",
};

const NODEJS = {id:"nodejs",name:"Nodejs", image_url:"/skills/nodejs.svg"}
const EXPRESSJS = {id:"expressjs",name:"Express",image_url:"/skills/expressjs.png"}
const BUN = {id:"bunjs",name:"Bun",image_url:"/skills/bun.svg"}

const MONGODB = {
  id:"mongodb",
  name:"MongoDB",
  image_url:"/skills/mongodb.png"
}

const POSTMAN = {
  id:"postman",
  name:"Postman",
  image_url:"/skills/postman.svg"
}


//  project
export const PROJECTS: PROJECT_TYPES[] = [
  {
    id: "proj1",
    title: "FilmiFlix",
    description:
      "A movie website created by using Next.js, TypeScript, React, Tailwind CSS, and the TMDB API.",
    image_url: "/projects/filmiflix.png",
    github_link: "https://github.com/amreshpro/filmiflix",
    live_link: "https://filmiflix.netlify.app/",

    tag: [NEXTJS, REACT, JS, TAILWINDCSS, CSS, HTML],
  },

  {
    id: "projblog",
    title: "Blogjs",
    description:
      "A straightforward and intuitive blog app that lets users easily create, edit, and manage their blog posts. Designed to provide a seamless blogging experience.",
    image_url: "/projects/blogjs.jpg",
    github_link: "https://github.com/amreshpro/blogjs",
    live_link: "",

    tag: [NODEJS,BUN,EXPRESSJS,MONGODB,POSTMAN],
  },
];

// react projects
export const REACT_PROJECTS: PROJECT_TYPES[] = [
  {
    id: "react_Proj1",
    title: "TextUtils",
    description: "Streamline your text editing tasks with our intuitive tools.",
    image_url: "/projects/textutils.png",
    github_link: "https://github.com/amreshpro/textutils",
    live_link: "https://textutilsify.netlify.app/",

    tag: [NEXTJS, REACT, JS, TAILWINDCSS, CSS, HTML],
  },
];

// small-projects
export const OTHERS_PROJECTS: PROJECT_TYPES[] = [
  {
    id: "small_proj_3",
    title: "Github User Search",
    description:
      "A github user search, which fetch all information about github user like name, username, follower, following etc.",
    image_url: "/projects/github-user.png",
    github_link: "https://github.com/amreshpro/github-search",
    live_link: "https://amresh-github-search.netlify.app/",
    tag: [REACT, JS, TAILWINDCSS, VITE, CSS, HTML],
  },
];

export const ZSH_THEME: PROJECT_TYPES[] = [
  {
    id: "zsh_terminal_theme-1",
    title: "Oh My Zsh Terminal Theme ",
    description:
      "Oh My Zsh will not make you a 10x developer...but you may feel like one.",
    image_url: "/projects/zsh.png",
    live_link:
      "https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes#amresh-terminal-theme",
    github_link: "https://github.com/amreshpro/zsh-theme",
  },
];
