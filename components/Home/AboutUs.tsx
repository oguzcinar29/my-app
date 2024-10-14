import Link from "next/link";
import { Button } from "../ui/button";

const AboutUs = () => {
  return (
    <section className="section flex gap-10">
      <div className="w-[50%] flex flex-col gap-5 my-10 ">
        <div className="flex flex-col gap-2">
          {" "}
          <span className="text-[#D2153D] font-medium text-[14px] leading-[15px] ">
            Hakkımızda
          </span>
          <span className="text-[55px] text-[#16213E]  font-semibold leading-[64px] ">
            With our knowledge we guarente success
          </span>
        </div>

        <span className="text-[#00215B] font-bold  text-[17px] leading-[28px] ">
          Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat
          congue
        </span>
        <span className="text-[#41444B] text-[17px] leading-[27px]  ">
          Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum
          leo consectetur accumsan. Vivamus viverra ante turpis, dignissim
          condimentum elit egestas sit amet. Phasellus faucibus pellentesque
        </span>
        <Button className="w-[30%] min-w-[240px]" asChild>
          <Link href={"/"}>Learn More</Link>
        </Button>
      </div>
      <div>
        <video width="600" height="100" className="h-[500px]" controls>
          <source src="/vinc1-video.mp4" type="video/mp4" />
          Tarayıcınız bu videoyu desteklemiyor.
        </video>
      </div>
    </section>
  );
};

export default AboutUs;
