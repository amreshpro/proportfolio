"use client";

import { socialLinks } from "@/constants";
import { useAppSelector } from "@/types/redux.types";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export function Footer() {
  const isDarkMode = useAppSelector((state) => state.mode);

  return (
    <footer
      className={`mt-6 mb-4 ${
        isDarkMode ? " footer-dark " : " footer-light "
      } px-16  py-4 sm:px-2 sm:py-2  flex sm:flex-col-reverse justify-between items-center gap-3  rounded-l-full rounded-r-full sm:rounded-lg mx-6 sm:mx-2 `}
    >
      <div className="content">
        <p>© Amresh Maurya | 2023 | All rights reserved</p>
      </div>
      <div className="social-links flex gap-4">
        <Link
          href={socialLinks.github}
          target="_blank"
          className="rounded-full p-3 bg-gray-300 text-xl hover:bg-gray-500"
        >
          <BsGithub className="text-gray-900 text-xl " />
        </Link>
        <Link
          href={socialLinks.linkedin}
          target="_blank"
          className="rounded-full p-3 bg-gray-300 text-xl hover:bg-blue-800" 
        >
          <BsLinkedin className="text-gray-900 text-xl" />
        </Link>
        <Link
          href={socialLinks.instagram}
          target="_blank"
          className="rounded-full p-3 bg-gray-300 hover:bg-red-400 text-xl"
        >
          <BsInstagram className="text-gray-900 text-xl" />
        </Link>
      </div>
    </footer>
  );
}
