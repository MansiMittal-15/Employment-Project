import React from "react";
// import Hero_Image from "../assets/hero_image.webp"
import Hero_Image from "../assets/building_house.jpg";

const HeroSection = () => {
  return (
    <div
      className=" h-[90vh] text-white flex"
      style={{
        backgroundImage: `url(${Hero_Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: "-10",
      }}
    >
      <div className="bg-slate-950/60 w-full mx-auto text-white flex">
        <div className="max-w-[1200px] mx-auto h-[inherit] flex flex-col items-center justify-center gap-9">
          <div className="text-7xl text-center">
            Build Your Dream Home with the Right Experts
          </div>
          <div className="text-2xl text-center">
            Find trusted civil engineers, skilled workers, and all the materials
            you need to complete your project—at competitive prices.
          </div>
          <div className="flex gap-6">
            <button className="border-[2px] border-white p-4 text-xl rounded-xl bg-slate-950 text-white hover:bg-slate-200 hover:text-black hover:border-black ">
              Find Engineers & Workers
            </button>
            <button className="border-[2px] border-white p-4 text-xl rounded-xl bg-slate-950 text-white">
              Shop Construction Materials
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
