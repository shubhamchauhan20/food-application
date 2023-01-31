import React from "react";
import RestrountCard from "./RestrauntCard";
import { restrautList } from "../Constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant)=> restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    //  return console.log("Filter");

    
}

const Body = () => {
    const [searchText, setSearchText] = React.useState([]);
     const [allRestaurants, setAllRestaurants] = React.useState("");
     const [filterRestaurants, setFilterRestaurants] = React.useState("");
    
    // create own hooks
    // const allRestaurants= useRestaurantData();
    // const filterRestaurants= useRestaurantData();

    // create own hook



    React.useEffect(()=>{
        getRestaurent();
    },[])

    async function getRestaurent() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }


    const isOnline= useOnline();

    if(!isOnline){return <h1>Offline, please check your Internet connection!!</h1>}

    // console.log(allRestaurants, filterRestaurants);
    // if(!allRestaurants) return console.log("shimmer", allRestaurants,filterRestaurants );;

    if(filterRestaurants?.length===0){
        return <h1>No Restraunt match your filter!!</h1>
    }

    return (allRestaurants.length===0)? <Shimmer /> : (
        <>
            <div className="p-2 my-5 bg-cyan-500 shadow-md">
                <input value={searchText} type="text" className="p-2 m-2 bg-cyan-100" placeholder="search" onChange={(e)=> setSearchText(e.target.value)} />
                <button className="p-2 m-5 hover:bg-cyan-400 text-lg shadow-sm bg-cyan-100 border-2 border-solid rounded-md" onClick={()=>{
                    setFilterRestaurants(filterData(searchText, allRestaurants))
                }}>Search</button>
            </div>
             <div className=" flex flex-wrap h-full rounded-bl-3xl">
             {filterRestaurants.map((restaurant)=>{
                return  <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
                             <RestrountCard {...restaurant.data} /> 
                        </Link> 
             })}
            </div>
        </>

    )
}



export default Body;