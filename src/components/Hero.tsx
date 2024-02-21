import { Link } from "react-router-dom";
import { MYBIO, MYNAME, MYPROFILE } from "../constants/INFO";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import { SOCIAL_LINKS } from "../constants/SOCIAL_LINKS";
export default function Hero() {
  return (
    <div className=" flex flex-col gap-4">
      <h1 className=" sm:text-3xl md:text-4xl text-5xl font-bold tracking-tight text-slate-200">
        {MYNAME}
      </h1>
      <h2 className=" text-xl sm:text-lg font-light tracking-tight text-slate-200">
        {MYPROFILE}
      </h2>
      <p className="tracking-tight text-justify">{MYBIO}</p>
{/* resume link */}
<Link to={SOCIAL_LINKS?.resume} target="_blank" className="px-4 py-2 bg-teal-200 hover:bg-teal-900 hover:text-teal-200 text-teal-900 transition-all  rounded-lg w-fit">Resume</Link>
      {/* Navlink */}
      <div className="navbar visible sm:hidden">
      <Navbar />
      </div>
      {/* social links */}
      <SocialLinks />
    </div>
  );
}
