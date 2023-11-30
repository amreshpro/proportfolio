"use client";

export const SkillCard = ({
  image_url,
  name,
}: {
  image_url: string;
  name: string;
}) => {
  return (
    <div>
      <img
        src={image_url}
        alt={name}
        className="w-14 h-14 rounded-full    hover:animate-bounce p-1 px-1 "
      />
    </div>
  );
};
