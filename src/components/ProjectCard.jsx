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
          ? "bg-[#013050] text-gray-100"
          : "bg-[#c7dcfc] text-blue-900"
      }
       w-72   mt-4 rounded-lg flex flex-col shadow-lg  `}
    >
      <div className="image-container ">
        <img src={image_url} alt="" className="rounded-t-lg h-44 w-full" />
      </div>
      <div className="content px-2 py-2 sm:text-sm">
      <h1 className="font-bold text-xl">{title}</h1>
        <h1 className="text-md sm:text-sm text-justify">{description}</h1>
        <div className="btn flex  gap-4 py-1">
          <Link to={live_link} className="flex items-center gap-1 text-xl">
            Live
            <RxExternalLink />
          </Link>
          <Link to={github_link} className="flex items-center gap-1 text-xl">
            Code
            <FiGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};
