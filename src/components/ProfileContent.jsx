import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GiNotebook } from "react-icons/gi";
import { MYNAME, MYPROFILE } from "../constants/INFO";

import { socialLinks } from "../constants/SOCIAL_LINKS";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/context";

export default function ProfileContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="content w-1/2 sm:w-full px-8 sm:px-2 sm:py-2 pt-8 flex flex-col sm:justify-center sm:items-center sm:gap-2 gap-8 ">
      <h1 className="tracking-wide text-justify text-5xl sm:text-3xl font-bold ">
        {MYNAME}
      </h1>
      <h1 className="text-3xl sm:text-xl font-bold ">{MYPROFILE}</h1>
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
  );
}
