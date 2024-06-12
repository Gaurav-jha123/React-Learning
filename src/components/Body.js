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
      (res) => res.info.avgRating > 4.2
    );
    setListOfRestaurant(topRatedRestaurants);
  };

  const handleClear = () => {
    setSearchText("");
  }

  const handleSearch = () => {
    const filteredRestaurant = originalListOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurant(filteredRestaurant);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const encodedUrl = encodeURIComponent(SWIGGY_RESTAURANT_API);
    //console.log(encodedUrl);
    const data = await fetch(`https://corsbypass-gviq.onrender.com/proxy?url=${encodedUrl}`);

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
      <div className="filter flex justify-between items-center pt-3 pb-3 pr-4 pl-4">
        <div className="flex">
          <button
            className="bg-red-500 px-4 py-2 mr-4 rounded-lg hover:bg-red-600 text-white"
            onClick={() => TopRated()}
          >
            Top Rated Restaurants
          </button>
          <div className="bg-yellow-500 px-4 py-2 text-black rounded-lg">
            Total Restaurants : {listOfRestaurant.length}
          </div>
        </div>

        <div>
          <input
            className="px-4 py-2 rounded shadow-md border border-gray-200 focus:border-blue-500 focus:outline-none"
            type="text"
            placeholder="🔍  Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") {  handleSearch()}}}
          />
          <button
            className="bg-red-500 ml-2 px-4 py-2 rounded-lg hover:bg-red-600 text-white"
            onClick={() => handleSearch()}
          >
            Search
          </button>
          <button
            className="bg-red-500 ml-2 px-4 py-2 rounded-lg hover:bg-red-600 text-white"
            onClick={() => handleClear()

            }
          >
            Clear
          </button>
        </div>
      </div>
      
      <div className="font-bold text-2xl ml-5 mt-5">What's on your mind?</div>
      <div className="flex flex-wrap justify-center items-center">
        {listOfRestaurant.map((resData) => (
          <Link
            key={resData.info.id}
            to={"/restaurants/" + resData.info.id}
            className="noDecoration"
          >
            {resData.info.avgRating > 4.3 ? (
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
