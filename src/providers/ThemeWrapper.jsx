import { useContext } from "react"
import { ThemeContext } from "../context/context"






// eslint-disable-next-line react/prop-types
export default function ThemeWrapper({children}) {
   
   
    const {theme}= useContext(ThemeContext)
    console.log(theme)
  return (
    <div className={`${theme=='dark'? 'bg-[#10141b] text-gray-300':'bg-blue-100 text-blue-900'}`}>{children}</div>
  )
}