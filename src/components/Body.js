import RestaurantCard, { withBestSellerLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";
import Footer from "./Footer";

const Body = () => {
  // whenever state variable changes, react triggers a reconciliation cycle(re-renders the component)
  const [originalListOfRestaurant, setOriginalListOfRestaurant] = useState([]);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const TopRated = () => {
    const topRatedRestaurants = originalListOfRestaurant.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurant(topRatedRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURANT_API);

    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setOriginalListOfRestaurant(restaurants);
    setListOfRestaurant(restaurants);
    console.log("api response", json);
  };

  const RestaurantBestSeller = withBestSellerLabel(RestaurantCard);

  const { setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="p-3 ml-4">
          <input
            className="px-7 py-2 rounded-lg focus:border-b-2 focus:border-gray-200 focus:outline-none"
            type="text"
            placeholder="🔍  Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            className="bg-red-500 px-5 py-2 m-2 rounded-lg hover:bg-red-600 text-white"
            onClick={() => {
              const filteredSearch = originalListOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurant(filteredSearch);
            }}
          >
            Search
          </button>
          <button
            className="bg-red-500 px-5 py-2 m-2 rounded-lg hover:bg-red-600 text-white"
            onClick={() => {
              setListOfRestaurant(originalListOfRestaurant);
              setSearchText("");
            }}
          >
            Clear
          </button>
        </div>
        <button
          className="bg-red-500 px-2 py-4 ml-5 rounded-lg hover:bg-red-600 text-white"
          onClick={() => TopRated()}
        >
          Top Rated Restaurants
        </button>
        <button className="bg-red-500 px-2 py-4 ml-5 rounded-lg hover:bg-red-600 text-white">
          Total Restaurants : {listOfRestaurant.length}
        </button>
      </div>
      {/* <div className="px-5">
        <label>User Name</label>
        <input
          className="border border-black mt-3"
          type="text"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div> */}
      <div className="font-bold text-2xl ml-5 mt-5">What's on your mind?</div>
      <div className="flex flex-wrap justify-center items-center">
        {listOfRestaurant.map((resData) => (
          <Link
            key={resData.info.id}
            to={"/restaurants/" + resData.info.id}
            className="noDecoration"
          >
            {resData.info.avgRating > 4.2 ? (
              <RestaurantBestSeller resData={resData} />
            ) : (
              <RestaurantCard resData={resData} />
            )}
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Body;
