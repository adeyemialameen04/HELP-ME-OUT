import Image from "next/image";
import Logo from "/public/icons/darkologo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-7 border-[#DEE1E6] border-b-2">
      <div className="container flex items-center justify-between px-2">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" height={40} width={40} loading="lazy" />
          <p className="font-bold font-inter text-[#100A42]">HelpMeOut</p>
        </Link>
        <div className="items-center gap-9 hidden md:flex">
          <Link href="#" className="text-[#141414] font-workSans">
            Features
          </Link>
          <Link href="#" className="text-[#141414] font-workSans">
            How it works
          </Link>
        </div>
        <div>
          <Link href="/auth" className="text-darkblue font-bold">
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
