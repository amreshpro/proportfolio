import { Link } from "react-router-dom";
import NAV_LINKS from "../constants/NAV_LINKS";
import { useContext } from "react";
import { ThemeContext } from "../context/context";

export default function Sidebar() {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`mobile z-50 ${theme=='dark' ?'bg-slate-900 text-gray-200' :'bg-slate-400 text-slate-900' } h-screen absolute right-0 w-[60vw]`}>
  <ul className="flex flex-col gap-4 justify-center  items-center mt-4">
    {
        NAV_LINKS?.map((link)=>{
            const {id,path,title} = link
            return  <li key={id}>
            <Link to={path}>{title}</Link>
        </li>
        })
       
    }
  </ul>
    </div>
  );
}