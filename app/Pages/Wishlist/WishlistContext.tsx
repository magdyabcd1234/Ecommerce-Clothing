"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import toast from "react-hot-toast"

type WishlistContextType = {
    wishlist: string[];
    toggleWishlist:(id:string) => void;
    wishlistCount: number;
};

const WishlistContext = createContext<WishlistContextType>({
    wishlist: [],
    toggleWishlist:() => {},
    wishlistCount: 0,
})

export const WishlistProvider = ({children}:{children:ReactNode}) => {
    const [wishlist, setWishlist] = useState<string[]>([]);

useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if(stored) setWishlist(JSON.parse(stored));
},[]);

const toggleWishlist = (productId:string) => {
    let updated: string[];

    if(wishlist.includes(productId)) {
        updated = wishlist.filter((id) => id !== productId)
        toast.error("Removed From Wishlist")
    } else {
        updated = [...wishlist,productId];
        toast.success("Added to Wishlist");
    }

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated))
}


    return(
        <WishlistContext.Provider 
        value={{
            wishlist,
            toggleWishlist,
            wishlistCount: wishlist.length
        }}
        >
            {children}
        </WishlistContext.Provider>
    )
}

// Custom hook

export const useWishlist = () => {
    const context = useContext(WishlistContext)
    if(!context) throw new Error("useWishlist must be used with in WishlistProvider")
        return context;
}