import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { accountSettings } from "@/data/data";
import { AccountSetting } from "@/@types";
import Image from "next/image";
//import {
//  Popover,
//  PopoverContent,
//  PopoverTrigger,
//} from "@/components/ui/popover";
//import { Label } from "@/components/ui/label";
//import { Input } from "@/components/ui/input";

const UserDropdown = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} className="flex gap-3 py-6 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-[#141414] font-workSans font-normal">
              John Mark
            </p>
            <FaAngleDown className="font-lg" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[280px] w-full max-w-[90vw] md:max-w-[380px]">
          <DropdownMenuLabel>Account Settings</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="flex flex-col gap-6 py-5 px-3">
            {accountSettings.map((setting: AccountSetting) => (
              <div
                className="items-center flex gap-5 justify-between"
                key={setting.id}
              >
                <span className="flex gap-3 items-center">
                  <Image
                    src={setting.icon}
                    alt={`${setting.title} icon`}
                    height={24}
                    width={24}
                  />
                  <p className="text-[#141414] font-medium font-workSans">
                    {setting.title}
                  </p>
                </span>
                <FaAngleRight className="text-[#292D32]" />
              </div>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      {/*<Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>*/}
    </>
  );
};

export default UserDropdown;
