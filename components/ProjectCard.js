"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import {FiGithub} from 'react-icons/fi';
import {RxExternalLink} from 'react-icons/rx';


export const ProjectCard = ({
  title,
  description,
  image_url,
  github_link,
  live_link,
  tag,
}) => {
  const isDarkMode = useSelector((state) => state.mode);

  return (
    <div
      className={`${
        isDarkMode ? "card-dark-bg shadow-lg " : "card-light-bg shadow-lg "
      } w-80 mt-4 rounded-lg flex flex-col gap-1`}
    >

      <div className="px-4  relative -top-8 ">
        <img src={image_url} alt="project-photo" className="rounded-lg" />
      </div>

        {/* text-container */}
        <div className="text-content px-4 sm:px-2 py-1">
          <h1 className="text-2xl sm:text-xl">{title}</h1>
          <p className=" pt-2">{description}</p>
          <div className="flex gap-4 justify-start items-center py-2">
            <Link
              href={github_link}
              className="bg-gradient-to-r from-blue to-carrot px-4 py-2 rounded-r-full rounded-l-full"
            >
              <span className="flex justify-center gap-2 font-semibold">
                <p> Code</p> <FiGithub className="text-xl" />
              </span>
            </Link>
            <Link
              href={live_link}
              className="bg-gradient-to-r from-blue to-carrot px-4 py-2 rounded-r-full rounded-l-full"
            >
              <span className="flex justify-center gap-2 font-semibold">
                <p>Live</p> <RxExternalLink className="text-xl mt-0.5" />
              </span>
            </Link>
          </div>
        </div>
 
    </div>
  );
};
