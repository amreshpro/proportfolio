import Image from 'next/image';

export default function SkillTag({ name, image_url }:{name:string,image_url:string}) {
    return (
     <div className={`bg-secondary hover:bg-ternary border  hover:animate-bounce p-2.5 rounded-full w-20 h-20 flex flex-col justify-center items-center`}>
       <Image unoptimized={true} width={6} height={6} src={image_url} alt="name" className="w-6" />
       <h1 className=" mt-0.5 text-sm text-center">{name}</h1>
     </div>
   );
 }