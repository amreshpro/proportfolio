"use client";

import { StarIcon } from "@radix-ui/react-icons";

export default function Orbit() {
  return (
    <div className="absolute flex flex-col justify-center items-center">
      <div className="hero-ring -z-10  size-[720px]"></div>
      <div className="hero-ring -z-10  size-[620px]"></div>
      <div className="hero-ring -z-10  size-[520px]"></div>
      <div className="hero-ring -z-10  size-[420px]"></div>
      <div className="hero-ring -z-10  size-[320px]"></div>
      <div className="hero-ring -z-10  size-[220px]"></div>
      <div className="hero-ring -z-10  size-[120px]"></div>
      <div className="absolute star  p-4 w-[750px] animate-spin [animation-duration:30s]">
        <div className="star-inner  p-8  animate-spin [animation-duration:25s] w-[250px] ">
          <StarIcon className="text-emerald-300/80 size-8 animate-spin [animation-duration:60s]" />
        </div>
        <div className="star-inner  p-8  animate-spin [animation-duration:50s] w-[550px] ">
          <StarIcon className="text-emerald-300/80 size-8 animate-spin [animation-duration:60s]" />
        </div>
        <div className="star-inner  p-8  animate-spin [animation-duration:100s] w-[350px] ">
          <StarIcon className="text-emerald-300/80 size-8 animate-spin [animation-duration:60s]" />
        </div>
        <div className="star-inner  p-8 animate-spin [animation-duration:150s] w-[150px] ">
          <StarIcon className="text-emerald-300/80 size-8 animate-spin [animation-duration:60s]" />
        </div>

      </div>
    </div>
  );
}
