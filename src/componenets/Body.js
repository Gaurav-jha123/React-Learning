import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"; 

const Body = () => {
    
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");
    useEffect( () => {
        console.log("UseEffect called after body component loading");
        fetchData();
    }, [] );
    //let json;
    const fetchData = async () => {
        const data  = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants);
    };

    return listOfRestaurants.length === 0 ? ( <Shimmer/> )  :
    //console.log("Body componnent will always be rendered first as part of skeleton")
     (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type = "text" className="search-box" value = {searchText} 
                    onChange={ (e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={ () => {
                        //console.log(searchText);
                        //console.log(listOfRestaurants);
                        const filteredRestaurant = listOfRestaurants.filter((result) => 
                            result.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                        //filteredListofRestaurants = copyListOfRestaurants
                        // have to implelemt the other half when nothing matches
                        //console.log(filteredListofRestaurants);
                    }}>
                    Search
                    </button>
                </div>
            <button className="filter-btn"
            onClick={() => {
                const filteredList = filteredRestaurant.filter(
                    (res) => res.info.avgRating > 4
                );
                setFilteredRestaurant(filteredList);
            }}>
                Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {
                filteredRestaurant.map((restaurant) => (
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