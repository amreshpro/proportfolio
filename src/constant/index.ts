export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/boot.dev",
  twitter: "https://twitter.com/amreshpro",
  github: "https://github.com/amreshpro",
  linkedin: "https://linkedin.com/in/amreshpro",
  portfolio: "https://amreshpro.vercel.app",
  mail: "amresh.terminal@gmail.com",
  resume: "/Resume.pdf",
};



export const NAV_LINKS = [
  {
    id: "nav-links1",
    title: "Home",
    path: "/",
  },
  {
    id: "nav-links2",
    title: "About",
    path: "/about",
  },
  {
    id: "nav-links3",
    title: "Skills",
    path: "/skills",
  },

  {
    id: "nav-links4",
    title: "Projects",
    path: "/projects",
  },
  // {
  //   id: "nav-links5",
  //   title: "Contact",
  //   path: "#contact",
  // },
];


export const SKILLS = [
  {
    id: "techidhtml",
    name: "HTML5",
    // image_url: "https://i.imgur.com/whCcsR1.png",
    image_url: "/skills/html.png",
  },
  {
    id: "techidcss",
    name: "CSS3",

    //  image_url: "https://i.imgur.com/eCUFQLX.png"
    image_url: "/skills/css.png",
  },
  {
    id: "techidtailwindcss",
    name: "Tailwind",
    // image_url: "https://i.imgur.com/6lizxkE.png",
    image_url: "/skills/tailwind.png",
  },
  {
    id: "techidjs",
    name: "JavaScript",
    // image_url: "https://i.imgur.com/2EeGxbg.png",
    image_url: "/skills/js.png",
  },
  {
    id: "techidtypescript",
    name: "TypeScript",
    // image_url: "https://i.imgur.com/27qaz8a.png",
    image_url: "/skills/typescript.png",
  },
  {
    id: "techidreact",
    name: "React JS",
    // image_url: "https://i.imgur.com/3XlqowC.png",
    image_url: "/skills/react.png",
  },

  {
    id: "techidexpress",
    name: "ExpressJS",
    image_url: "/skills/expressjs.png",
  },
  {
    id: "techidnextjs",
    name: "Nextjs",
    image_url: "/skills/nextjs.png",
  },
  {
    id: "techidredux",
    name: "Redux",
    // image_url: "https://i.imgur.com/lxzmhyH.png",
    image_url: "/skills/redux.png",
  },


  {
    id: "techidnodejs",
    name: "Node JS",
    // image_url: "https://i.imgur.com/B8NJvnF.png",
    image_url: "/skills/nodejs.png",
  },
  {
    id: "techidmongodb",
    name: "MongoDB",
    // image_url: "https://i.imgur.com/RVCqVh8.png",
    image_url: "/skills/mongodb.png",
  },
  // {
  //   id: "techidthree",
  //   name: "Three JS",
  //   image_url: "https://i.imgur.com/Lky1TeM.jpg",
  // },
];

export const OTHER_SKILLS = [
  {
    id: "techidpostman",
    name: "Postman",
    image_url: "/skills/postman.svg",
  },
  {
    id: "techidvscode",
    name: "VSCode",
    image_url: "/skills/vscode.png",
  },
  {
    id: "techidgit",
    name: "Git",
    image_url: "https://i.imgur.com/h7DICgz.png",
  },
  {
    id: "techidgithub",
    name: "Github",
    // image_url: "https://i.imgur.com/9Bv0oxe.png",
    image_url: "/skills/github.png",
  },
  {
    id: "techidlinux",
    name: "Ubuntu",
    image_url: "/skills/ubuntu.png",
  },
  // {
  //   id: "techidocker",
  //   name: "Docker",
  //   // image_url: "https://i.imgur.com/yslLZqN.png",
  //   image_url: "/skills/docker.png",
  // },
];





