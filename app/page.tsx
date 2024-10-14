import AboutUs from "@/components/Home/AboutUs";
import { Hero } from "@/components/Home/Hero";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
    </div>
  );
}
