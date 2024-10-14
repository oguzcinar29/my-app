import Image from "next/image";
import { icons } from "@/constants";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="mt-20 flex text-white">
      <div className="bg-primary  w-[40%] ">
        <div className="flex flex-col gap-10 sm:w-[50%] mx-auto py-16  sm:px-0 px-5 ">
          <div className="">
            <Image
              alt="logo"
              className=""
              src={"/white-logo.png"}
              width={103}
              height={28}
            />
          </div>
          <div className="flex flex-col ">
            <span className="text-[#EBECEE]  font-light text-[14px] ">
              İLETİŞİME GEÇ
            </span>
            <span className="2xl:text-[34px] xl:text-[30px] sm:text-[20px] text-[14px] font-semibold ">
              +90 553 260 2050
            </span>
          </div>
          <div className="flex items-center gap-5 flex-wrap ">
            {icons.map((item: any, indx: any) => {
              return (
                <div
                  key={indx}
                  className="bg-white rounded-full flex justify-center items-center p-3"
                >
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    className={`text-[#001ED3] h-5 w-5 hover:text-blue rounded-full `}
                    key={indx}
                  >
                    {item?.icon}
                  </Button>
                </div>
              );
            })}
          </div>
          <span className="text-[#EBECEE] text-[17px] leading-[28px] ">
            Fusce eu magna quis velit efficitur rhoncus. Vivamus vehicula, neque
            a velit
          </span>
        </div>
      </div>
      <div className="bg-secondary text-white w-[60%] ">
        <div className="flex flex-col gap-28 sm:p-14 sm:px-24 p-16 px-10">
          <div className="flex  sm:gap-32 gap-10 flex-wrap ">
            <div className="flex flex-col gap-2">
              <span className="text-[22px] leading-[26px] mb-2  ">
                Quick Links
              </span>
              <span className="text-[17px] leading-[28px] text-[#D4D7DD] font-light ">
                Ana Sayfa
              </span>
              <span className="text-[17px] leading-[28px] text-[#D4D7DD] font-light ">
                Ana Sayfa
              </span>
              <span className="text-[17px] leading-[28px] text-[#D4D7DD] font-light ">
                Ana Sayfa
              </span>
              <span className="text-[17px] leading-[28px] text-[#D4D7DD] font-light ">
                Ana Sayfa
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[22px] leading-[26px] mb-2  ">
                Quick Links
              </span>
              <span className="text-[17px] leading-[28px] text-[#D4D7DD] font-light ">
                Ana Sayfa
              </span>
              <span className="text-[17px] leading-[28px] text-[#D4D7DD] font-light ">
                Ana Sayfa
              </span>
              <span className="text-[17px] leading-[28px] text-[#D4D7DD] font-light ">
                Ana Sayfa
              </span>
              <span className="text-[17px] leading-[28px] text-[#D4D7DD] font-light ">
                Ana Sayfa
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[22px] leading-[26px] mb-2  ">
                Quick Links
              </span>
              <span className="text-[17px] leading-[28px] text-[#D4D7DD] font-light ">
                Ana Sayfa
              </span>
              <span className="text-[17px] leading-[28px] text-[#D4D7DD] font-light ">
                Ana Sayfa
              </span>
              <span className="text-[17px] leading-[28px] text-[#D4D7DD] font-light ">
                Ana Sayfa
              </span>
              <span className="text-[17px] leading-[28px] text-[#D4D7DD] font-light ">
                Ana Sayfa
              </span>
            </div>
          </div>
          <div>
            <span className="text-[17px] leading-[28px] text-[#D4D7DD] ">
              Merkulove © Dustro Template All rights reserved Copyrights 2020
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
