"use client"

import { SmallProjects } from "@/constants/project"
import { ProjectCard } from "./ProjectCard"



export const Project = () => {
  return (
    <div className="mt-16">
      <h1 id="projects" className="text-lightBlue text-md uppercase font-bold text-center">
        Projects
      </h1>
      <div className=" flex flex-wrap justify-center items-center px-8 py-8 gap-8">
        {SmallProjects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
}