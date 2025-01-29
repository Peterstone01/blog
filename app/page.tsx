import React from "react";
import Hero from "./components/Hero";
import Recent from "./components/Recent";
import Music from "./components/pages/Music";
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
