import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="flex flex-col items-center bg-gray-100 min-h-screen">
        <h2 className="font-bold text-3xl m-3 p-4">Contact us</h2>
        <form className="flex flex-col w-80">
          <input
            type="text"
            className="border border-gray-300 rounded-md p-3 mb-4 focus:outline-none"
            placeholder="Your Name"
          />
          <textarea
            className="border border-gray-300 rounded-md p-3 mb-4 focus:outline-none"
            placeholder="Message..."
            rows="4"
          ></textarea>
          <a className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600 text-center">
            <button className=" text-center">Submit</button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
