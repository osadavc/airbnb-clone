import { useState, useEffect } from "react";
import Image from "next/image";

import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({ placeholder, transparent }) => {
  const [transparentNav, setTransparentNav] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });

    setSearchInput("");
  };

  const changeNavBackground = () => {
    if (window.scrollY >= 200) {
      setTransparentNav(true);
    } else {
      setTransparentNav(false);
    }
  };

  useEffect(() => {
    if (transparent) {
      window.addEventListener("scroll", changeNavBackground);
    } else {
      setTransparentNav(true);
    }
  }, []);

  return (
    <header
      className={
        transparentNav
          ? `fixed top-0 z-50 grid items-center grid-cols-3 p-5 shadow-md md:px-10 header w-full active-header`
          : `fixed top-0 z-50 grid items-center grid-cols-3 p-5 md:px-10 header w-full`
      }
    >
      {/* Left */}
      <div
        className="relative flex items-center justify-center h-10 cursor-pointer"
        onClick={() => router.push("/")}
      >
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
          value={searchInput}
          type="text"
          placeholder={placeholder || "Start Your Search"}
          className={
            transparentNav
              ? `flex-grow pl-5 text-gray-600 placeholder-gray-400 bg-transparent outline-none duration-500 transition-colors font-quickSand`
              : `flex-grow pl-5 text-white placeholder-white bg-transparent outline-none font-quickSand`
          }
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
            className="w-full"
          />
          <div
            className={
              transparentNav
                ? `text-gray-600 flex items-center mt-2 mb-1`
                : `text-white flex items-center mt-2 mb-1`
            }
          >
            <h2 className="text-2xl flex-grow font-semibold font-quickSand">
              Number Of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              type="number"
              className="w-12 pl-2 bg-transparent text-red-400"
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
            />
          </div>

          <div className="flex justify-around font-quickSand">
            <button
              className={transparentNav ? ` text-gray-400` : ` text-white`}
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button className="text-red-400" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
