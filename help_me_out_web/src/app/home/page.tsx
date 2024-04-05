import Image from "next/image";
import Logo from "/public/icons/darkologo.png";
import Link from "next/link";
import UserDropdown from "./components/UserDropdown";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Search from "/public/icons/search-normal.png";
import { all_videos } from "@/data/data";
import { Vid } from "@/@types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LinkIcon from "/public/icons/link.png";
import More from "/public/icons/more.png";

const Home = () => {
  return (
    <>
      <nav className="border-b-[1px] border-t-[1px] border-t-[#DFE1E5] mt-10 py-8 border-b-[#0000001A]">
        <div className="flex flex-col w-full px-0 gap-10 container">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="Logo"
                height={40}
                width={40}
                className="h-[24px] w-[24px]"
              />
              <p className="md:font-bold text-[.9rem] font-inter text-[#100A42]">
                HelpMeOut
              </p>
            </Link>
            <UserDropdown />
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:justify-between md:items-center">
            <div className="w-full">
              <h1 className="text-[#141414] font-semibold text-[1.2rem] md:text-3xl">
                Hello, John Mark
              </h1>
              <p className="font-workSans text-[#141414B2] text-lg">
                Here are your recorded videos
              </p>
            </div>
            <div className="bg-[#B6B3C624] flex items-center justify-between px-2 rounded-lg overflow-hidden max-w-[500px] border-[#E7E7ED] border py-3 w-full">
              <Button className="px-2 py-0" variant="ghost">
                <Image
                  alt="Copy icon"
                  src={Search}
                  height={20}
                  width={20}
                  className="min-w-[20px] min-h-[20px]"
                />
              </Button>
              <Input
                type="email"
                //disabled
                placeholder="Search for a particular video"
                className="border-0 outline-0 placeholder:text-[#C3C3C3] text-[.9rem] focus-visible:outline-none focus-visible:ring-0 bg-transparent focus-visible:ring-offset-0 text-[#4B4B4B] md:text-base font-normal"
              />
            </div>
          </div>
        </div>
      </nav>
      <main className="py-10">
        <div className="container flex flex-col gap-14 px-0">
          <section>
            <h4 className="mb-4 font-workSans font-medium text-[#141414CC] text-lg">
              Recent files
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {all_videos.map((video: Vid) => (
                <Card>
                  <CardHeader className="h-auto">
                    <Image
                      src={video.poster}
                      alt={`${video.title} image`}
                      width={200}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </CardHeader>
                  <CardContent className="flex justify-between gap-1">
                    <CardTitle className="text-[#141414] font-workSans font-medium text-base md:text-xl">
                      How to create Facebook Ad listing
                    </CardTitle>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={LinkIcon}
                        height={24}
                        width={24}
                        alt="Link icon"
                      />
                      <Image
                        src={More}
                        height={24}
                        width={24}
                        alt="More icon"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="font-workSans font-normal text-[#BBBBBB]">
                    {video.date}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
          <section>
            <h4 className="mb-4 font-workSans font-medium text-[#141414CC] text-lg">
              Files from last week
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {all_videos.reverse().map((video: Vid) => (
                <Card>
                  <CardHeader className="h-auto">
                    <Image
                      src={video.poster}
                      alt={`${video.title} image`}
                      width={200}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </CardHeader>
                  <CardContent className="flex justify-between gap-1">
                    <CardTitle className="text-[#141414] font-workSans font-medium text-base md:text-xl">
                      How to create Facebook Ad listing
                    </CardTitle>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={LinkIcon}
                        height={24}
                        width={24}
                        alt="Link icon"
                      />
                      <Image
                        src={More}
                        height={24}
                        width={24}
                        alt="More icon"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="font-workSans font-normal text-[#BBBBBB]">
                    {video.date}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
