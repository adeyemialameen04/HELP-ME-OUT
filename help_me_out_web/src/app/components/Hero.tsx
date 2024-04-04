import { Button } from "@/components/ui/button";
import React from "react";
import Grandma from "/public/images/grandma-operating-computer.png";
import Kid from "/public/images/kid-operating-computer.png";
import HeroImg from "/public/images/hero-img.png";
import Lady from "/public/images/woman-using-smartphone-technology 2.png";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { BiRightArrow } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 mi-grid gap-10">
      <div className="flex flex-col gap-5 items-center md:items-start">
        <h4 className="text-[#141414] leading-[.95] font-bold text-[2rem] text-center md:text-left lg:text-[3.5rem]">
          Show Them Don&apos;t Just Tell
        </h4>
        <p className="text-grey text-lg text-center mb-5 md:text-left">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <Button className="gap-4 items-center px-5 py-7 md:py-10 bg-[#120B48] max-w-[400px] text-lg font-semibold md:px-9">
          Install HelpMeOut <FaArrowRight />{" "}
        </Button>
      </div>
      <div className="w-full h-auto">
        <Image src={HeroImg} alt="Image" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Hero;

//{
//  /*<div className="flex flex-col gap-4">
//          <Image
//            src={Grandma}
//            alt="Image"
//            className="rounded-md object-cover"
//          />
//          <Image src={Kid} alt="Image" className="rounded-md object-cover" />
//        </div>
//        <div className="h-full">
//          <Image src={Lady} alt="Image" className="rounded-md object-cover" />
//        </div>*/
//}
