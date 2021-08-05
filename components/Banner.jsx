import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        alt="heroImage"
      />

      <div className="absolute w-full text-center top-1/2">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>

        <button className="px-8 py-3 my-3 font-bold text-purple-500 bg-white rounded-full shadow-md hover:shadow-xl active:scale-90 transition duration-150">
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
