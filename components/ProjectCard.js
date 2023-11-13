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
      } mt-4 rounded-lg`}
    >
      <div className="img-bg-container rounded-lg w-96 sm:w-72   flex flex-col justify-center items-center  px-1 overflow-visible">
        {/* img container */}
        <div className="img px-4">
          {/* // eslint-disable-next-line @next/next/no-img-element, @next/next/no-img-element, @next/next/no-img-element */}
          <img
            src={image_url}
            alt={title}
            className="rounded-lg relative -top-6 w-80  "
          />
        </div>

        {/* text-container */}
        <div className="text-content px-4 sm:px-2 py-1">
          <h1 className="text-2xl sm:text-xl gradient__text2">{title}</h1>
          <p className=" pt-2">{description}</p>
          <div className="flex gap-4 justify-start items-center py-2">
            <Link
              href={github_link}
              className="bg-gradient-to-r from-blue to-carrot px-4 py-2 rounded-r-full rounded-l-full"
            >
              <span className="flex justify-center gap-2">
                <p> Code</p> <FiGithub className="text-xl" />
              </span>
            </Link>
            <Link
              href={live_link}
              className="bg-gradient-to-r from-blue to-carrot px-4 py-2 rounded-r-full rounded-l-full"
            >
              <span className="flex justify-center gap-2">
                <p>Live</p> <RxExternalLink className="text-xl mt-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
