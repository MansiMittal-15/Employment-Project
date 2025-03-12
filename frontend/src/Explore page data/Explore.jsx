import React from "react";
import Header from "../Home Page Data/Header";
import Footer from "../Home Page Data/Footer";
import { Link } from "react-router-dom";
import FilterData from "./FilterData";
import JobSection from "./JobSection";

const Explore = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] mx-auto py-20">
        <div className="mx-[24px]">
          <div className="flex flex-col gap-10 items-center justify-center">
            <h1 className="text-4xl font-bold">Explore Jobs</h1>
            {/* search bar..  */}
            <div className=" w-[70%]">
              <div className="w-full border-4 flex  border-black/50 items-center rounded-xl justify-between">
                <div className="border-r-4 border-black/50 h-full  flex items-center w-[55%]">
                  <input
                    type="text"
                    placeholder="Enter some categories/fields/domains"
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
          <FilterData />
          <JobSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Explore;
