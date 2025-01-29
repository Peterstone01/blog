import React from "react";
import { getPolitics } from "./queries/groq";
import Image from "next/image";
import Link from "next/link";
const Politics = async () => {
  const data = await getPolitics();
  console.log(data);
  return (
    <div>
      <div>
        {data.map((item, i) => (
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
              <h3 className="text-2xl my-3 line-clamp-1">{item.title}</h3>
              <p className="line-clamp-1 md:line-clamp-none">
                {item.description}{" "}
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

export default Politics;
