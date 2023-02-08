import { useEffect } from "react";
import React from "react";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { imageCDN } from "../Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";


const useParams = require("react-router-dom").useParams;

const RestrauntMenu =() => {
    const params = useParams(); //Use this to read URL 
    const { id } = params;

    // const [restaurant, setRestaurant] = React.useState(null);
    const restaurant= useRestaurant(id);

    const dispatch= useDispatch();
    const addFoodItem= (item)=> {
        dispatch(addItem(item))
    }
    // const handlerAddItems =() =>{
    //     dispatch(addItem("Grapes"))
    // }

    if(!restaurant) return null;

    return (!restaurant) ? <Shimmer /> : (
        <div className="flex">
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
            {/* <div><button className="bg-green-200" onClick={()=> handlerAddItems()}>add</button></div> */}
            <div className="flex">
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item) => (
                   <li key={item.id}>{item.name} - {<button className="bg-green-200" onClick={()=>addFoodItem(item)}>add</button>}</li>
          ))}

          {/* {Object.values(restaurant?.menu?.items || {restaurant?.menu?.items})} */}
        </ul>
            </div>
        </div>
    )
}

export default RestrauntMenu;