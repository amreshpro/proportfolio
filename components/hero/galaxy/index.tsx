import { BsStars } from "react-icons/bs";

export default function Galaxy() {
  return (
    <div className="absolute w-full min-h-[90vh]   -z-50">
      <BsStars className="absolute bottom-1/4  right-1/2 top-4 text-emerald-300/20 size-8" />
      <BsStars className="absolute bottom-[25px]  right-[10px] text-emerald-300/20 size-8" />

      <BsStars className="absolute bottom-[25px]  right-[288px] text-emerald-300/20 size-8" />
      <BsStars className="absolute bottom-[75px]  right-[650px] text-emerald-300/20 size-8" />

      <BsStars className="absolute bottom-[265px]  left-[380px] text-emerald-300/20 size-8" />
      <BsStars className="absolute bottom-[895px]  left-[570px] text-emerald-300/20 size-8" />
    </div>
  );
}
