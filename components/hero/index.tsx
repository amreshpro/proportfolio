import { BIO } from "@/data/ABOUT";
import SOCIAL_MEDIA_LINKS from "@/data/SOCIAL_MEDIA_LINKS";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import ProButton from "../ui/ProButton";

export default function Hero() {
  return (
    <div className="  w-full flex md:flex-wrap-reverse justify-center  gap-16 sm:gap-2 items-center py-4">
      <div className="image p-2 rounded-full border-2 border-slate-400">
        <Image
          src={"/profile/amresh.png"}
          alt={"coding"}
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div className="max-w-2xl min-h-[98vh] sm:h-auto  flex flex-col  gap-4 items-center justify-center text-center p-2">
        <h1 className="text-2xl font-bold">Hii, I am </h1>
        {/* Title */}

        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-100  to-sky-600  scroll-m-20 sm:text-5xl md:text-6xl text-8xl font-extrabold tracking-tight">
          Amresh Maurya
        </h1>

        {/* End Title */}
        <p className="text-xl text-muted-foreground">{BIO}</p>

        {/* Buttons */}
        <div className="mt-8 gap-3 flex sm:flex-wrap justify-center items-center">
          <Button>
            <Link
              href={SOCIAL_MEDIA_LINKS.github}
              className="flex justify-center items-center"
            >
              <p className="text-xl px-4">Github</p>
              <FaGithub className="text-2xl" />
            </Link>
          </Button>
          <Button>
            <Link
              href={SOCIAL_MEDIA_LINKS.linkedin}
              className="flex justify-center items-center"
            >
              <p className="text-xl px-4">Linkedin</p>
              <FaLinkedin className="text-2xl" />
            </Link>
          </Button>
        </div>

        <ProButton>
          <Link href={SOCIAL_MEDIA_LINKS.resume}>Resume</Link>
        </ProButton>

        {/* End Buttons */}
      </div>
    </div>
  );
}
