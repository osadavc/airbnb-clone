import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    let tl = gsap.timeline();

    tl.from(".hero-text", {
      opacity: 0,
      y: -50,
      duration: 0.7,
    }).from(
      ".headerButton",
      {
        opacity: 0,
        y: 50,
        duration: 0.7,
      },
      "-=0.5"
    );
  }, []);

  return (
    <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px]">
      <Image
        src="/images/heroImage.webp"
        layout="fill"
        objectFit="cover"
        alt="heroImage"
        className=""
      />

      <div className="absolute top-0 left-0 bg-black w-full h-full opacity-20"></div>

      <div className="absolute w-full pl-5 top-28 sm:top-36 md:top-40 lg:top-32 xl:top-52 md:pl-20">
        <h2 className="text-4xl font-bold text-white w-72 md:text-5xl lg:text-6xl hero-text font-quickSand">
          Olympian & Paralympian Online Experiences
        </h2>
        <button className="py-2 px-4 bg-white rounded-lg mt-5 headerButton font-poppins">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
