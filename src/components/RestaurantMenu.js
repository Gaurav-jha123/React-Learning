import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   const restaurantData = json?.data?.cards?.map(x => x.card)?.
  //                            find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
  //   setResInfo(restaurantData);
  //   console.log(restaurantData);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    json?.data?.cards.find(x=> x.groupedCard)?.
    groupedCard?.cardGroupMap?.REGULAR?.
    cards?.map(x => x.card?.card)?.
    filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
    map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;