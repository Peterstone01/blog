import React from "react";
import { getMusic } from "../queries/groq";
import Image from "next/image";
import Link from "next/link";

const Music = async () => {
  const data = await getMusic();
  console.log(data);
  return (
    <div className="px-2 md:px-14 py-7 bg-gray-100">
      <h1 className="font-bold text-4xl my-2 md:my-10 text-primary">Music</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 ">
        {data.map((item, i) => (
          <div
            key={i}
            className="relative border shadow bg-gray-50 w-full md:w-[90%]"
          >
            <Image
              src={item.image}
              width={400}
              height={400}
              priority
              alt="sports"
              className="object-cover w-full h-[30vh] md:h-[35vh]"
            />
            <div className=" py-5 px-3">
              <h3 className="text-2xl my-3 line-clamp-1">{item.title}</h3>
              <p className="line-clamp-1 md:line-clamp-3">{item.description}</p>
              <Link
                href={`/blog/${item.slug}`}
                className="font-bold text-primary mt-10 "
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
