import React from "react";
import { Link } from "react-router-dom";
import share from "../assets/share.png";
import icon from "../assets/github.png";

const JobCard = () => {
  return (
    <Link to={"#"}>
      <div className="border-2 border-black rounded-3xl my-2 p-4 ">
        <div className="flex gap-10 ">
          <div className="flex flex-col gap-6 w-[70%] ">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <img src={icon} alt="icon" className="w-16" />
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-bold">Sales representative</h2>
                  <p className="text-sm">Company name</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci dicta voluptas maiores voluptatem maxime quisquam.
              </p>
            </div>
            <ul className="flex gap-2 text-sm font-semibold">
              <li className="p-2  w-28 rounded-full bg-slate-100 justify-center flex items-center gap-2">
                <img src={icon} alt="ic" className="w-5 h-5" />
                Full-time
              </li>
              <li className="p-2  w-28 rounded-full bg-slate-100 justify-center flex items-center gap-2">
                <img src={icon} alt="ic" className="w-5 h-5" />
                Hybrid
              </li>
              <li className="p-2  w-28 rounded-full bg-slate-100 justify-center flex items-center gap-2">
                <img src={icon} alt="ic" className="w-5 h-5" />
                Senior
              </li>
            </ul>
          </div>
          <div className=" w-[30%] flex-row-reverse gap-2 place-items-end ">
            <Link to={"#"} className="flex gap-2 items-center justify-center ">
              <p className="font-semibold">Apply</p>
              <img src={share} alt="redirect" className="w-6 h-6 " />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
