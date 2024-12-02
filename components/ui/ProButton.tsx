import React from "react";

export default function ProButton({children}:{children:React.ReactNode}) {
  return (
    <button className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
      <div className="px-8 py-2  bg-ternary rounded-[6px]  relative group transition duration-200  hover:bg-transparent rounded-full">
       {children}
      </div>
    </button>
  );
}
