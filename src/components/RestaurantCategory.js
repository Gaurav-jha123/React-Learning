import React from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div
        className="w-6/12 mx-auto my-3 h-auto bg-gray-100 shadow-lg p-4 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between ">
          <span className="font-bold text-xl">
            {data?.title} - ({data?.itemCards?.length})
          </span>
          <span className="cursor-pointer">⌄</span>
        </div>
        {showItems && <ItemsList itemCards={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
