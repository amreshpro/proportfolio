import {  PROJECTS,} from "../constant"
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <div className="mt-4 flex  flex-col justify-center items-center px-4 w-full ">
          <h1 className=" secondary w-fit p-2 px-6 rounded-lg  text-2xl text-center font-bold">Projects</h1>


      <div className="my-6 mb-36 flex flex-col gap-4">
      {PROJECTS?.map((project) => {
          return <ProjectCard {...project} key={project?.id} />;
        })}
             

      </div>
    </div>
  );
}
export default Projects