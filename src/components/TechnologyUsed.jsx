/* eslint-disable react/prop-types */
export default function TechnologyUsed({ image_url, name }) {
  return (
    <div className="w-fit  sm:text-sm m-2 sm:px-1 px-2 py-1 rounded-r-full rounded-l-full flex justify-center items-center gap-1 bg-[#d2e0fb] text-black">
      <img src={image_url} alt="name" className="w-6 h-6 rounded-full" />
      <h1 className="text-sm font-bold ">{name}</h1>
    </div>
  );
}
