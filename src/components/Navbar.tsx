import {  NavLink } from "react-router-dom";
import { NAV_LINKS } from "../constant";

export default function Navbar() {
  return (
    <nav className="secondary  px-4 py-4 flex justify-between items-center ">
      <div className="logo flex gap-2">
        {/* <h1>Amresh</h1> */}
        <p className="bg-red-400 rounded-full p-2 sm:p-1"></p>
        <p className="bg-purple-400 rounded-full p-2 sm:p-1"></p>
        <p className="bg-orange-400 rounded-full p-2 sm:p-1 "></p>

    
      </div>
      <ul className="flex gap-4 sm:gap-1 items-center sm:text-sm">
      {
        NAV_LINKS.map((nav)=>{
          return   <li key={nav.id}><NavLink  className={({ isActive }) =>
             isActive ? "active " : "px-[5px] py-[8px]"
          } to={nav.path} >{nav.title}</NavLink></li>
        })
      }
     
      </ul>
    </nav>
  )
}