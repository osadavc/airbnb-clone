import React, { useEffect } from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[200px] sm:h-[300px] mt-10">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        alt="heroImage"
        className="rounded-3xl"
      />

      <div className="bg-white absolute h-full w-full opacity-10"></div>

      <div className="absolute w-full h-full top-10 md:top-20 pl-10">
        <p className="text-4xl font-semibold w-64 text-black">
          Not sure where to go? Perfect.
        </p>

        <button className="px-5 py-2 my-3 font-semibold text-white bg-gray-900 rounded-xl shadow-md hover:shadow-xl active:scale-90 transition duration-150 mt-5">
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
