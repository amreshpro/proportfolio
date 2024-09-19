import NAV_LINKS from "@/data/NAV_LINKS";
import Link from "next/link";
import { buttonVariants } from "../../ui/button";

export const navbarVariant = {
  default: "row",
  COLUMN: "col",
  ROW: "row",
};



function Navbar({ navbarVariant="default" }: { navbarVariant: string }) {
  return (
    <div className={`flex flex-${navbarVariant} gap-4 justify-center`}>
      {NAV_LINKS?.map((link) => {
        return (
          <Link
            href={link.path}
            key={link.id}
            className={buttonVariants({ variant: "default" })}
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
}

Navbar.navbarVariant = navbarVariant;
export default Navbar;
