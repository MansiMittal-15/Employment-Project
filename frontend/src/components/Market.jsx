import React from "react";
import ProductCard from "./ProductCard";

const Market = ({ displayMarket }) => {
  return (
    <div
      style={{ display: displayMarket }}
      className="border-4 border-slate-900 mx-auto max-w-[1200px] "
    >
      <div className="flex flex-wrap gap-4 p-4">
        {Array.from({ length: 15 }).map((val, index) => {
          return <ProductCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default Market;
