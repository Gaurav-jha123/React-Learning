import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import Logo from "../assets/Logo.png";

const Header = () => {  
  const cart = useSelector((store) => store.cart.items);
  const onlineStatus = useOnlineStatus();
  
  return (
    <div className="flex justify-between items-center p-4 md:p-8 bg-red-500 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
      <Link to="/home" className="flex items-center space-x-4">
        <img
          className="w-20 h-20 md:w-24 md:h-24 object-contain transform transition-transform duration-500 ease-in-out hover:scale-110"
          src={Logo}
          alt="logo"/>
        <span className="text-4xl text-white font-bold">Food Hunt</span>
      </Link>

      <ul className="hidden md:flex items-center space-x-4 font-semibold text-white text-base md:text-xl">
        <li>
          Online Status:  {onlineStatus ? <span className="text-green-500">✅</span> : <span className="text-red-500">🔴</span>}
        </li>
        <li>
          <Link
            className="transition-colors duration-500 ease-in-out hover:text-yellow-500"
            to="/home"
          >Home</Link>
        </li>
        <li>
          <Link
            className="transition-colors duration-500 ease-in-out hover:text-yellow-500"
            to="/about"
          >About Us</Link>
        </li>
        <li>
          <Link
            className="transition-colors duration-500 ease-in-out hover:text-yellow-500"
            to="/contact"
          >Contact Us</Link>
        </li>
        <li>
          <Link
            className="transition-colors duration-500 ease-in-out hover:text-yellow-500"
            to="/cart"
          >Cart ({cart.length})</Link>
        </li>
        <li>
          <Link to="/">
            <button className="bg-yellow-500 text-red-500 font-bold px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors duration-300">
              Logout
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;