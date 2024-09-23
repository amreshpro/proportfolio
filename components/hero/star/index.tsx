import { GrStar } from "react-icons/gr";
export default function Star() {
  return (
    <div className="star-inner border p-8 border-red-500 animate-spin [animation-duration:25s] ">
    <GrStar className="text-emerald-300/80 size-8 animate-spin" />
  </div>
  )
}

