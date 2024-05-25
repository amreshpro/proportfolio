"use client"
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { PROJECTS, SmallProjects, ZSH_THEME } from "../data/PROJECTS";
import { useThemeStore } from "@/store/themeStore";
import LinkButton from "./LinkButton";


const Projects = () => {
  return (
    <div className="mt-4 flex  flex-col justify-center items-center px-4 w-full ">
      <h1 id="projects" className=" w-fit p-2 px-6 rounded-lg  text-2xl text-center font-bold">
        Projects
      </h1>

      <div className="my-10  flex flex-wrap justify-center gap-4">
        {PROJECTS?.map((project) => {
          return <ProjectCard {...project} key={project?.id} />;
        })}
        {SmallProjects?.map((project) => {
          return <ProjectCard {...project} key={project?.id} />;
        })}

        {ZSH_THEME?.map((project) => {
          return <ProjectCard {...project} key={project?.id} />;
        })}
      </div>
    </div>
  );
};
export default Projects;





type ProjectPropType = {
  title: string;
  description: string;
  image_url: string;
  github_link: string;
  live_link: string;
};

const ProjectCard = (props: ProjectPropType) => {
  const { title, image_url, github_link, live_link,description } = props;
  const isDarkModeEnabled = useThemeStore((state)=>state.isDarkModeEnabled)
  return (
    <div className={` ${isDarkModeEnabled ? 'dark-box':'light-box'} rounded-lg w-80 h-96`}>
      <Link  href={live_link} target="_blank">
        <img src={image_url} alt={title} className="w-full  p-2 " />
      </Link>
      <div className="content w-full p-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
        <div className="btns py-2  flex gap-4">
          <LinkButton title={"Code"} link={github_link}  />
          
          <LinkButton title={"Live"} link={live_link}  />
        </div>
      </div>
    </div>
  );
};

