import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {

    const cartItems= useSelector((store)=> store.cart.items);
    const dispatch= useDispatch();
    const handlerClearCart =()=> {
        dispatch(clearCart());
    }

    return (
        <div>
            <h1 className="p-2 m-2 text-6xl">Cart items {cartItems.length}</h1>
            <div className="flex">
            {cartItems.map((item)=>(
                <FoodItem {...item} key={item.key}/>
            ))}
            </div>
            <div>
                <button className="bg-green-200 p-2 m-2" onClick={()=>handlerClearCart()}>Clear cart</button>
            </div>
        </div>
    )
}

export default Cart;
