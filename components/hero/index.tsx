import { buttonVariants } from "@/components/ui/button";
import { BIO } from "@/data/ABOUT";
import SOCIAL_MEDIA_LINKS from "@/data/SOCIAL_MEDIA_LINKS";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-32">
              <div className="relative z-10">
          <div className="container py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="">Hii, I am </p>
              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Amresh Maurya
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
                <p className="text-xl text-muted-foreground">
               {BIO}
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-8 gap-3 flex justify-center">
                <Link href={SOCIAL_MEDIA_LINKS.github}  className={buttonVariants({variant:"default"}) }> <p className="text-xl px-4">Github </p> <FaGithub className="text-2xl" /></Link>
                <Link href={SOCIAL_MEDIA_LINKS.linkedin}  className={buttonVariants({variant:"default"})}> <p className="text-xl px-4">Linkedin</p> <FaLinkedin className="text-2xl" /></Link>
              
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
