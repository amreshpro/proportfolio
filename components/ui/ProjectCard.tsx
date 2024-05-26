/* eslint-disable @next/next/no-img-element */

import { PROJECT_TYPES } from "@/data/types";
import { useThemeStore } from "@/store/themeStore";
import Link from "next/link";
import LinkButton from "./LinkButton";



export default function ProjectCard(props: PROJECT_TYPES) {
    const { title, image_url, github_link, live_link,description } = props;
    const isDarkModeEnabled = useThemeStore((state)=>state.isDarkModeEnabled)
    return (
      <div className={` ${isDarkModeEnabled ? 'dark-box':'light-box'} border border-gray-300 rounded-lg  transition-all ease-in-out hover:transform  hover:scale-110 w-80 h-96`}>
     <div className="img-box p-1">
     <Link  href={live_link??'#'} target="_blank" className="rounded-lg bg-red-300 w-full  ">
          <img src={image_url} alt={title} className="bg-red-500" />
        </Link>
     </div>
        <div className="content w-full p-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p>{description}</p>
          <div className="btns py-2  flex gap-4">
            <LinkButton title={"Code"} link={github_link}  />
            
            <LinkButton title={"Check Live Site"} link={live_link??'#'}  />
          </div>
        </div>
      </div>
    );
  };

 function ProjectCard2(props: PROJECT_TYPES) {
    const { title, image_url, github_link, live_link,description } = props;
    const isDarkModeEnabled = useThemeStore((state)=>state.isDarkModeEnabled)
    return (
      <div className={` ${isDarkModeEnabled ? 'dark-box':'light-box'} transition-all ease-in-out hover:transform  hover:scale-110 rounded-lg w-80 h-96`}>
        <Link  href={live_link??'#'} target="_blank">
          <img src={image_url} alt={title} className="w-full  p-2 " />
        </Link>
        <div className="content w-full p-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p>{description}</p>
          <div className="btns py-2  flex gap-4">
            <LinkButton title={"Code"} link={github_link}  />
            
            <LinkButton title={"Live"} link={live_link??'#'}  />
          </div>
        </div>
      </div>
    );
  };