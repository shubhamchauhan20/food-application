import React from "react"
import { imageCDN } from "../Constants";

const FoodItem =({ name, cloudinaryImageId, price, description
}) => {
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-cyan-200">
            <img src={imageCDN + cloudinaryImageId} />
            <h2 className="font-bold text-lg">{name}</h2>
            <h3>{description}</h3>
            <h3>Rupees: {price/100}</h3>
        </div>
    )
}

export default FoodItem;