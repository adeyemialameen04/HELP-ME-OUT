"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "/public/icons/darkologo.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LiaTimesSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav className="py-7 border-[#DEE1E6] border-b-2">
      <div className="container flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" height={40} width={40} loading="lazy" />
          <p className="font-bold font-inter text-[#100A42]">HelpMeOut</p>
        </div>
        <div className="items-center gap-9 hidden md:flex">
          <Link href="#" className="text-[#141414] font-semibold font-workSans">
            Features
          </Link>
          <Link href="#" className="text-[#141414] font-semibold font-workSans">
            How it works
          </Link>
        </div>
        <div className="hidden md:flex">
          <Link href="#" className="text-darkblue font-bold">
            Get started
          </Link>
        </div>
        {/*<div className="flex items-center justify-center md:hidden">
          <button
            onClick={() => {
              setIsNavShowing(!isNavShowing);
            }}
            className="text-xl"
          >
            {isNavShowing ? <LiaTimesSolid /> : <RxHamburgerMenu />}
          </button>
        </div>*/}
      </div>
    </nav>
  );
};

export default Navbar;
