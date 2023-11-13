"use client"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const LoadingSpin = () => {
  return (
    <div className="w-[100vw] h-[100vh] px-4 py-4 flex justify-center items-center animate-spin">
      <AiOutlineLoading3Quarters className="text-4xl text-violet-500" />
    </div>
  );
};

