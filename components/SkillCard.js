"use client"

import { useSelector } from "react-redux";





export const SkillCard = ({ icon, name }) => {
    const isDarkMode = useSelector((state)=>state.mode)
  return (
    <div
      // className={`skills rounded-lg border-2  border-b-4 border-r-4 bg-gradient-to-r ${
      //   isDarkMode
      //     ? " skill__gradient  border-pink shadow-lg shadow-pink "
      //     : " bg-white border-lightBlue shadow-lg shadow-lightBlue "
      // } p-1 flex flex-col justify-center items-center gap-1 w-32 `}
    >
      <img src={icon} alt={name} className="w-14 h-14   hover:animate-ping p-1 " />
      {/* <h1
        className={`  ${
          isDarkMode ? "skill__gradient" : " text-lightBlue"
        } font-poppins text-xl pb-1 `}
      >
        {name}
      </h1> */}
    </div>
  );
};

