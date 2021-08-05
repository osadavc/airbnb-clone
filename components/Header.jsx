import { useState, useEffect } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";

const Header = () => {
  const [transparentNav, setTransparentNav] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 410) {
      setTransparentNav(true);
    } else {
      setTransparentNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBackground);
  }, []);

  return (
    <header
      className={
        transparentNav
          ? `fixed top-0 z-50 grid items-center grid-cols-3 p-5 shadow-md md:px-10 header w-full active-header`
          : `fixed top-0 z-50 grid items-center grid-cols-3 p-5 shadow-md md:px-10 header w-full`
      }
    >
      {/* Left */}
      <div className="relative flex items-center justify-center h-10 cursor-pointer">
        <Image
          src="/images/airbnb.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="airbnb"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center py-2 rounded-full md:border-[1.5px] md:shadow-sm">
        <input
          type="text"
          placeholder="Start Your Search"
          className={
            transparentNav
              ? `flex-grow pl-5 text-gray-600 placeholder-gray-400 bg-transparent outline-none duration-500 transition-colors`
              : `flex-grow pl-5 text-white placeholder-white bg-transparent outline-none`
          }
        />
        <SearchIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2" />
      </div>

      {/* Right */}
      <div
        className={
          transparentNav
            ? `flex items-center justify-end space-x-4 text-gray-500 duration-500 transition-colors`
            : `flex items-center justify-end space-x-4 text-white`
        }
      >
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center p-2 space-x-2 border-[1.5px] rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
