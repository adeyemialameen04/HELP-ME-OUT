import React from "react";
import Logo from "/public/icons/white-logo.svg";
import Image from "next/image";
import { footer_links } from "@/data/data";
import { FooterLink } from "@/@types";

const Footer = () => {
  return (
    <footer className="bg-darkblue py-20">
      <div className="container flex flex-col lg:flex-row justify-between text-white gap-20">
        <div className="flex w-full items-center gap-3">
          <Image
            alt="Light Logo"
            loading="lazy"
            src={Logo}
            width={40}
            height={40}
            className="transparent"
          />
          <p className="font-bold font-inter">HelpMeOut</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full text-center lg:text-left">
          {footer_links.map((item: FooterLink) => (
            <div key={item.id}>
              <h5 className="font-semibold mb-3">{item.head}</h5>
              <div className="flex flex-col gap-2">
                {item.links.map((link, index) => (
                  <p
                    key={index}
                    className="font-workSans text-[.9rem] font-normal "
                  >
                    {link}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
