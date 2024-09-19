import Image from "next/image";

export default function Technology(props: {
  id: string;
  image_url: string;
}) {
  const { id, image_url } = props;
  return (
    <Image
      unoptimized={true}
      alt={image_url}
      src={image_url}
      width={14}
      height={14}
      className="hover:animate-bounce my-2 w-8 h-8 rounded-full border p-0.5"
      key={id}
    />
  );
}
