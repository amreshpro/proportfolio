import ProfileImage from "./ProfileImage";
import ProfileContent from "./ProfileContent";

export default function Hero() {
  return (
    <div
      className={`hero  py-4 px-8 sm:py-2 sm:px-2 flex  sm:flex-col-reverse justify-center items-center gap-8 w-full `}
    >
      {/* Profile Content */}
      <ProfileContent />
      {/* profile image */}
      <ProfileImage />
    </div>
  );
}
