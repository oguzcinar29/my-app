import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import SocialIcons from "../shared/SocialIcons";
import { icons } from "@/constants";
import { MenuIcon } from "lucide-react";

export function MobileNavbar() {
  return (
    <div className="w-full">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full">
          <div className="flex flex-col gap-10 mt-10">
            <Button className="text-[20px]" asChild variant={"ghost"} size="sm">
              <Link href="/">Ana Sayfa</Link>
            </Button>
            <Button className="text-[20px]" asChild variant={"ghost"} size="sm">
              <Link href="/">Projelerimiz</Link>
            </Button>
            <Button className="text-[20px]" asChild variant={"ghost"} size="sm">
              <Link href="/">Hakkımızda</Link>
            </Button>
            <Button className="text-[20px]" asChild variant={"ghost"} size="sm">
              <Link href="/">Bize Ulaşın</Link>
            </Button>
            <div className="flex items-center justify-center gap-5 ">
              <SocialIcons icons={icons} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
