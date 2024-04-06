export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center gap-4  bg-white  text-[#111827] p-8 rounded-lg border-1 border-4 border-[#014fff] shadow-lg shadow-[#014fff] ">
   
   <div className="image  ">
    <img src="/amresh.jpg" alt="my-photo" className=" object-cover w-[250px] h-[250px] rounded-full"  />
   </div>
      <div className="name flex items-center  justify-center flex-wrap gap-2  text-6xl md:text-5xl sm:text-4xl font-bold">
        <h1>Hii, I am</h1>
        <h1 className="text-[#014fff]">Amresh Maurya</h1>
      </div>
      <div className="profile">
        <h1 className="font-medium text-2xl text-[#2b4b96] ">React Developer | Frontend Developer</h1>
      </div>
    </div>
  );
}
