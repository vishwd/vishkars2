import { createContext, useEffect, useState } from "react";
import { Products } from "./Products";

const BuyContext = createContext();

const getDefaultCart = () =>{
    let cart = {};
    for(let  i = 1; i<Products.length +1; i++){
        cart[i] = 0;
    }
    return cart;
}

 const BuyContextProvider = (props) => {

    const[cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1}));
    }

    const contextValue = {cartItems, addToCart, removeFromCart};

     console.log(cartItems)

    return <BuyContext.Provider value = {contextValue}>{props.children}</BuyContext.Provider>
}

export {BuyContext, BuyContextProvider}