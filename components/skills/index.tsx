import BackendTechnology from "./backend";
import Databases from "./database";
import FrontendTechnology from "./frontend";
import ProgrammingLanguages from "./programming-lang";
import ToolBox from "./tools";

export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1
        id="skills"
        className=" text-3xl sm:text-2xl font-bold  text-center my-4 "
      >
        Skills
      </h1>
      <div id="skills" className="container mb-28 flex gap-8 justify-center items-center flex-wrap ">
        <ProgrammingLanguages />
        <BackendTechnology />
        <FrontendTechnology />
        <Databases />
        <ToolBox />
      </div>
    </div>
  );
}
