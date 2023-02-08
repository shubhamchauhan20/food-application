import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const Store= configureStore({
    reducer: {
        //name of slice : slice
        cart: CartSlice,
    }
});

export default Store;