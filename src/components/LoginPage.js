import React from "react";
import { Link } from "react-router-dom";
import spagetti from "../assets/spagetti.png";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="bg-gray-100 w-8/12 flex justify-center items-center flex-col">
        <div className="text-4xl font-bold">Welcome to Dummy App!</div>
        <div className="text-2xl"> Food Delivery app UI using API!</div>
        <Link to="/home">
          <button className="bg-red-500 text-white text-lg flex justify-between px-5 py-2 m-3 rounded-lg hover:bg-red-600">
            Login
          </button>
        </Link>
      </div>
      <div className="bg-red-500 w-4/12 flex justify-center items-center">
        <img src={spagetti} className="absolute" />
      </div>
    </div>
  );
};

export default LoginPage;
