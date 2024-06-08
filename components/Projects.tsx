"use client";
/* eslint-disable @next/next/no-img-element */
import { PROJECTS, OTHERS_PROJECTS, ZSH_THEME } from "../data/PROJECTS";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <div className="mt-4 flex  flex-col justify-center items-center px-4 w-full ">
      <h1
        id="projects"
        className=" uppercase w-fit p-2 px-6 rounded-lg  text-2xl text-center font-bold"
      >
        Projects
      </h1>
      <div className="my-10  flex flex-wrap justify-center gap-8 sm:gap-8">
        {PROJECTS?.map((project) => {
          return <ProjectCard {...project} key={project?.id} />;
        })}
        {OTHERS_PROJECTS.map((project) => {
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
