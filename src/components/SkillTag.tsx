import { useThemeContext } from "../theme/ThemeProvider";

type SkillTagProps ={
name:string,
image_url:string
}

export default function SkillTag({ name, image_url }:SkillTagProps) {
    const {theme} = useThemeContext()
  return (
    <div
      className={`  hover:animate-bounce m-2 px-4 py-1 rounded-r-full rounded-l-full flex justify-center items-center gap-2 ${
        theme == "dark" ? "bg-[#3d5a59] text-gray-100  " : " bg-blue-200 text-blue-950 "
      } `}
    >
      <img src={image_url} alt="name" className="w-6" />
      <h1 className=" mt-0.5">{name}</h1>
    </div>
  );
}