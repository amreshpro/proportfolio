import { FiGithub } from "react-icons/fi";
import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useThemeContext } from "../theme/ThemeProvider";

type ProjectPropType = {
  title:string;
  description:string;
  image_url:string;
  github_link:string;
  live_link:string;
};

const ProjectCard = (props:ProjectPropType) => {
  const { theme } = useThemeContext();

  const { title, description, image_url, github_link, live_link } = props;
  return (
    <div
      className={` ${
        theme == "dark"
          ? "bg-slate-800"
          : "bg-red-100  "
      }
       p-2  rounded-lg flex flex-col justify-evenly items-center sm:flex-col-reverse `}
    >
        {/* project image */}
      <div className="image-container w-full  p-3 ">
        <img src={image_url} alt="project-photo" className=" w-96 h-48   " />
      </div>

      {/* project content */}
      <div className="content   px-2 py-2 sm:text-sm">
        <h1 className={`${theme=='dark' ? 'text-slate-200' :' text-[#f22256]'} font-bold text-xl `}>
          {title}
        </h1>
        <h1 className="text-md sm:text-sm ">{description}</h1>
        <div className="btn flex  gap-2 py-1">
          <Link
            to={live_link}
            className={`flex items-center gap-1 text-xl transition-all ${
              theme == "dark"
                ? " hover:bg-slate-900"
                : "hover:bg-[#f22256] hover:text-red-50  "
            }  px-2 py-0.5 rounded-lg`}
          >
            Live
            <RxExternalLink />
          </Link>
          <Link
            to={github_link}
            className={`flex items-center gap-1 text-xl transition-all ${
              theme == "dark"
                ? "hover:bg-slate-900"
                : "hover:bg-[#f22256] hover:text-red-50"
            } px-2 py-0.5 rounded-lg`}
          >
            Code
            <FiGithub />
          </Link>
        </div>
      </div>

    </div>
  );
};


export default ProjectCard