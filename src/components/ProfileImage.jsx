import { MYIMAGE } from "../assets";


export default function ProfileImage() {
  return (
    <div className=" bg-gradient-to-b rounded-full from-blue-700 flex justify-center h-fit sm:w-fit p-8 sm:p-2 mx-1 ">
      <img
        src={MYIMAGE}
        className=" w-80 h-80 sm:w-60 sm:h-60 rounded-full  "
      />
    </div>
  );
}