"use client"
import Link from "next/link";

import { useThemeStore } from "@/store/themeStore";

import SOCIAL_MEDIA_LINKS from "@/data/SOCIAL_MEDIA_LINKS";



export default function Hero() {
const isDarkModeEnabled =  useThemeStore((state)=>state.isDarkModeEnabled)

  return (
    <>
    <div className={` ${isDarkModeEnabled ?  'bg-hero object-cover bg-center' : 'bg-hero-light object-cover bg-center'}   min-h-screen flex justify-between gap-6 sm:flex-wrap-reverse items-center p-4 w-screen sm:mt-4 mt-0 `}>
     
<HeroContent/>
<HeroImage/>
    
    </div>
    </>
  );
}




const PROFILE = "Web Developer";
const BIO = " I am a passionate and innovative web developer with a focus on creating engaging and interactive web experiences. I specialize in using cutting-edge technologies and frameworks to bring ideas to life.";

const HeroContent=() =>{
  const isDarkModeEnabled = useThemeStore((state)=>state.isDarkModeEnabled)
  return (
    <div className="about flex flex-col gap-4 text-3xl ">
      <span className=" text-5xl md:text-3xl sm:text-2xl">
        <strong> Hii, I&apos;m</strong>
        <strong className="mx-2 font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
          Amresh Maurya
        </strong>
      </span>

      <span className="flex gap-2 text-3xl md:text-2xl sm:text-xl">
        <h1 className="font-bold bg-gradient-to-r from-green-400 to-yellow-500 text-transparent bg-clip-text">
          {PROFILE}
        </h1>
      </span>

      <p className="intro text-xl sm:text-lg">{BIO}</p>
      <Link href={`${SOCIAL_MEDIA_LINKS?.resume}`} target="_blank" className=" transition-all hover:scale-105 rounded-md px-0.5 py-0.5 w-fit text-xl sm:text-xl font-light" ><p className={`${isDarkModeEnabled? "shadow-md  bg-slate-700 border-r-4 border-b-4 border-slate-800 ":" shadow-md text-blue-500 bg-gray-100 border-r-4 border-b-4 border-gray-200 "} rounded-md px-1 py-1 `}>Resume</p></Link>
    </div>
  );
}



const HeroImage=()=> {
  return (
    <div className=" w-full flex justify-center p-1 ">
    {/* image div */}
    <div className="blob cursor-grabbing transition-all hover:scale-125 ease-in-out px-4 py-4 sm:px-2 border-2 border-ternary box"></div>
  </div>
  )
}