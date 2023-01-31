import React from "react";
import { imageCDN } from "../Constants";
import './index.css'

const RestrountCard = ( { name, cuisines, cloudinaryImageId, lastMileTravelString, deliveryTime, costForTwoString
} ) => {
    return (
        <div className="w-56 p-2 m-2 align-middle shadow-lg rounded-bl-3xl ">
            <img src={imageCDN + cloudinaryImageId } className="rounded-lg"/>
            <h2 className="font-bold text-lg">{name}</h2>
            {/* <h3>{cuisines.join(",")}</h3> */}
            <h3>{deliveryTime} minute</h3>
            <h4>{lastMileTravelString} </h4>
            <h4>{costForTwoString} </h4>
        </div>
    )
}

export default RestrountCard;
