import React from "react";

import { getAllCategory } from "../components/queries/groq";
import Image from "next/image";
import Link from "next/link";
export const revalidate = 30; // Revalidate page every 30 seconds
const page = async ({ params }) => {
  const data = await getAllCategory(params.category);
  console.log(data);
  return (
    <div className="px-2 md:px-14 py-2 md:py-7">
      <div className="grid  grid-cols-1 md:grid-cols-4">
        {data.map((item, i) => (
          <div key={i} className="relative w-full  md:w-[90%]">
            <Image
              src={item.image}
              width={400}
              height={400}
              priority
              alt="sports"
              className="object-cover w-full h-[20vh] md:h-[35vh]"
            />
            <div className="">
              <h3 className="text-2xl my-3">{item.title}</h3>
              <p>{item.description}</p>
              <Link
                href={`/blog/${item.slug}`}
                className="font-bold text-primary "
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

export default page;
