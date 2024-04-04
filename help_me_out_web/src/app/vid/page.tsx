import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Edit from "/public/icons/edit.png";
import Copy from "/public/icons/copy.png";
import Facebook from "/public/icons/facebook.svg";
import Whatsapp from "/public/icons/whatsapp.svg";
import Telegram from "/public/icons/telegram.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Video = () => {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-hidden">
        <div className="container w-full flex flex-col gap-10 px-0 py-20">
          <div>
            {/* VID LEFT */}
            <div>
              <h1 className="text-[#141414] font-bold text-2xl md:text-3xl lg:text-4xl mb-10">
                Your video is ready!
              </h1>
              <div className="flex flex-col gap-8 md:gap-12">
                <div>
                  <p className="text-[#727272] text-[.9rem] md:text-base font-medium">
                    Name
                  </p>
                  <span className="font-semibold text-lg md:text-2xl text-[#413C6D] flex items-center gap-4">
                    Untitled_Video_20232509
                    <Image
                      alt="Edit icon"
                      height={32}
                      width={32}
                      src={Edit}
                      className="min-w-[24px] min-h-[24px]"
                    />
                  </span>
                </div>
                <div className="flex justify-between items-center pr-4 max-w-[550px]  bg-[#E7E7ED] h-[60px] rounded-md">
                  <Input
                    type="email"
                    placeholder="Enter email of receiver"
                    className="border-0 outline-0 placeholder:text-[#434343CC] focus-visible:outline-none focus-visible:ring-0 bg-transparent focus-visible:ring-offset-0"
                  />
                  <Button className="bg-[#605C84]">Send</Button>
                </div>
                <div>
                  <p className="text-[#141414] text-lg md:text-xl mb-2 font-semibold">
                    Video Url
                  </p>
                  <div className="bg-[#FAFAFA] flex items-center justify-between px-2 rounded-md overflow-hidden border-[#929292] border py-3 max-w-[550px]">
                    <Input
                      type="email"
                      disabled
                      value={"https://www.helpmeout/Untitled_Video_20232509"}
                      className="border-0 outline-0 placeholder:text-[#434343CC] focus-visible:outline-none focus-visible:ring-0 bg-transparent focus-visible:ring-offset-0 text-[#4B4B4B] text-[.9rem] md:text-base font-normal"
                    />
                    <Button
                      className="border-[#120B48] gap-2 text-[#141414]"
                      variant="outline"
                    >
                      <Image
                        alt="Copy icon"
                        src={Copy}
                        height={20}
                        width={20}
                        className="min-w-[20px] min-h-[20px]"
                      />{" "}
                      <p className="hidden md:flex">Copy</p>
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="text-[#141414] text-lg md:text-xl mb-2 font-semibold">
                    Share video
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <Button
                      variant="outline"
                      className="items-center gap-3 border-[#0A0628]"
                    >
                      <Image
                        alt="Facebook icon"
                        src={Facebook}
                        height={20}
                        width={20}
                      />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      className="items-center gap-3 border-[#0A0628]"
                    >
                      <Image
                        alt="Whatsapp icon"
                        src={Whatsapp}
                        height={20}
                        width={20}
                      />
                      Whatsapp
                    </Button>
                    <Button
                      variant="outline"
                      className="items-center gap-3 border-[#0A0628]"
                    >
                      <Image
                        alt="Telegram icon"
                        src={Telegram}
                        height={20}
                        width={20}
                      />
                      Telegram
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* VID RIGHT */}
            <div></div>
          </div>
          {/*<div className="full-width bg-[#f4f6f8] h-[80px]"></div>*/}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Video;
