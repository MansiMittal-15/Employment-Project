import React from "react";
import image from "../assets/building_house.jpg"

const CareerCard = ({image1, title, posts}) => {
  return (
    <div className="border-4 border-black/50 rounded-3xl mt-2 p-1">
      <div className="flex flex-col gap-6 p-2">
        <img src={image} alt="icon" className=" rounded-2xl" />
        <div className="flex flex-col px-3">
          <h3 className="font-bold text-xl">Finance {title} </h3>
          <p>17,20 {posts} postings</p>
        </div> 
      </div>
    </div>
  );
};

export default CareerCard;
