import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import swiggyJSONapi from "../utils/mockData";

// #filter(resList){
//     return resList.
// }

const Body = () => {
    
    const [listOfRestaurants, setListOfRestraunt] = useState(swiggyJSONapi);

    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="filter">
            <button className="filter-btn"
            onClick={() => {
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setListOfRestraunt(filteredList);
            }}>
                Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {
                listOfRestaurants.map((restaurant) => (
                <RestaurantCard key = {restaurant.info.id} resObj = {restaurant}/>
                ))
            }
            </div>
            </div>     
    )
}
    
const styleCard = {
    backgroundColor: "#f0f0f0"
}


export default Body;

//module.export = {Body};