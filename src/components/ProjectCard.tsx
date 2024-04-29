import { Link } from "react-router-dom";

type ProjectPropType = {
  title: string;
  description: string;
  image_url: string;
  github_link: string;
  live_link: string;
};

const ProjectCard = (props: ProjectPropType) => {
  const { title, image_url, github_link, live_link,description } = props;
  return (
    <div className=" secondary rounded-lg w-80 h-96">
      <Link  to={live_link} target="_blank">
        <img src={image_url} alt={title} className="w-full  p-2 " />
      </Link>
      <div className="content w-full p-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
        <div className="btns py-2  flex gap-4">
          <Link className="ternary-btn " to={github_link} target="_blank">
            Code
          </Link>
          <Link className="ternary-btn" to={live_link} target="_blank">
            Live
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
