import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const CartPage = () => {
  const cart = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-7 p-4">
      <h1 className="text-xl font-bold">Cart</h1>
      {cart.length === 0 ? (
        <button className="bg-black px-3 py-3 m-2 rounded-lg hover:bg-slate-800 text-white">
          Your Cart is Empty :(
        </button>
      ) : (
        <button
          onClick={() => clearCartItems()}
          className="bg-red-600 px-3 py-3 m-2 rounded-lg hover:bg-red-500 text-white"
        >
          Clear Cart
        </button>
      )}

      <div className="w-6/12 m-auto">
        <ItemsList itemCards={cart} />
      </div>
    </div>
  );
};

export default CartPage;
