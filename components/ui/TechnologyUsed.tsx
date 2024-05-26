export default function TechnologyUsed(props:{id:string,image_url:string}) {
    const {id,image_url} = props
  return (
    <img
      src={image_url}
      className="hover:animate-bounce my-2 w-8 h-8 rounded-full border border-gray-300 p-0.5"
      key={id}
    />
  );
}
