import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { AccordionDemo } from "./mainsidebarcomponent"

export function SheetDemo() {
  return (
    <div className="md:hidden"> 

    
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
        <Menu />
            <AccordionDemo/>
          </SheetHeader>
      </SheetContent>
    </Sheet>
    </div>
  )
}
