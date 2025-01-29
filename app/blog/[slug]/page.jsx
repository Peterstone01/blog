import React from "react";
import { getSlug } from "../../components/queries/groq";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
export const revalidate = 30; // Revalidate page every 30 seconds
const page = async ({ params }) => {
  const data = await getSlug(params.slug);
  console.log(data);
  return (
    <div>
      <div className="w-full md:w-[60%] mx-auto py-10">
        {data.map((item, i) => (
          <div key={i}>
            <h1 className="font-bold text-5xl text-center">{item.title}</h1>
            <div className="mt-10">
              <Image
                src={item.image}
                width={500}
                height={500}
                alt={item.title}
                priority
                className="w-full object-cover h-[50vh]"
              />
              <div className=" py-10 px-2 md:px-10 prose prose-lg prose-h1:text-4xl w-full max-w-none prose-li:marker:text-primary prose-a:text-primary ">
                <PortableText
                  width={1000}
                  value={item.body}
                  className="w-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
