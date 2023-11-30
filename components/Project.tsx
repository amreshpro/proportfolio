"use client";

import { SmallProjects, clones, othersContribution } from "@/constants/project";
import { ProjectCard } from "./ProjectCard";
import { useAppSelector } from "@/types/redux.types";

export const Project = () => {
  const isDarkMode = useAppSelector((state) => state.mode);

  return (
    <div className={`mt-16 ${isDarkMode ? "project-dark " : "project-light"}`}>
      <h1 id="projects" className=" text-xl uppercase font-bold text-center">
        Projects
      </h1>
      <div className=" flex flex-wrap justify-center items-center px-8 py-8 gap-8">
        {SmallProjects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}

        {clones.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}

        {othersContribution.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};
