import { FRONTEND_TECHNOLOGY } from "@/data/SKILLS";

import SkillTag from "../skill-tag";
import { SkillPropTypes } from "@/types";

export default function FrontendTechnology() {
  return (
    <div className=" bg-gray-800/10 border-2 inset-2 rounded-xl py-3 w-fit border-white/70 ">
      <h1 className="text-2xl sm:text-xl font-bold text-center bg-gradient-to-r bg-clip-text text-transparent from-[#f81879ee] to-[#ff4f0a] ">
        Frontend Technology
      </h1>
      <div className="px-6 py-6 flex gap-4 justify-center items-center flex-wrap">
        {FRONTEND_TECHNOLOGY?.map((skill: SkillPropTypes) => {
          return <SkillTag key={skill.id} {...skill} />;
        })}
      </div>
    </div>
  );
}
