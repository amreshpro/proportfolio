import Link from "next/link";
import { useThemeStore } from "@/store/themeStore";

type Link_Button_Type = {
  title: string ;
  link: string;
  styles?:string|''
};

export default function LinkButton(props: Link_Button_Type) {
  const { title, link,styles='' } = props;
  const isDarkModeEnabled = useThemeStore((state) => state.isDarkModeEnabled);
  return (
    <Link
      className={`${isDarkModeEnabled ? "dark-btn" : "light-btn"}  font-bold  ${styles} `}
      href={link}
      target="_blank"
    >
      {title }
    </Link>
  );
}
