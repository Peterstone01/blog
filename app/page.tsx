import React from "react";
import Hero from "./components/Hero";
import Recent from "./components/Recent";
import Music from "./components/pages/Music";
export const revalidate = 30; // Revalidate page every 30 seconds
const page = () => {
  return (
    <div>
      <Hero />

      <Music />
      <Recent />
    </div>
  );
};

export default page;
