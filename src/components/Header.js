import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import Logo from "../assets/Logo.png";

const Header = () => {
  // const { loggedInUser } = useContext(UserContext);

  // subscribing to a store using a selector

  const cart = useSelector((store) => store.cart.items);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center p-5 md:p-15 bg-white shadow-md transition-shadow duration-300 ease-linear hover:shadow-lg ">
      <div className="logo-container">
        <Link to="/home">
          <img
            className="m-5 md:m-10 w-32 md:w-52"
            src={Logo}
            alt="twiggito logo"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center">
        <ul className="flex p-2 md:p-5 m-2 md:m-4">
          <li className="px-2 md:px-3 text-base md:text-xl">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-2 md:px-3">
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              className="text-base md:text-xl text-black"
              to="/home"
            >
              Home
            </Link>
          </li>
          <li className="px-2 md:px-3">
            <Link
              style={{ textDecoration: "none" }}
              className="text-base md:text-xl text-black"
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li className="px-2 md:px-3">
            <Link
              className="text-base md:text-xl text-black"
              style={{ textDecoration: "none", color: "#000" }}
              to="/contact"
            >
              Contact Us
            </Link>
          </li>

          <Link to="/cart">
            <li className="px-2 md:px-4 font-bold text-base md:text-xl">
              Cart ({cart.length})
            </li>
          </Link>

          <Link to="/">
            <button className="bg-red-500 text-white text-base md:text-lg flex justify-between px-2 md:px-3 py-1 md:py-2 rounded-lg hover:bg-red-600">
              Logout
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
