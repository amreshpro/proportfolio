
import { OTHER_SKILLS, SKILLS } from "../constants/SKILLS";
import SkillTag from "./SkillTag";


export  default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 id="skill" className="text-3xl uppercase font-bold  text-center my-6">
        Skills
      </h1>
      <div id="skills" className="container flex flex-col justify-start ">
        <h1 className="text-2xl sm:text-xl font-bold text-center bg-gradient-to-r bg-clip-text text-transparent from-[#f81879ee] to-[#ff4f0a] ">
          Technologies I Use
        </h1>
        <div className="tech-stack flex justify-center items-center flex-wrap">
          {SKILLS.map((skill) => {
            return <SkillTag key={skill.id} {...skill} />;
          })}
        </div>

        <h1 className="mt-1 text-2xl sm:text-xl font-bold text-center bg-gradient-to-r bg-clip-text text-transparent from-[#f81879ee] to-[#ff4f0a] ">
          Development & Productivity Tool I Use
        </h1>
        <div className="tech-stack flex justify-center items-center flex-wrap">
          {OTHER_SKILLS.map((skill) => {
            return <SkillTag key={skill.id} {...skill} />;
          })}
        </div>
      </div>
    </div>
  );
}