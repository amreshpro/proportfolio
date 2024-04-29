import { TbLoader2 } from "react-icons/tb";

export default function Loader() {
  return (
    <div className=" w-screen h-screen fixed">
      <div className="ternary animate-pulse w-full h-full flex justify-center items-center ">
   <TbLoader2 className="text-5xl animate-spin"/>

      </div>
    </div>
  );
}
