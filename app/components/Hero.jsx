import React from "react";
import { getHero } from "./queries/groq";
import Image from "next/image";
const Hero = async () => {
  const data = await getHero();
  console.log(data.body);
  return (
    <div>
      {/* ///////////////////////////image */}
      <div className="h-[30vh] md:h-[50vh] lg:h-[60vh] w-full relative px-2 md:px-10">
        <Image
          alt="hero"
          src={data.image}
          width={1000}
          priority
          height={700}
          className="object-cover w-full  h-[30vh] md:h-[50vh] lg:h-[60vh]"
        />
        <div className="absolute bottom-14 left-5  px-2 md:px-14 text-white w-[40%]">
          <h1 className="text-3xl md:text-3xl text-white mb-2 md:mb-5 font-bold">
            PETERSTONE Devs.
          </h1>
          <h1 className="  line-clamp-2 md:line-clamp-none">
            welcome to my webworks
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
