"use client"
import { useThemeStore } from "@/store/themeStore";
import React from "react";




export default function Container({children}:{children:React.ReactNode}) {
const isDarkMode = useThemeStore((state)=>state.isDarkModeEnabled)

 return (
    <div className={`${isDarkMode ? 'dark':'light'} w-full h-max flex flex-col items-center gap-4 p-2`}>
        {children}
    </div>
  )
}