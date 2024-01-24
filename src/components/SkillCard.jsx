import { useContext } from "react";
import { ThemeContext } from "../context/context";

/* eslint-disable react/prop-types */
export default function SkillTag({ name, image_url }) {
    const {theme} = useContext(ThemeContext)
  return (
    <div
      className={`  hover:animate-bounce m-2 px-4 py-1 rounded-r-full rounded-l-full flex justify-center items-center gap-2 ${
        theme == "dark" ? "bg-[#060716] text-blue-100  " : " bg-blue-200 text-blue-950 "
      } `}
    >
      <img src={image_url} alt="name" className="w-6" />
      <h1 className=" mt-0.5">{name}</h1>
    </div>
  );
}
