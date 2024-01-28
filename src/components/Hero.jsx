import ProfileImage from "./ProfileImage";
import ProfileContent from "./ProfileContent";

export default function Hero() {
  return (
    <div
      className={`hero   px-8 sm:py-2 sm:px-2 pt-16 flex  sm:flex-col-reverse sm:justify-center sm:items-center  gap-8 w-screen h-[calc(100vh-5rem)]  md:h-full`}
    >
      {/* Profile Content */}
      <ProfileContent />
      {/* profile image */}
      <ProfileImage />
    </div>
  );
}
