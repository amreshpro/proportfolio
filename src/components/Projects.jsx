import { CLONES, ZSH_THEME } from "../constants/PROJECTS"
import { ProjectCard } from "./ProjectCard"

const Projects = () => {
  return (
    <div>
      <h1
        id="projects"
        className="  text-3xl uppercase font-bold  text-center my-6"
      >
        Projects
      </h1>

      <div className="mt-4 px-1 w-screen flex flex-wrap justify-center items-center gap-8 sm:gap-4">
        {CLONES?.map((clone) => {
          return <ProjectCard {...clone} key={clone.id} />;
        })}
        {ZSH_THEME?.map((clone) => {
          return <ProjectCard {...clone} key={clone.id} />;
        })}
      </div>
    </div>
  );
}
export default Projects