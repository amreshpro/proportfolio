import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../../constant";

const PROFILE = "Javascript Dev | React Developer | Frontend Dev";
const BIO = " I am a passionate and innovative frontend developer with a focus on creating engaging and interactive web experiences. I specialize in using cutting-edge technologies and frameworks to bring ideas to life.";

export default function HeroContent() {
  return (
    <div className="about flex flex-col gap-4 text-3xl ">
      <span className=" text-5xl md:text-3xl sm:text-2xl">
        <strong> Hii, I'm</strong>
        <strong className="mx-2 font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
          Amresh Maurya
        </strong>
      </span>

      <span className="flex gap-2 text-3xl md:text-2xl sm:text-xl">
        <h1 className="font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
          {PROFILE}
        </h1>
      </span>

      <p className="intro text-xl sm:text-lg">{BIO}</p>
      <Link to={SOCIAL_LINKS?.resume} className="blue-btn w-fit text-2xl sm:text-xl font-light" >Resume</Link>
    </div>
  );
}
