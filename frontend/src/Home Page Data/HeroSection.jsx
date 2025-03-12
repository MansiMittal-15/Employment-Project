import React from "react";
import greenTick from "../assets/check.png";
import { Link } from "react-router-dom";
import Hero_Image from "../assets/bg1.jpg"

const HeroSection = () => {
  return (
    <>
      <div
        className="text-white flex max-w-[1200px] mx-auto "
        style={{
          backgroundImage: `url(${Hero_Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "-10",
        }}
      >
        <div className="bg-white/30 w-full text-black pt-52 ">
          <div className="max-w-[1200px] mx-auto h-[inherit] flex flex-col gap-9 items-center border-b-2 pb-20 ">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="text-sm bg-slate-200/60 text-orange-500 p-2 border rounded-3xl flex gap-2 justify-center items-center">
                <span>
                  <img src={greenTick} alt="green tick" className="w-6" />
                </span>
                No. 1 Work finding & providing platform
              </div>
              <div className="text-7xl font-bold text-center w-[60%]">
                Over <span className="text-blue-500">5,000 Jobs</span> are
                waiting for you!
              </div>
              <div className="text-lg text-center w-[40%]">
                Work with the best companies, hire the experienced
                professionals.
              </div>
            </div>
            <div className=" w-[70%]">
              <div className="w-full border-4 flex  border-black/50 items-center rounded-xl justify-between">
                <div className="border-r-4 border-black/50 h-full  flex items-center w-[55%]">
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className=" w-full p-4 outline-none rounded-xl"
                  />
                </div>
                <div className="flex items-center justify-between w-[45%]  ">
                  <span className=" w-full ">
                    <input
                      type="text"
                      placeholder="Enter Location"
                      className="w-full p-4 outline-none "
                    />
                  </span>
                  {/* <button className="border m-2 rounded-xl text-white w-36 px-6 bg-black/85  font-semibold p-2 hover:bg-black text-lg"> */}
                  <button className="border rounded-xl text-black w-36 bg-green-500 mr-2  font-semibold p-2 hover:bg-green-600 text-lg">
                    Search
                  </button>
                </div>
              </div>
              <div className="justify-self-end text-sm ">
                <Link to="/" className="text-blue-500">
                  Advanced search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
