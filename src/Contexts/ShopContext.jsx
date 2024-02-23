import React, { useState, useEffect } from "react";

import { createContext } from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
       cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=> {

    const [cartItems, setCartItems] = useState(getDefaultCart())
    
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))     
    }

    // useEffect(() => {
    //     console.log(cartItems);
    //   }, [cartItems]);
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))

    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product)=> product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
                
            }
            
        }
        // console.log(totalAmount, '2nd')
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                totalItem += cartItems[item]
            }
        }
        return totalItem;

    }

    const contextValue = {all_product, getTotalCartItems , getTotalCartAmount, cartItems, addToCart, removeFromCart}

    // console.log(contextValue, 'contextvalue')
    // console.log( 'cartItems',cartItems)
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;