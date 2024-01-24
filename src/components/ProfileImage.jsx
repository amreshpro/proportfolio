

export default function ProfileImage() {
  return (
    <div className=" bg-gradient-to-b rounded-t-full from-blue-700 flex justify-center w-1/2 sm:w-full sm:px-2 sm:py-2">
      <img
        src="/profile.jpeg"
        className=" w-72 h-80 rounded-t-full py-6 sm:px-4 "
      />
    </div>
  );
}