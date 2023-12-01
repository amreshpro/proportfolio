"use client";

import { socialLinks } from "@/constants";
import { useAppSelector } from "@/types/redux.types";
import Link from "next/link";
import { GiNotebook } from "react-icons/gi";

export function Hero() {
  const isDarkMode = useAppSelector((state) => state.mode);

  return (
    <div
      className={`${
        isDarkMode ? "dark " : "hero-light"
      } w-full h-[92vh] sm:h-auto flex sm:flex-col-reverse justify-center   `}
    >
      <div className="content text-center mb-36 sm:mb-1 pb-2  h-screen flex flex-col justify-center items-center gap-2   sm:h-full">
        <h1 className="text-8xl sm:text-4xl md:text-6xl font-bold">
          Amresh Maurya
        </h1>
        <p className="designation font-bold sm:text-xl text-2xl">
          Web Developer | Reactjs Developer | MERN Stack Dev
        </p>
        <Link
          href={socialLinks.resume}
          className="flex text-xl font-bold gap-0.5 w-fit px-4 py-2 bg-red-500 rounded-r-full rounded-l-full"
        >
         
          Resume <GiNotebook className="text-3xl" />
        </Link>
      </div>
      <div className="img h-full flex sm:w-full justify-center  ">
        <img
          className="w-full  "
          src="/profile2.png"
          alt="profile-photo"
        />
      </div>
    </div>
  );
}
