"use client";
import React from "react";

import { navlinks } from "./../constant/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="px-2 md:px-10 ">
      {/* ////////////////////////logo navbar (top) */}
      <div className=" flex justify-center md:justify-between px-5 py-8 items-center">
        {/* /////////////////////left */}
        <div className=" flex flex-col justify-end items-end">
          <Link
            href="/"
            className="font-extrabold text-2xl md:text-4xl lg:text-5xl  "
          >
            STONE<span>web</span>
          </Link>
          <h1 className="font-bold text-2 md:text-3xl lg:text-4xl  text-primary">
            BLOG DESK
          </h1>

          {/* <ModeToggle /> */}
        </div>
        {/* ////////////////////////Right */}
        <div className="h-[100px] bg-gray-100 hidden md:block w-[70%]"> </div>
      </div>
      {/* //////////////////////////////second navbar */}
      <div className="bg-gray-100 py-5  px-10">
        <div className="flex justify-center items-center space-x-5">
          {navlinks.map((link) => (
            <div key={link.href}>
              {pathName === link.href ? (
                <div>
                  <Link className="font-bold text-primary" href={link.href}>
                    {link.name}
                  </Link>
                </div>
              ) : (
                <div>
                  <Link className="font-semibold " href={link.href}>
                    {link.name}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
