"use client"

import { OTHER_SKILLS, SKILLS } from '@/constants';
import {RiCheckboxCircleFill} from 'react-icons/ri'
import {PiArrowBendUpRightLight} from 'react-icons/pi'
import { SkillCard } from './SkillCard';


export  function TechSkill() {
  return (
    <div className=" flex flex-col gap-2 justify-center px-14 sm:px-2">
      <div className=" flex flex-wrap justify-start items-center">
        <div className="flex ">
          <RiCheckboxCircleFill className="text-blue-500 mt-1.5 text-xl" />
          <h1 className="text-2xl"> Tech Stack</h1>
          {/* <img src="/arrow_trail.svg" className="w-24  h-full" alt="arrow" /> */}
          <PiArrowBendUpRightLight className=" text-4xl ml-1" />
        </div>
        <div className="tech-stack flex flex-wrap">
          {SKILLS.map((skill) => {
            return <SkillCard key={skill.id} {...skill} />;
          })}
        </div>
      </div>

      <div className=" flex flex-wrap justify-start items-center">
        <div className="flex ">
          <RiCheckboxCircleFill className="text-blue-500 mt-1.5 text-xl " />
          <h1 className="text-2xl"> Others</h1>
          {/* <img src="/arrow_trail.svg" className="w-24 h-full" alt="arrow" /> */}
          <PiArrowBendUpRightLight className=" text-4xl ml-1" />
        </div>
        <div className="tech-stack flex flex-wrap">
          {OTHER_SKILLS.map((skill) => {
            return <SkillCard key={skill.id} {...skill} />;
          })}
        </div>
      </div>
    </div>
  );
}

