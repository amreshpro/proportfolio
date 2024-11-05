import { BIO } from "@/data/ABOUT";
import SOCIAL_MEDIA_LINKS from "@/data/SOCIAL_MEDIA_LINKS";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="max-w-2xl min-h-[98vh] sm:h-auto  flex flex-col  gap-4 items-center justify-center text-center p-2">
        <h1 className="text-2xl">Hii, I am </h1>
        {/* Title */}

        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-orange-500  scroll-m-20 sm:text-5xl md:text-6xl text-7xl font-extrabold tracking-tight">
          Amresh Maurya
        </h1>

        {/* End Title */}
        <p className="text-xl text-muted-foreground">{BIO}</p>

        {/* Buttons */}
        <div className="mt-8 gap-3 flex sm:flex-wrap justify-center items-center">
          <Link
            href={SOCIAL_MEDIA_LINKS.github}
            className={twMerge(
              "bg-secondary rounded-full p-2 flex hover:bg-slate-900/50 "
            )}
          >
            <p className="text-xl px-4">Github</p>
            <FaGithub className="text-2xl" />
          </Link>
          <Link
            href={SOCIAL_MEDIA_LINKS.linkedin}
            className={twMerge(
              "bg-secondary rounded-full  p-2 flex hover:bg-slate-900/50"
            
            )}
          >
            <p className="text-xl px-4">Linkedin</p>
            <FaLinkedin className="text-2xl" />
          </Link>
        </div>
      </div>
      {/* End Buttons */}
    </div>
  );
}
