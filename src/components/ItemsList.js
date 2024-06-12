import React, { useState } from "react";
import { CDN_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemsList = ({ itemCards }) => {
  const [addItemClick, setAddItemClick] = useState(false);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setAddItemClick(true);
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {itemCards?.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item?.card?.info?.name}</span>
              <span className="font-bold">
                {" Rs. "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
            <button
              onClick={() => handleAddItem(item)}
              className="bg-slate-300 p-2  mt-2 shadow-lg  hover:bg-slate-200"
            >
              Add +
            </button>
            {/* {addItemClick && (
              <button
                onClick={() => handleRemoveItem(item)}
                className="bg-slate-300 p-2 mt-2 ml-3 shadow-lg  hover:bg-slate-200"
              >
                Remove -
              </button>
            )} */}
          </div>

          <img
            className="w-2/12 h-28 rounded-sm"
            src={CDN_IMAGE_URL + item?.card?.info?.imageId}
            alt="imageRes"
          />
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
