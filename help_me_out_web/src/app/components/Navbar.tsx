"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "/public/images/logo-dark.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LiaTimesSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav className="py-3 border-[#DEE1E6] border-b-2">
      <div className="container flex items-center max-w-full justify-between px-2">
        <div className="">
          <Image src={Logo} alt="Logo" width="150" height="180" />
        </div>
        <div className="items-center gap-9 hidden md:flex">
          <Link href="#" className="text-[#141414] font-semibold">
            Features
          </Link>
          <Link href="#" className="text-[#141414] font-semibold">
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
