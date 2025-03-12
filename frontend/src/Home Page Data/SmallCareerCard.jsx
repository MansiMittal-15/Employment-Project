import React from "react";
import icon from "../assets/github.png";
import redirect from "../assets/share.png";
import { Link } from "react-router-dom";

const SmallCareerCard = ({ image, title, posts }) => {
  return (
    <div className="border-4 border-black/50 rounded-3xl mt-2 p-2">
      <div className="flex justify-between items-center gap-6 p-2">
        <div className="flex items-center gap-2">
          <img src={icon} alt="icon" className="w-16 rounded-full" />
          <h3 className="font-bold text-xl">Finance {title} </h3>
        </div>
        <Link to={"/"}>
          <img src={redirect} alt="re-direct" className="w-8" />
        </Link>
      </div>
    </div>
  );
};

export default SmallCareerCard;
