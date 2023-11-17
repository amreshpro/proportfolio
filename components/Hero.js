"use client";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MYBIO, MYPROFILE, socialLinks } from "@/constants";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex justify-center  md:h-full">
      <div
        className={`hero  py-4 px-8 sm:py-2 sm:px-2 flex  sm:flex-col-reverse justify-center items-center gap-8 w-full `}
      >
        <div className="content w-1/2 sm:w-full px-8 sm:px-2 sm:py-2 flex flex-col gap-8 ">
          <h1 className="text-5xl sm:text-4xl font-bold ">{MYPROFILE}</h1>
          <p className="tracking-wide text-justify sm:text-start">{MYBIO}</p>
          <div className="social-links flex sm:justify-center gap-3 text-3xl">
            <Link href={socialLinks.linkedin}>
              <FaLinkedin className="btnHover" />
            </Link>
            <Link href={socialLinks.github}>
              <FiGithub  className="btnHover"/>
            </Link>
          </div>
        </div>
        <div className=" flex justify-center w-1/2 sm:w-full sm:px-2 sm:py-2">
          <img
            src="/profile.jpeg"
            alt="my-photo"
            className="rounded-full w-64"
          />
        </div>
      </div>
    </div>
  );
}
