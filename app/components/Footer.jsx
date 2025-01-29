"use client";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { navlinks } from "../constant/data";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-slate-950 w-full  bottom-0 py-10 px-10 block space-y-5 md:flex justify-between ">
      <div className=" md:w-[50%]">
        <Link
          href="/"
          className="text-white font-bold text-3xl mb-5 underline "
        >
          STONEweb
        </Link>
        <p className="text-gray-200 text-sm my-5 line-clamp-4 md:line-clamp-5 lg:line-clamp-none ">
          Hello, this is Peter, and i welcome you to my web developement
          project. i am a fullstack web developer and conversant with the
          following technologies:
          <span className="font-semibold text-muted">
            {" "}
            React.js, Next.js, Supabase (Postgress database), Sanity Sudio (for
            content managent), Auth.js and supabase authentication,
            Redox/Toolkits for state management, Groq queries to fetch data from
            Sanity studio and so many others
          </span>
        </p>
      </div>
      {/* ///////////////////////////////middle */}
      <div className="text-primary-foreground  col-span-1">
        <h1 className="font-bold text-2xl text-primary">Categories</h1>
        <div className="text-primary-foreground font-bold flex flex-col">
          <Link href="/sports"> Sports</Link>
          <Link href="/music"> Music</Link>
          <Link href="/politics"> Politics</Link>
          <Link href="/food"> Food</Link>
        </div>
      </div>
      {/* /////////////////////////////Right */}

      <div className="space-y-3 col-span-1">
        <p className="text-white flex items-center space-x-4">
          <FaWhatsapp className="text-primary w-[20px] h-[20px] " />
          08138979218
        </p>
        <p className="text-white flex items-center space-x-4">
          <FaFacebookF className="text-primary size-5 w-[20px] h-[20px] flex items-center " />
          Peterstone Ogechukwu
        </p>
      </div>
    </div>
  );
};

export default Footer;
