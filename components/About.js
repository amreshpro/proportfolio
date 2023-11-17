"use client"

import {BsCheckCircle} from 'react-icons/bs'
import { abouts,intro3 } from "@/constants/about";
import { useSelector } from 'react-redux';


export const About = () => {

const isDarkMode = useSelector((state)=>state.mode)

  return (
    <div className="w-full  md:h-full max-h-max py-1">
      {/* title */}
      <h1 id='about' className="text-5xl sm:text-3xl text-center text-lightBlue">About</h1>

      {/* main about container */}
      <div className="about-container sm:mt-4 mt-8 w-full h-max flex flex-col-reverse  items-center  justify-center  gap-8 sm:gap-4 px-4 sm:px-2 ">
        {/* text-content */}
        <div className="content flex flex-col text-2xl md:text-xl sm:text-lg gap-6">
          <p className="text-justify text-slate">{intro3}</p>

          <p className="text-justify text-slate">
            🌟 Here&quot;s what you can expect from me:
          </p>

          <ul className="flex gap-8 flex-col text-justify ">
            {abouts.map((about) => {
              return (
                <li key={about.id}>
                  <div className="about flex gap-2">
                    <h1 className="mt-[2px]">
                      <BsCheckCircle className="text-lightBlue  text-3xl sm:text-xl" />
                    </h1>
                    <p className="text-slate">
                      <strong>{about.title}:</strong> {about.des}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

     
    
      </div>
    </div>
  );
};
