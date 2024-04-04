import { Feature } from "@/@types";
import { features } from "@/data/data";
import Image from "next/image";
import Vid from "/public/images/vid-image.png";
import React from "react";

const Features = () => {
  return (
    <section className="flex flex-col gap-16 py-16">
      <div className="text-center">
        <h4 className="text-[#141414] font-bold text-2xl">Features</h4>
        <p className="text-[#616163] font-medium font-workSans">
          Key Highlights of Our Extension
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 justify-between">
        <div className="flex w-full flex-col gap-8">
          {features.map((feature: Feature) => (
            <article key={feature.id} className="flex gap-2">
              <div>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                  objectFit="cover"
                  className="min-w-[30px]"
                />
              </div>
              <div className="flex flex-col gap-1 md:gap-2">
                <h5 className="text-smblue text-lg md:text-xl font-inter font-semibold">
                  {feature.title}
                </h5>
                <p className="text-[#616163] font-workSans md:text-lg font-medium">
                  {feature.details}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="h-auto w-full">
          <Image src={Vid} alt="Vid repo" className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Features;
