export default function SkillTag({name,image_url}) {
  return (
    <div className=" m-2 px-4 py-1 rounded-r-full rounded-l-full flex justify-center items-center gap-2 bg-[#d2e0fb] text-black">
      <img src={image_url} alt="name" className="w-6 " />
      <h1 className="font-mono mt-1">{name}</h1>
    </div>
  )
}
