"use client"

import { socialLinks } from "@/constants"
import Link from "next/link"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"


export const Footer = () => {
  return (
    <footer className="flex flex-col items-center ">
      <div className="container px-6 pt-6">
        <div className="mb-6 flex gap-4 justify-center">
          <Link
            href={socialLinks.linkedin}
            className="rounded-full bg-lightBlue "
          >
            <BsLinkedin className="rounded-full text-4xl" />
          </Link>

          <Link
            href={socialLinks.github}
            className="rounded-full  "
          >
            <BsGithub className="rounded-full text-4xl" />
          </Link>

          <Link
            href={socialLinks.instagram}
            className="rounded-full bg-carrot "
          >
            <BsInstagram className="rounded-full text-4xl " />
          </Link>
        </div>
      </div>

      <div className="w-full p-4 text-center">
        © 2023 Copyright:
        <Link className="text-whitehite" href={socialLinks.portfolio}>
          amreshpro
        </Link>
      </div>
    </footer>
  );
}
