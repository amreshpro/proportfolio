import Link from "next/link"
import TechnologyUsed from "./mini/TechnologyUsed"
import { IoIosLink } from "react-icons/io";
import { FaCode } from "react-icons/fa";
export default function ProjectPage(props) {
 
  return (
    <div
      className={`${props.cardBg} flex sm:flex-col shadow-lg  gap-4 px-4 py-4 rounded-3xl w-fit  text-white `}
    >
      <div
        className={`${props.imageCardBg} img h-fit  w-fit rounded-3xl px-2 py-2`}
      >
        <img className=" rounded-3xl w-96" src={props.image_url} />
      </div>
      <div className="mt-1 content flex flex-col gap-4  px-4 py-2 sm:px-2">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <p>{props.description}</p>

        <div className="technology-used flex flex-wrap gap-1 sm:gap-0 ">
          {props.technologyUsed?.map((technology, index) => {
            return (
              <TechnologyUsed key={`technologyUsed${index}`} {...technology} />
            );
          })}
        </div>
        <div className="link flex gap-2 flex-wrap">
          <Link
            href={props.live_link}
            target="_blank"
            className=" text-lg font-semibold w-fit rounded-r-full rounded-l-full px-2 py-1 border-2 shadow-lg border-[#d2e0fb] hover:bg-[#cfc5f8] hover:text-[#191717] flex items-center  gap-1"
          >
            <IoIosLink /> <p>Go to {props.title}</p>
          </Link>
          <Link
            href={props.github_link}
            target="_blank"
            className=" text-lg font-semibold w-fit rounded-r-full rounded-l-full px-2 py-1 border-2 shadow-lg border-[#d2e0fb] hover:bg-[#cfc5f8] hover:text-[#191717] flex items-center  gap-1"
          >
            <FaCode /> <p>View Code </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
