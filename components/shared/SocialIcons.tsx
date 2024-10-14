import { Icons } from "@/constants";
import { Button } from "../ui/button";

const SocialIcons = ({ icons }: any) => {
  return (
    <>
      {icons.map((item: Icons, indx: number) => {
        return (
          <Button
            size={"icon"}
            variant={"ghost"}
            className={`text-[#001ED3] h-4 w-4 hover:text-blue rounded-full`}
            key={indx}
          >
            {item?.icon}
          </Button>
        );
      })}
    </>
  );
};
export default SocialIcons;
