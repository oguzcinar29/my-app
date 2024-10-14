import { ReactNode } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export type Icons = {
  icon: ReactNode;
};

export const icons: Icons[] = [
  {
    icon: <Twitter />,
  },
  {
    icon: <Facebook />,
  },
  {
    icon: <Instagram />,
  },
];
