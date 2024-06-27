"use client"
import React, { useEffect } from "react";

import { useThemeStore } from "@/store/themeStore";




export default function Container({children}:{children:React.ReactNode}) {
const {isDarkModeEnabled,updateThemeMode}= useThemeStore((state)=>state)
useEffect(()=>{
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
updateThemeMode(true)
    }
},[updateThemeMode])
 return (
    <div className={`${isDarkModeEnabled ? 'dark':'light'} w-full h-max flex flex-col items-center gap-4 sm:p-2`}>
        {children}
    </div>
  )
}