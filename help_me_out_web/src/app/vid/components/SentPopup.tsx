import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Kite from "/public/images/kite.gif";
import Image from "next/image";
import Link from "next/link";

const SentPopup = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#605C84]">Send</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#F2F4F7] py-10">
        <DialogHeader></DialogHeader>
        <div className="flex gap-14 flex-col items-center py-4">
          <div className="flex items-center flex-col gap-4">
            <div className="h-auto">
              <Image alt="Flying kite image" src={Kite} />
            </div>
            <p className="font-workSans font-normal text-center">
              Your video link has been sent to{" "}
              <span className="font-medium">johnmark@gmail.com</span>
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center text-center">
            <p className="font-workSans font-normal text-[#141414]">
              Would you need to view this video later? Save to your account now!
            </p>
            <Button type="button" className="bg-[#120B48]">
              Save Video
            </Button>
          </div>
        </div>
        <DialogFooter className="self-center block">
          <p className="text-center text-sm font-light font-workSans text-[#7E7E7E]">
            Don&apos;t have an account?{" "}
            <Link href={"/auth"} className="text-[#120B48] font-semibold">
              Create account
            </Link>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SentPopup;
