"use client";

import { socialLinks } from "@/constants";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="mt-4 flex flex-col items-center ">
      <h1 className="text-3xl sm:text-2xl font-bold text-center gradient-text ">Connect With Me</h1>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <Link
            href={socialLinks.linkedin}
            target="_blank"
            className="px-4 py-2 rounded-l-full rounded-r-full bg-[#0077b5] text-white text-lg flex gap-2 items-center"
          >
            <p className="text-lg font-bold">Linkedin</p>
            <BsLinkedin className="rounded-lg text-3xl" />
          </Link>

          <Link
            href={socialLinks.instagram}
            target="_blank"
            className="px-4 py-2 rounded-l-full rounded-r-full bg-[#e4405f] text-white text-lg flex gap-2 items-center"
          >
            <p className="text-lg font-bold">Instagram</p>
            <BsInstagram className="rounded-lg text-3xl" />
          </Link>
          <Link
            href={socialLinks.github}
            target="_blank"
            className="px-4 py-2 rounded-l-full rounded-r-full bg-[#2b3137] text-white text-lg flex gap-2 items-center"
          >
            <p className="text-lg font-bold">Github</p>
            <BsGithub className="rounded-lg text-3xl" />
          </Link>
        </div>
     

      <div className="w-full p-4 text-center">
        © 2023 Copyright:
        <Link className="link-hover font-semibold" href={socialLinks.portfolio}>
          amreshpro
        </Link>
      </div>
    </footer>
  );
};
