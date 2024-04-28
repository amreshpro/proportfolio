import HeroContent from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";


export default function Hero() {
  return (
    <div className=" min-h-[80vh]  flex justify-between gap-2 sm:flex-wrap-reverse items-center p-4 ">
     
<HeroContent/>
<HeroImage/>
    
    </div>
  );
}
