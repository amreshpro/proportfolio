import { CLONES, PROJECTS, ZSH_THEME } from "../constants/PROJECTS"
import ProjectCard  from "./ProjectCard"

const Projects = () => {
  return (
    <div className="flex  flex-col justify-center items-center px-4  ">
      <h1
        id="projects"
        className=" text-3xl uppercase font-bold text-center"
      >
        Projects
      </h1>

      <div className="my-6 mb-36 flex flex-col gap-4">
      {PROJECTS?.map((project) => {
          return <ProjectCard {...project} key={project?.id} />;
        })}
      
        {CLONES?.map((clone) => {
          return <ProjectCard {...clone} key={clone.id} />;
        })}
     

        {ZSH_THEME?.map((item) => {
          return <ProjectCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
export default Projects