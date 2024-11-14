import React from "react";
import HeroImage from "../assets/hero_image.webp";

const ProductCard = ({ image, name, category, price }) => {
  return (
    <div
      className=" border-solid border-slate-900 border-2 w-[278px] h-[465px] p-2 rounded-xl "
      key={crypto.randomUUID()}
    >
      <div className="flex flex-col gap-2">
        <img
          src={HeroImage}
          alt="hero image"
          className=" h-[250px] border rounded-xl "
        />
        <div className="text-2xl flex flex-col gap-2">
          <p>Name:- Construction</p>
          <p>Category:- Paints</p>
          <p>Price:- 300/-</p>
          <button className="border-2 border-slate-900 rounded-xl py-2 flex items-center justify-center gap-2 hover:bg-slate-900 hover:text-white">
            Add to Cart <span className="text-5xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
