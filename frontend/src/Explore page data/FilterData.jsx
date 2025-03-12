import React from "react";
import SelectOption from "./SelectOption";

const FilterData = () => {
  const optionsArray = [
    ["Date Posted", "1 Month ago", "2 Months ago", "3 Months ago"],
    ["Salary", "5 LPA", "10 LPA", "15 LPA", "20 LPA"],
    ["Job type", "Part-time", "Full-time"],
    [
      "Experience level",
      "Fresher",
      "1 years",
      "2 years",
      "3 years",
      "5+ years",
    ],
    ["Location", "On-site", "Remote", "Hybrid"],
  ];
  return (
    <div className="max-w-[1200px] mx-auto py-10 border-b-2 ">
      <div className="mx-[24px]">
        <div className="flex items-center gap-6 ">
          <p className="font-bold w-[10%]">Filter By:-</p>
          <div className="flex items-center justify-between gap-4 w-[90%]">
            {optionsArray.map((option) => {
              return <SelectOption key={option} options={option} name={option[0]} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterData;
