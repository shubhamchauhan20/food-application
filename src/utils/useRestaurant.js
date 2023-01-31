
import React from "react";
// import { FETCH_MENU_URL } from "../Constants"; 
import { FETCH_MENU_URL } from "../Constants";

const useRestaurant =(id) => {

    const [restaurant, setRestaurant] = React.useState();

    React.useEffect(()=>{
        getRestaurent();
    },[])

    async function getRestaurent() {
        const data = await fetch(FETCH_MENU_URL + id);
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data)
    }

    return restaurant;

}

export default useRestaurant;