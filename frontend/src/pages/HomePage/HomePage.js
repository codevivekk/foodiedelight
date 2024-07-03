import React from "react";
import { HeroBanner, Features, Restaurant, FAQ } from "../../component";

const HomePage = () => {


  return (
    <div className="py-10 px-16">
      <HeroBanner />
      <Features />
      <Restaurant />
      <FAQ />
    </div>
  );
};

export default HomePage;
