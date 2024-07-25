import { IoMdSunny } from "react-icons/io"
import { IoMoonSharp } from "react-icons/io5"

import { useThemeStore } from "@/store/themeStore"


export default function DarkModeButton() {
const {isDarkModeEnabled,toggleDarkMode} = useThemeStore((state)=>state)

  return (
    <button onClick={()=>toggleDarkMode()} className="w-fit fixed bottom-8 right-8  p-1 rounded-full border-4 border-pink-500 text-2xl flex justify-start items-center text-center z-50 "><p className="animate-bounce text-3xl">{isDarkModeEnabled ? <IoMdSunny/>:<IoMoonSharp/> }</p></button>

  )
}