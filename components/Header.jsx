import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 grid items-center grid-cols-3 p-5 shadow-md md:px-10 header w-full">
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
          className="flex-grow pl-5 text-white placeholder-white bg-transparent outline-none"
        />
        <SearchIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-white">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center p-2 space-x-2 border-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
