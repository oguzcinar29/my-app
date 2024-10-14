import { Button } from "../ui/button";

const SocialIcons = ({ icons }: any) => {
  return (
    <>
      {icons.map((item: any, indx: any) => {
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
