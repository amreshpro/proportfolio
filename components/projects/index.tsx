"use client";
/* eslint-disable @next/next/no-img-element */


import { OTHERS_PROJECTS, PROJECTS, ZSH_THEME} from "../../data/PROJECTS";
import Project from "./card";

export default function Projects(){

  return (
    <div
      className={`mt-4 flex  flex-col justify-center items-center px-4 w-full `}
    >
      <h1
        id="projects"
        className=" text-3xl sm:text-2xl font-bold  text-center my-4"
      >
        Projects
      </h1>
      <div className="my-10  flex flex-wrap justify-center gap-8 sm:gap-8">
        {PROJECTS?.map((project) => {
          return <Project {...project} key={project?.id} />;
        })}
   
      </div>

      <h1
        id="projects"
        className=" text-3xl sm:text-2xl font-bold  text-center my-4"
      >
     Other Projects
      </h1>


      <div className="my-10  flex flex-wrap justify-center gap-8 sm:gap-8">
        { OTHERS_PROJECTS?.map((project) => {
          return <Project {...project} key={project?.id} />;
        })}
      {  ZSH_THEME?.map((project) => {
          return <Project {...project} key={project?.id} />;
        })}
      </div>
    </div>
  );
};

