import Image from "next/image";

export default function SkillTag({
  name,
  image_url,
}: {
  name: string;
  image_url: string;
}) {
  return (
    <div className=" inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-0.5">
      <div className="flex gap-2 p-2  bg-ternary relative group transition duration-200 text-white hover:bg-transparent rounded-full">
     
          <Image
            unoptimized={true}
            width={6}
            height={6}
            src={image_url}
            alt="name"
            className="w-6"
          />
          <h1 className=" mt-0.5 text-sm text-center">{name}</h1>
        </div>
      </div>
   
  );
}
