import React from "react";
import icon from "../assets/github.png"

const PromotedCategoryCard = ({icon1, title, posts, color}) => { 
  const backgroundStyle = {
    backgroundColor : `${color}`,
  }
  return (
    <div className="border-4 border-black/50 rounded-3xl mt-2" style={backgroundStyle}>
      <div className="flex flex-col items-center gap-6 py-8">
        <img src={icon} alt="icon" className="w-16 rounded-2xl" />
        <div className="flex flex-col items-center"> 
          <h3 className="font-bold text-xl">Finance {title} </h3>
          <p>17,20 {posts} postings</p>
        </div>
        <button className="border-2 border-black/60 rounded-xl p-2 w-[70%] ">View</button>
      </div>
    </div>
  );
};

export default PromotedCategoryCard;
