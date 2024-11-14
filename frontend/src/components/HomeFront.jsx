import React, { useState, useEffect } from "react";
import Jobs from "./Jobs";
import Market from "./Market";
import Workers from "./Workers";

const HomeFront = () => {
  const [click, setClick] = useState(''); 
  const [display, setDisplay] = useState({
    displayJobs: 'none',
    displayMarket: 'none',
    displayWorkers: 'none',
  }); 

  useEffect(()=>{
    if(click === "jobs") {
      setDisplay({
        displayJobs: 'block',
        displayMarket: 'none',
        displayWorkers: 'none',
      })
    } else if(click === 'market') {
      setDisplay({
        displayJobs: 'none',
        displayMarket: 'block',
        displayWorkers: 'none',
      })
    } else if(click === 'workers') {
      setDisplay({
        displayJobs: 'none',
        displayMarket: 'none',
        displayWorkers: 'block',
      })
    }  
  },[click])
  return (
    <>
      <div className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 h-[1200px]">
        <div className="flex justify-center mx-auto max-w-[1200px] h-[inherit] ">
          <div className="text-white flex flex-col items-center">
            <div className="flex gap-5 text-2xl border rounded-2xl p-5 my-10 w-[300px]">
              <div
                className="hover:text-slate-500 cursor-pointer "
                onClick={() => {
                  setClick("jobs");
                }}
              >
                Jobs
              </div>
              <div
                className="hover:text-slate-500 cursor-pointer "
                onClick={() => {
                  setClick("market");
                }}
              >
                Market
              </div>
              <div
                className="hover:text-slate-500 cursor-pointer "
                onClick={() => {
                  setClick("workers");
                }}
              >
                Workers
              </div>
            </div>
            <div className="border solid h-[900px] w-[1000px]">
              <Jobs displayJobs={display.displayJobs} />
              <Market displayMarket={display.displayMarket} />
              <Workers displayWorkers={display.displayWorkers} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFront;
