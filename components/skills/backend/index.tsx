import { BACKEND_TECHNOLOGY } from "@/data/SKILLS";
import SkillTag from "../skill-tag";
import { SkillPropTypes } from "@/types";

export default function BackendTechnology() {
  return (
    <div className=" bg-secondary border-2 inset-2 rounded-xl py-3 px-3 w-fit border-white/70 ">

      <h1 className="text-2xl sm:text-xl font-bold text-center bg-gradient-to-r bg-clip-text text-transparent from-[#ff3355ee] to-[#ffd54b] ">
        Backend Technology
      </h1>
      <div className="px-6 py-6 flex gap-4 justify-center items-center flex-wrap">
        {BACKEND_TECHNOLOGY?.map((skill: SkillPropTypes) => {
          return <SkillTag key={skill.id} {...skill} />;
        })}
      </div>
    </div>
  );
}
