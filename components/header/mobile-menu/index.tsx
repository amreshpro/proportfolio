import { Button } from "@/components/ui/button"
import { SlMenu } from "react-icons/sl";
import {
  Sheet,
   SheetContent,
   SheetTrigger,
} from "@/components/ui/sheet"
import Navbar, { navbarVariant } from "../navbar";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><SlMenu/></Button>
      </SheetTrigger>
      <SheetContent className="pt-16">
       
       <Navbar navbarVariant={navbarVariant.COLUMN}/>
       
      </SheetContent>
    </Sheet>
  )
}
