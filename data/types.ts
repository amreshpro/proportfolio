
export type PROJECT_TYPES = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  github_link: string;
  live_link?: string;
  tag?: { id: string; name: string; image_url: string }[];
};

export type SkillPropTypes = {
  id:string,
  name:string,
  image_url:string
};
