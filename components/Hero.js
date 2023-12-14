"use client";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GiNotebook } from "react-icons/gi";
import { MYBIO, MYPROFILE, socialLinks } from "@/constants";
import Link from "next/link";


export default function Hero() {
  return (
    <div className="flex justify-center  md:h-full">
      <div
        className={`hero  py-4 px-8 sm:py-2 sm:px-2 flex  sm:flex-col-reverse justify-center items-center gap-8 w-full `}
      >
        <div className="content w-1/2 sm:w-full px-8 sm:px-2 sm:py-2 flex flex-col gap-8 ">
          <h1 className="text-5xl sm:text-3xl font-bold ">{MYPROFILE}</h1>
          <p className="tracking-wide text-justify text-xl sm:text-lg sm:text-start">{MYBIO}</p>
          <div className="social-links flex items-center sm:justify-center gap-3 text-3xl">
            <Link href={socialLinks.linkedin} target="_blank" className="bg-[#0077b5] rounded-full p-2">
              <FaLinkedin className="btnHover" />
            </Link>
            <Link href={socialLinks.github} target="_blank" className="bg-[#2b3137] text-[#ea3f3f] p-2 rounded-full">
              <FiGithub className="btnHover" />
            </Link>
            <Link href={socialLinks.resume} target="_blank" className=" bg-gradient-to-r from-orange-500 to-pink-400  rounded-lg px-3 py-1 flex items-center justify-center gap-1">
              <h1 className="text-xl">Resume</h1><GiNotebook />
            </Link>
          </div>
        </div>
        <div className=" flex justify-center w-1/2 sm:w-full sm:px-2 sm:py-2">
        
            <div className="blob w-64 rounded-full"></div>
       
 
        </div>
      </div>
    </div>
  );
}
