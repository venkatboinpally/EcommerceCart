

import { createContext, useContext, useState } from "react";



const CartContext =createContext();



 export const CartProvider=({children})=>{


    


    const[cartData,setCartData]=useState([]);



    const addToCart=(item)=>{


        setCartData([...cartData,item])
        alert("Added to cart Successfull");
    }

    const removeCartItems =(item)=>{

       setCartData(cartData.filter((apple)=>apple !== item))

    }


    return(

        <CartContext.Provider value={{cartData,addToCart,removeCartItems}}>
            {children}
        </CartContext.Provider>
    )

    

}

export const useCartData =()=>useContext(CartContext)