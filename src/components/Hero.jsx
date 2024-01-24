import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GiNotebook } from "react-icons/gi";
import { MYBIO, MYPROFILE } from "../constants/Info";

import { socialLinks } from "../constants/socialLinks";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/context";

export default function Hero() {

const {theme} = useContext(ThemeContext)


  return (
    <div className="flex justify-center  md:h-full">
      <div
        className={`hero  py-4 px-8 sm:py-2 sm:px-2 flex  sm:flex-col-reverse justify-center items-center gap-8 w-full `}
      >
        <div className="content w-1/2 sm:w-full px-8 sm:px-2 sm:py-2 flex flex-col gap-8 ">
          <h1 className="text-5xl sm:text-3xl font-bold ">{MYPROFILE}</h1>
          <p className="tracking-wide text-justify text-xl sm:text-lg sm:text-start">
            {MYBIO}
          </p>
          <div className="social-links flex items-center sm:justify-center gap-3 text-3xl">
            <Link
              to={socialLinks.linkedin}
              target="_blank"
              className={`${
                theme == "dark" ? "bg-[#0077b5]" : "bg-[#93d1f3]"
              }  rounded-full p-2`}
            >
              <FaLinkedin className="hover:scale-110" />
            </Link>
            <Link
              to={socialLinks.github}
              target="_blank"
              className="bg-[#2b3137] text-[#ea3f3f] p-2 rounded-full"
            >
              <FiGithub className="hover:scale-110" />
            </Link>
            <Link
              to={socialLinks.resume}
              target="_blank"
              className={` bg-gradient-to-r ${
                theme == "dark"
                  ? "from-blue-500 to-blue-700"
                  : "from-blue-300 to-emerald-500 "
              } hover:scale-105  rounded-lg px-3 py-1 flex items-center justify-center gap-1`}
            >
              <h1 className="text-xl ">Resume</h1>
              <GiNotebook />
            </Link>
          </div>
        </div>
        <div className=" bg-gradient-to-b rounded-t-full from-blue-700 flex justify-center w-1/2 sm:w-full sm:px-2 sm:py-2">
          <img
            src="/profile.jpeg"
            className="w-60 h-80 rounded-t-full py-6 sm:px-4 "
          />
        </div>
      </div>
    </div>
  );
}
