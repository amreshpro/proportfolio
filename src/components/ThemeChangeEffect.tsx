




import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useThemeContext } from "../theme/ThemeProvider";

const ThemeChangeEffect = () => {
  const { theme } = useThemeContext();

  return (
    // <motion.div
    //   initial={{ scale: 0, rotate: 0 }}
    //   animate={{ rotate: 360, scale: 1 }}
    //   transition={{
    //     type: "spring",
    //     stiffness: 260,
    //     damping: 20,
    //   }}
    // >
      <div
        className={` w-screen h-[100vh] 
     flex justify-center items-center  `}
      >
        {theme != "dark" ? (
          <BsFillSunFill className="text-5xl" />
        ) : (
          <BsMoonStarsFill className="text-5xl" />
        )}
      </div>
    // </motion.div>
  );
};
export default ThemeChangeEffect;