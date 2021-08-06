import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  useEffect(() => {
    if (!location || !startDate || !endDate || !noOfGuests) {
      router.push("/");
    }

    ScrollTrigger.batch(".singleInfoCard", {
      onEnter: (batch) =>
        gsap.from(batch, {
          autoAlpha: 0,
          stagger: 0.25,
          x: -10,
          duration: 0.6,
        }),
    });
  }, []);

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Head>
        <title>Airbnb | {location}</title>
        <link
          rel="icon"
          href="https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico"
        />
      </Head>

      <Header
        placeholder={`${location} | ${range} | ${noOfGuests} guests`}
        transparent={false}
      />

      <main className="flex mt-16">
        <section className="pt-14 px-6 flex-grow">
          <p className="text-xs font-poppins">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>

          <h1 className="text-3xl font-semibold mt-3 mb-6 font-quickSand">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-700 whitespace-nowrap font-poppins">
            <p className="filter-button">Cancellation Flexibility</p>
            <p className="filter-button">Type of Place</p>
            <p className="filter-button">Price</p>
            <p className="filter-button">Rooms and Beds</p>
            <p className="filter-button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default search;

export const getServerSideProps = async () => {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
};
