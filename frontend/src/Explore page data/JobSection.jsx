import React from "react";
import JobCard from "./JobCard";

const JobSection = ({ jobs = "3,570" }) => {
  return (
    <div className="max-w-[1200px] mx-auto py-6">
      <div className="mx-[24px]">
        <p className="m-2">We have found {jobs} job postings</p>
        <div className="flex flex-col gap-4 mb-10">
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        <div className="flex justify-center">
          <button className="w-44 border-2 border-black p-2 rounded-xl font-semibold">Load more</button>
        </div>
      </div>
    </div>
  );
};

export default JobSection;
