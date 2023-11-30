"use client";
import { OTHER_SKILLS, SKILLS } from "@/constants";
import { SkillCard } from "./SkillCard";
import { useAppSelector } from "@/types/redux.types";

export const Skills = () => {
  const isDarkMode = useAppSelector((state) => state.mode);

  return (
    <div
      id="skills"
      className={`mt-16 ${isDarkMode ? "skill-dark " : "skill-light"}`}
    >
      <div className="flex flex-col justify-start items-center px-8 py-8 gap-6">
        <h1 className="text-2xl font-bold uppercase">Skills</h1>
        <div className="skills1 flex flex-wrap justify-start px-8  gap-6 ">
          {SKILLS.map((skill) => {
            return <SkillCard key={skill.id} {...skill} />;
          })}
        </div>

        {/* <div className="skills2 flex flex-wrap justify-start items-start px-8 py-8 gap-6 ">
          {OTHER_SKILLS.map((skill) => {
            return <SkillCard key={skill.id} {...skill} />;
          })}
        </div> */}
      </div>
    </div>
  );
};
