import { ReactNode } from "react";
import { Button } from "../ui/button";

// Define the type for a single icon
export type Icon = {
  icon: ReactNode;
};

// Define the props for the SocialIcons component (an array of icons)
interface SocialIconsProps {
  icons: Icon[];
}

const SocialIcons = ({ icons }: SocialIconsProps) => {
  return (
    <>
      {icons.map((item: Icon, indx: number) => (
        <Button
          size="icon"
          variant="ghost"
          className="text-[#001ED3] h-4 w-4 hover:text-blue rounded-full"
          key={indx}
        >
          {item.icon}
        </Button>
      ))}
    </>
  );
};

export default SocialIcons;
