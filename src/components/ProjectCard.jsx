/* eslint-disable react/prop-types */

import { useContext } from "react";
import { FiGithub } from "react-icons/fi";
import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/context";

export const ProjectCard = (props) => {

const {theme } = useContext(ThemeContext)

  const { title, description, image_url, github_link, live_link } = props;
  return (
    <div
      className={` ${
        theme == "dark"
          ? "bg-[#0e3f6d] text-white shadow-sm  shadow-pink-500"
          : "bg-[#faf0fc] text-blue-900 shadow-sm  shadow-blue-500"
      }
       w-72   mt-4 rounded-lg flex flex-col `}
    >
      <div className="image-container ">
        <img src={image_url} alt="" className="rounded-t-lg h-44 w-full" />
      </div>
      <div className="content px-2 py-2 sm:text-sm">
        <h1 className="font-bold text-xl underline underline-offset-4 decoration-4 decoration-pink-500">{title}</h1>
        <h1 className="text-md sm:text-sm text-justify">{description}</h1>
        <div className="btn flex  gap-4 py-1">
          <Link
            to={live_link}
            className={`flex items-center gap-1 text-xl ${
              theme == "dark"
                ? "bg-blue-800 hover:bg-blue-900 border-b-4 border-r-2 border-pink-200"
                : "bg-blue-300 hover:bg-blue-400  border-b-4 border-r-2 border-blue-200"
            } shadow-sm shadow-blue-500 px-2 py-0.5 rounded-full`}
          >
            Live
            <RxExternalLink />
          </Link>
          <Link
            to={github_link}
            className={`flex items-center gap-1 text-xl ${
              theme == "dark"
                ? "bg-blue-800 hover:bg-blue-900 border-b-4 border-r-2 border-pink-200"
                : "bg-blue-300 hover:bg-blue-400   border-b-4 border-r-2 border-blue-200"
            } shadow-sm shadow-blue-500 px-2 py-0.5 rounded-full`}
          >
            Code
            <FiGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};
