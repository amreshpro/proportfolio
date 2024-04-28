
import { Link } from "react-router-dom";


type ProjectPropType = {
  title:string;
  description:string;
  image_url:string;
  github_link:string;
  live_link:string;
};

const ProjectCard = (props:ProjectPropType) => {
 

  const { title, image_url, github_link, live_link } = props;
  return (
<div className=" secondary rounded-lg w-80 h-96">
<img src={image_url} alt={title} className="w-full h-[60%] p-2 " />
<div className="content w-full p-2">
<h1>{title}</h1>
<div className="btns flex gap-2">
  <Link className="blue-btn " to={github_link }>Code</Link>
  <Link className="blue-btn" to={live_link }>Live</Link>
</div>
</div>
</div>
  );
};


export default ProjectCard