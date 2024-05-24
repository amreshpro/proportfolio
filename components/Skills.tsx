"use client"
/* eslint-disable @next/next/no-img-element */
import { useThemeStore } from "@/store/themeStore";
import { BACKEND_TECHNOLOGY, FRONTEND_TECHNOLOGY, OTHER_SKILLS, PROGRAMMING_LANGUAGES, SKILLS } from "../data/SKILLS";





type SkillPropTypes =   {id:string, name: string; image_url: string; }


export  default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 id="skills" className=" w-fit p-2 px-6 rounded-lg text-3xl uppercase font-bold  text-center my-6">
        Skills
      </h1>
      <div id="skills" className="container mb-28 flex flex-col justify-start ">
        <h1 className="text-2xl sm:text-xl font-bold text-center bg-gradient-to-r bg-clip-text text-transparent from-[#f81879ee] to-[#ff4f0a] ">
         Programming Language
        </h1>
        <div className="px-6 py-6 flex gap-4 justify-center items-center flex-wrap">
          {PROGRAMMING_LANGUAGES?.map((skill:SkillPropTypes) => {
            return <SkillTag key={skill.id} {...skill} />;
          })}
        </div>

        <h1 className="text-2xl sm:text-xl font-bold text-center bg-gradient-to-r bg-clip-text text-transparent from-[#f81879ee] to-[#ff4f0a] ">
       Frontend Technology
        </h1>
        <div className="px-6 py-6 flex gap-4 justify-center items-center flex-wrap">
          {FRONTEND_TECHNOLOGY?.map((skill:SkillPropTypes) => {
            return <SkillTag key={skill.id} {...skill} />;
          })}
        </div>

        <h1 className="text-2xl sm:text-xl font-bold text-center bg-gradient-to-r bg-clip-text text-transparent from-[#f81879ee] to-[#ff4f0a] ">
       Backend Technology
        </h1>
        <div className="px-6 py-6 flex gap-4 justify-center items-center flex-wrap">
          {BACKEND_TECHNOLOGY?.map((skill:SkillPropTypes) => {
            return <SkillTag key={skill.id} {...skill} />;
          })}
        </div>

        <h1 className="mt-1 text-2xl sm:text-xl font-bold text-center bg-gradient-to-r bg-clip-text text-transparent from-[#f81879ee] to-[#ff4f0a] ">
          Development & Productivity Tool I Use
        </h1>
        <div className="px-6 py-6 flex gap-4 justify-center items-center flex-wrap">
          {OTHER_SKILLS?.map((skill:SkillPropTypes ) => {
            return <SkillTag key={skill.id} {...skill} />;
          })}
        </div>
      </div>
    </div>
  );
}







function SkillTag({ name, image_url }:{name:string,image_url:string}) {
  const isDarkModeEnabled = useThemeStore((state)=>state.isDarkModeEnabled)
   return (
    <div className={` ${isDarkModeEnabled ? 'dark-box': 'light-box'}  hover:animate-bounce p-2.5 rounded-lg w-20 h-20 flex flex-col justify-center items-center`}>
      <img src={image_url} alt="name" className="w-6" />
      <h1 className=" mt-0.5 text-sm">{name}</h1>
    </div>
  );
}