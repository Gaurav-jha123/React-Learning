import { useContext } from "react";
import { CDN_IMAGE_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);

  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData?.info;

  return (
    <div className="w-60 h-85 rounded overflow-hidden shadow-md my-6 mx-6 p-4 bg-white transition-shadow duration-300 ease-in-out hover:shadow-lg hover:bg-blue-50">
      <img
        className="h-40 w-full object-cover"
        src={CDN_IMAGE_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2 truncate text-center">{name}</div>
        <p className="text-gray-700 text-base truncate">
          {cuisines?.slice(0, 3).join(", ") + (cuisines && cuisines?.length > 3 && ", ...")}
        </p>
        <p className="mt-1 text-gray-500 text-sm mb-1">
          {avgRating} ⭐️ <br /> Delivery Time: {resData?.info.sla?.deliveryTime} mins <br />
          Cost for two: {costForTwo}
        </p>
      </div>
    </div>
  );
};

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