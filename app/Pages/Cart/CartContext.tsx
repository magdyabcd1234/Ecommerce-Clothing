"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import toast from "react-hot-toast"

type CartContextType = {
    cart: string[];
    addToCart: (id:string) => void;
    removeFromCart: (id:string) => void;
    cartCount: number;
};

const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart:() => {},
    removeFromCart:() => {},
    cartCount: 0,
})

export const CartProvider = ({children}:{children:ReactNode}) => {
    const [cart, setCart] = useState<string[]>([]);

useEffect(() => {
    const stored = localStorage.getItem("cart");
    if(stored) setCart(JSON.parse(stored));
},[]);

const addToCart = (id:string) => {
    if(cart.includes(id)) {
        toast.error("Already in cart");
        return;
    }

    const updated = [...cart, id]
    setCart(updated);
    localStorage.setItem("cart",JSON.stringify(updated))
    toast.success("Added to cart");
}

const removeFromCart = (id:string) => {
    const updated = cart.filter((item) => item !== id);
    setCart(updated);
    localStorage.setItem("cart",JSON.stringify(updated))
    }

    return(
        <CartContext.Provider 
        value={{
            cart,
            addToCart,
            removeFromCart,
            cartCount:cart.length
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

// Custom hook

export const useCart = () => {
    const context = useContext(CartContext)
    if(!context) throw new Error("useCart must be used with in CartProvider")
        return context;
}