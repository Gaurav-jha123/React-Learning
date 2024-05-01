import {LOGO_URL } from "../utils/constants";

import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


// by default useEffect internally needs to be re rendered again and again but 
// in case when we use somekind of dependency Array 
// it will be only rendered once like []
// if dependency array is [btnNameReact] => called everytime btnNameReact is updated

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
    //console.log("Header Rendered Here");

    // useEffect(() => {
    //     //console.log("useEffect called");
    // }, [btnNameReact]);
    return (
        <div className="header">
            <div className="logo-container">
                <img className = "logo" src = {LOGO_URL}/>
            </div>
            <div className="nav-items">
            <ul>
            <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
            <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
                <button className="login-btn" 
                onClick={ () => {
                    btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                }}>
                {btnNameReact}
                </button>
            </ul>
        </div>
        </div>
        
    )
};

//module.exports = {Header};
export default Header;