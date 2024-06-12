import { useContext } from "react";
import { CDN_IMAGE_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);

  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData?.info;

  return (
    <div className="w-[200px] ml-6 mt-5 bg-gray-100 p-3 rounded-lg h-80 hover:bg-gray-300 m-3">
      <img
        className="w-full max-h-36"
        src={CDN_IMAGE_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h2 className="mt-2 text-lg">
        <strong>{name?.length > 20 ? name?.slice(0, 18) : name}</strong>
      </h2>
      <h4>
        {cuisines?.slice(0, 3).join(", ")}
        {cuisines && cuisines?.length > 3 && "..."}
      </h4>

      <h4>
        {avgRating} ⭐️ {resData?.info.sla?.deliveryTime} mins
      </h4>

      <h4>{costForTwo}</h4>
    </div>
  );
};

// Higher order component - takes input as a restaurant card component and returns a enhanced component

export const withBestSellerLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-gray-800 text-white absolute m-2 p-2">
          Best Seller
        </label>

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
