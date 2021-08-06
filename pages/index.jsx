import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home({ exploreData, cardsData }) {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".exploreNearbySection",
        start: "top 60%",
      },
    });

    tl.from(".exploreNearby", {
      y: -50,
      duration: 0.6,
      opacity: 0,
    }).from(
      ".smallCard",
      {
        opacity: 0,
        x: -10,
        stagger: 0.1,
      },
      "-=0.1"
    );

    let bannerTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".banner",
        start: "top 60%",
      },
    });

    bannerTl.from(".banner", {
      y: -50,
      duration: 0.6,
      opacity: 0,
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link
          rel="icon"
          href="https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico"
        />
      </Head>

      <Header transparent={true} />
      <HeroSection />

      <main className="max-w-7xl mx-auto px-8 sm:px-16 exploreNearbySection mt-5 font-quickSand">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 exploreNearby ml-2">
            Explore Nearby
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <div className="banner">
          <Banner />
        </div>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="p-3 -ml-3 flex space-x-3 overflow-scroll overflow-y-hidden scrollbar-hide">
            {cardsData?.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
};

export default Home;
