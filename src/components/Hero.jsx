import ProfileImage from "./ProfileImage";
import ProfileContent from "./ProfileContent";

export default function Hero() {
  return (
    <div
      className={`hero   px-8 sm:py-2 sm:px-2 flex  sm:flex-col-reverse justify-center  gap-8 w-full h-screen md:h-full`}
    >
      {/* Profile Content */}
      <ProfileContent />
      {/* profile image */}
      <ProfileImage />
    </div>
  );
}
