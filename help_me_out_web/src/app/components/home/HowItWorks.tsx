import type { HowItWorks } from "@/@types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { how_it_works } from "@/data/data";
import Image from "next/image";
import Rec from "/public/images/rec.png";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="flex flex-col gap-10 py-10">
      <div className="text-center">
        <h4 className="text-[#141414] font-bold text-2xl">How it works</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {how_it_works.map((item: HowItWorks) => (
          <Card key={item.id} className="border-0 text-center">
            <CardHeader className="items-center gap-4">
              <div className="w-[60px] h-[60px] text-white bg-[#120B48] rounded-full font-semibold flex items-center justify-center">
                {item.id}
              </div>
              <CardTitle className="text-balance text-smblue font-inter">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{item.details}</CardDescription>
            </CardContent>
            <CardFooter className="h-auto">
              <Image src={Rec} alt="Recording image" className="w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
