import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="bg-gray-200 w-full h-28 flex justify-center items-center">
        <div className="text-3xl text-gray-700 font-bold">
          For better experience,download <br /> the app now
        </div>
        <img
          className="w-48 ml-16 cursor-pointer"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
          alt="playStoreIcon"
        />

        <img
          className="w-48 ml-4 cursor-pointer"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
          alt="appStoreIcon"
        />
      </div>
      <div className="bg-black w-full h-28 text-gray-300 text-lg flex justify-center items-center">
        Made with ❤️ by Noob Coder
      </div>
    </div>
  );
};

export default Footer;
