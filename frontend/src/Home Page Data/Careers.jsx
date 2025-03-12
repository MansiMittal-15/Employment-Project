import React from "react";
import CareerCard from "./CareerCard";
import SmallCareerCard from "./SmallCareerCard";

const Careers = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-20 ">
      <div className="mx-[24px]">
        <div>
          <h1 className="text-4xl font-bold pb-6 text-center">
            Boost your careers
          </h1>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-3 gap-4 ">
              <CareerCard />
              <CareerCard />
              <CareerCard />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <SmallCareerCard />
              <SmallCareerCard />
              <SmallCareerCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
