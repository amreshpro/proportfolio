import { useContext } from "react"
import { ThemeContext } from "../context/context"






// eslint-disable-next-line react/prop-types
export default function ThemeWrapper({children}) {
   
   
    const {theme}= useContext(ThemeContext)
    console.log(theme)
  return (
    <div className={`${theme=='dark'? 'bg-slate-950 text-white':'bg-pink-300 text-pink-800'}`}>{children}</div>
  )
}