import {  NavLink } from "react-router-dom";
import NAV_LINKS from "../constants/NAV_LINKS";

export default function Navbar() {
  return (
    <nav className="flex flex-col gap-2">
      {
        NAV_LINKS?.map((link)=>{
            const {path,title,id} = link
            return <NavLink to={path} key={id} className={({ isActive }) =>{
                console.log("isactive:"+isActive)
            return isActive ? "flex items-center gap-0.5 text-lg text-slate-200" : "flex gap-0.5 items-center"}}><hr className={`h-2 w-10 `} />{title}</NavLink>
        })
      }  
    </nav>
  )
}