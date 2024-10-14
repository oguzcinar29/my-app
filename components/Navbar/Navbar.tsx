import { Button } from "../ui/button";
import SocialIcons from "../shared/SocialIcons";
import { icons } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { MobileNavbar } from "./MobileNavbar";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-3 pt-2">
      <div className="flex sm:justify-between justify-center items-center pb-3">
        <div className="text-[#41444B] font-light text-[13px] leading-[15px] flex gap-5 items-center  ">
          <span>DESTEK</span>
          <span>PARTNERS</span>
          <span>CAREERS</span>
        </div>
        <div className="sm:flex hidden items-center gap-5 ">
          <SocialIcons icons={icons} />
        </div>
      </div>
      <hr className="border  border-[#D4D7DD]" />
      <div className="flex justify-between items-center pt-5">
        <div>
          <Image
            alt="logo"
            className="text-white"
            src={"/logo.png"}
            width={103}
            height={28}
          />
        </div>
        <div className="space-x-5 hidden sm:block">
          <Button asChild variant={"underline"} size="sm">
            <Link href="/">Ana Sayfa</Link>
          </Button>
          <Button asChild variant={"underline"} size="sm">
            <Link href="/">Projelerimiz</Link>
          </Button>
          <Button asChild variant={"underline"} size="sm">
            <Link href="/">Hakkımızda</Link>
          </Button>
          <Button asChild variant={"underline"} size="sm">
            <Link href="/">Bize Ulaşın</Link>
          </Button>
        </div>
        <div className="sm:hidden">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
