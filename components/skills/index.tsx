import BackendTechnology from "./backend";
import Databases from "./database";
import FrontendTechnology from "./frontend";
import ProgrammingLanguages from "./programming-lang";
import ToolBox from "./tools";

export default function Skills() {
  return (
    <div className=" flex p-4 flex-col justify-center items-center">
      <h1
        id="skills"
        className="my-8 text-3xl sm:text-2xl font-bold  text-center  "
      >
        Skills
      </h1>
      <div id="skills" className="container flex gap-8 justify-center items-center flex-wrap ">
        <ProgrammingLanguages />
        <BackendTechnology />
        <FrontendTechnology />
        <Databases />
        <ToolBox />
      </div>
    </div>
  );
}
