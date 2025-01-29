import React from "react";
import { getSports } from "../queries/groq";
import Image from "next/image";
import Link from "next/link";
export const revalidate = 30; // Revalidate page every 30 seconds
const Sports = async () => {
  const data = await getSports();
  console.log(data);
  return (
    <div>
      <div>
        {data.slice(0, 1).map((item, i) => (
          <div key={i} className="relative w-full md:w-[90%]">
            <Image
              src={item.image}
              width={400}
              height={400}
              priority
              alt="sports"
              className="object-cover w-full h-[10vh] md:h-[35vh]"
            />
            <div className="">
              <h3 className="text-2xl my-3 line-clamp-1 md:line-clamp-none">
                {item.title}
              </h3>
              <p className="line-clamp-1 md:line-clamp-none">
                {item.description}
              </p>
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

export default Sports;
