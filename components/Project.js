"use client"

import { SmallProjects, clones, othersContribution } from "@/constants/project"
import { ProjectCard } from "./ProjectCard"
import ProjectPage from "./ProjectPage";



export const Project = () => {
  return (
    <div className="mt-16">
      <h1
        id="projects"
        className="text-lightBlue text-3xl uppercase font-bold text-center"
      >
        Projects
      </h1>
      <div className=" flex flex-wrap justify-center items-center px-8 sm:px-1 py-8 gap-8">
        {SmallProjects.map((project) => {
          const style={
            cardBg:"bg-blue-800",
            imageCardBg:"bg-blue-600",
          }
          return <ProjectPage key={project.id} {...project} {...style} />;
        })}

        {clones.map((project) => {
             const style = {
               cardBg: "bg-orange-800",
               imageCardBg: "bg-orange-600",
             };
          return <ProjectPage key={project.id} {...project} {...style} />;
        })}

        {othersContribution.map((project) => {
             const style = {
               cardBg: "bg-slate-800",
               imageCardBg: "bg-slate-600",
             };
          return <ProjectPage key={project.id} {...project} {...style} />;
        })}
      </div>
    </div>
  );
}
