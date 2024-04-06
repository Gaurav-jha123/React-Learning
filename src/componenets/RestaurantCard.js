import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const { resObj } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } = resObj.info;
    return (
        <div className="res-card">
            <div className="res-img-container">
                <a href = {"" + resObj.cta.link } target="_blank" rel="noopener noreferrer" >
                <img 
                className="res-logo" 
                src={ CDN_URL + cloudinaryImageId }
                
                alt="Food Image"
                />
                </a>
            </div>
            <div className="res-detail">
                <h3 className="res-name"> {name} </h3>
                <h4 className="res-food">{cuisines.join(", ")}</h4>
                <div className="res-rating-time">
                    <h4 className="res-rating">{avgRating}</h4>
                    <h4 className="res-delivery-time">{deliveryTime} </h4>
                </div>
            </div>
        </div>
        );
    };

    export default RestaurantCard;

    //module.exports = {RestaurantCard};