//  project
export const PROJECTS= [

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

export const SmallProjects = [
{
  id: "small_proj_3",
  title: "Github User Search",
  description:
    "A github user search, which fetch all information about github user like name, username, follower, following etc.",
  image_url: "/projects/github-user.png",
  github_link: "https://github.com/amreshpro/github-search",
  live_link: "https://amresh-github-search.netlify.app/",
  tag: ["reactjs", "tailwindcss", "api", "javascript"],
  technologyUsed: [
    { name: "Javascript", image_url: "/skills/js.png" },
    { name: "ReactJS", image_url: "/skills/react.png" },
    { name: "Redux", image_url: "/skills/redux.png" },
    { name: "Vite", image_url: "/skills/vite.png" },
    { name: "TailwindCSS", image_url: "/skills/tailwind.png" },
    { name: "CSS", image_url: "/skills/css.png" },
    { name: "HTML", image_url: "/skills/html.png" },
  ],
},
];

export const ZSH_THEME = [
{
  id: "others_1",
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

export const CLONES = [
{
  id: "clones_1",
  title: "Swiggy Clone",
  description: `Developed a fully functional clone of the Swiggy.com website using modern web technologies to replicate its core features and user interface.
Technologies/Tools Used: React.js, Tailwind CSS, JavaScript, HTML, CSS, Git, and GitHub.`,
  image_url: "/projects/swigi.png",
  live_link: "https://swigi.netlify.app/",
  github_link: "https://github.com/amreshpro/swiggy",
  technologyUsed: [
    { name: "Javascript", image_url: "/skills/js.png" },
    { name: "ReactJS", image_url: "/skills/react.png" },
    { name: "Redux", image_url: "/skills/redux.png" },
    { name: "Vite", image_url: "/skills/vite.png" },
    { name: "TailwindCSS", image_url: "/skills/tailwind.png" },
    { name: "CSS", image_url: "/skills/css.png" },
    { name: "HTML", image_url: "/skills/html.png" },
  ],
  tag: ["reactjs", "tailwindcss", "nodejs", "clone"],
},
//   {

//     id : "clones_2",
//     title:"Airbnb Clone",
//     description:`Developed a fully functional clone of the Airbnb website using modern web technologies to replicate its core features and user interface.
//           Technologies/Tools Used: React.js, Tailwind CSS, JavaScript, HTML, CSS, Git, and GitHub.

//           `,
//     image_url:"https://i.imgur.com/59W5ne7.png",
//     live_link:"https://clone-airbnb-site.netlify.app/",
//     github_link:"https://github.com/amreshpro/airbnb",
//     tag:["#reactjs","#tailwindcss","#nodejs","#clone"]

//   }
];

// vscode themes

export const vscodeThemes = [
{
  id: "vscode_theme_1",
  title: "Brogang Dark Theme",
  description:
    "A dark theme for vs code which is make specially for javascript and it has 100+ downloads.",
  image_url: "https://i.imgur.com/oNeK6RT.png",
  live_link: "",
  github_link: "https://github.com/amreshpro/brogang",
  tag: ["vscode", "themes"],
},
{
  id: "vscode_theme_2",
  title: "Darkuto Dark Theme",
  description:
    "A dark theme for vs code based on red blue or green color.It has 72+ downloads.",
  image_url: "https://i.imgur.com/EoDLDMr.png",
  live_link: "",
  github_link: "https://github.com/amreshpro/darkuto",
  tag: ["vscode", "themes"],
},
];

// export const vscodeThemes = [
//   {
//       id: "vscode_theme_1",
//       title: "Brogang Dark Theme",
//       description:  "A dark theme for vs code which is make specially for javascript and it has 100+ downloads.",
//       image_url: "https://i.imgur.com/oNeK6RT.png",
//       live_link: "",
//       github_link: "https://github.com/amreshpro/brogang",
//       tag:["#vscode","#themes"],

//   },
//   {
//       id: "vscode_theme_2",
//       title: "Darkuto Dark Theme",
//       description: "A dark theme for vs code based on red blue or green color.It has 72+ downloads.",
//       image_url: "https://i.imgur.com/EoDLDMr.png",
//       live_link: "",
//       github_link: "https://github.com/amreshpro/darkuto",
//       tag:["#vscode","#themes"],
//   },
//   {
//       id: "vscode_theme_3",
//       title: "Yo Yo Dark Theme",
//       description: "A dark theme for vs code based on pink,yellow,blue color.",
//       image_url: "https://i.imgur.com/tOoAe7O.png",
//       live_link: "",
//       github_link: "https://github.com/amreshpro/yoyo",
//       tag:["#vscode","#themes"],
//   },

// ]