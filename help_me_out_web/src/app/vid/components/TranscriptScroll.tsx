import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { transcript } from "@/data/data";
import React from "react";

const TranscriptScroll = () => {
  return (
    <ScrollArea className="h-72 w-full rounded-md">
      <div className="p-4">
        {transcript.map((transcript, index) => (
          <>
            <div key={index} className="flex gap-4 items-start">
              <small className="font-normal text-[#141414] font-workSans">
                {transcript.time}
              </small>
              <p className="font-medium font-inter">{transcript.text}</p>
            </div>
            <Separator className="my-4" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
};

export default TranscriptScroll;
