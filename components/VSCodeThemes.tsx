import { VSCODE_THEMES } from "@/data/THEMES";
import ProjectCard from "./ui/ProjectCard";

export default function VSCodeThemes() {
  return (
    <div className="mt-4 flex  flex-col justify-center items-center px-4 w-full ">
    <h1 id="themes" className="uppercase w-fit p-2 px-6 rounded-lg  text-2xl text-center font-bold">
   VS Code Themes
    </h1>



    <div className="my-10  flex flex-wrap justify-center gap-8">
      {VSCODE_THEMES?.map((project) => {
        return <ProjectCard   {...project} key={project?.id} />;
      })}
      </div>
  </div>
  )
}