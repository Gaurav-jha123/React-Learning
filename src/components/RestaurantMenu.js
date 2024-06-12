import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuShimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  // console.log("Hook data", resInfo);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <MenuShimmer />;
  }

  const { name, cuisines, costForTwoMessage, city, locality, areaName } =
    resInfo?.cards[2]?.card?.card?.info;

  // console.log(
  //   "card",
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className=" flex justify-center flex-col mt-4">
      <div className="flex justify-center items-center flex-col">
        <div className="font-bold text-xl">{name}</div>

        <div>
          {cuisines.join(", ")} - {costForTwoMessage}
        </div>
        <div>{(locality || areaName, city)}</div>
      </div>

      {/* Accordions category */}

      {categories.map((category, index) => {
        // controlled component
        return (
          <RestaurantCategory
            key={category?.card?.card?.name}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
