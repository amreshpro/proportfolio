import { buttonVariants } from "@/components/ui/button";
import { BIO } from "@/data/ABOUT";
import SOCIAL_MEDIA_LINKS from "@/data/SOCIAL_MEDIA_LINKS";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Hero() {
  return (
    <div className=" max-w-2xl min-h-[95vh] sm:h-auto  flex flex-col  gap-4 items-center justify-center text-center mx-auto">
      <h1 className="text-2xl">Hii, I am </h1>
      {/* Title */}

      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-orange-500  scroll-m-20 sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-5xl">
        Amresh Maurya
      </h1>

      {/* End Title */}
      <p className="text-xl text-muted-foreground">{BIO}</p>

      {/* Buttons */}
      <div className="mt-8 gap-3 flex sm:flex-wrap justify-center">
        <Link
          href={SOCIAL_MEDIA_LINKS.github}
          className={twMerge( buttonVariants({ variant: "default" }),"bg-gray-800/90 rounded-full")}
        >
          <p className="text-xl px-4">Github</p>
          <FaGithub className="text-2xl" />

        </Link>
        <Link
          href={SOCIAL_MEDIA_LINKS.linkedin}
          className={twMerge( buttonVariants({ variant: "default" }),"bg-gray-800/90 rounded-full")}
        >
          <p className="text-xl px-4">Linkedin</p>
          <FaLinkedin className="text-2xl" />
        </Link>
      </div>
      {/* End Buttons */}
    </div>
  );
}
