import { useEffect } from "react";
import React from "react";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { imageCDN } from "../Constants";


const useParams = require("react-router-dom").useParams;

const RestrauntMenu =() => {
    const params = useParams(); //Use this to read URL 
    const { id } = params;

    // const [restaurant, setRestaurant] = React.useState(null);
    const restaurant= useRestaurant(id);

    if(!restaurant) return null;

    return (!restaurant) ? <Shimmer /> : (
        <div className="menu">
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurant.name}</h2>
                <img src={imageCDN + restaurant?.cloudinaryImageId} />
                <h3>{restaurant.area}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.avgRating} stars</h3>
                <h3>{restaurant.costForTwoMsg}</h3>
                {/* {console.log((name))} */}
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item) => (
                   <li key={item.id}>{item.name}</li>
          ))}

          {/* {Object.values(restaurant?.menu?.items || {restaurant?.menu?.items})} */}
        </ul>
            </div>
        </div>
    )
}

export default RestrauntMenu;