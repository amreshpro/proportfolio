export default function Loader() {
  return (
    <div className=" w-screen h-screen fixed border border-blue-300 shadow rounded-md p-4 max-w-sm  mx-auto">
      <div className="ternary animate-pulse w-full h-full flex justify-center items-center flex-wrap gap-4 p-4">
   
        <div className="box box-1 animate-spin  bg-teal-300 w-10 h-10"></div>
        <div className="box box-1   animate-spin bg-pink-500 w-10 h-10"></div>
        <div className="box box-1  animate-spin  bg-yellow-200 w-10 h-10"></div>
      </div>
    </div>
  );
}
