"use client"

import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import MensProductData from "@/app/JsonData/MensProduct.json"
import RandomProductsData from "@/app/JsonData/RandomProducts.json"
import WomensProductData from "@/app/JsonData/WomensProduct.json"
import SneakersData from "@/app/JsonData/SneakersData.json"
import NewArrivalsData from "@/app/JsonData/NewArrivals.json"
import toast from "react-hot-toast"
import { useCart } from "../Cart/CartContext"
import { useWishlist } from "../Wishlist/WishlistContext";



type Product ={
    id: string;
    image: string;
    secondImage?: string;
    brand: string;
    title: string;
    price: string;
    lessPrice?: string;
    off?: string; 

}
export default function Wishlist() {
    const [wishlistIds, setWishlistIds] = useState<string[]>([]);
    const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);
    const { wishlist, toggleWishlist } = useWishlist();

    useEffect(() => {
        const storedWishlist = localStorage.getItem("wishlist");
        if (!storedWishlist) return;

        const ids:string[] = JSON.parse(storedWishlist);
        setWishlistIds(ids);

        const products: Product[] = wishlist.map((id) => {
            return (
                MensProductData.find((p) => p.id === id) || 
                WomensProductData.find((p) => p.id === id) || 
                SneakersData.find((p) => p.id === id) || 
                NewArrivalsData.find((p) => p.id === id) || 
                RandomProductsData.find((p) => p.id === id) || 
                null
            )
        }).filter(Boolean) as Product[];
    
        setWishlistProducts(products);
    }, [wishlist]); // ← لاحظ الربط بالـ context

    const removeFromWishlist = (id:string) => {
        const updatedIds = wishlistIds.filter((itemId) => itemId !== id)
        setWishlistIds(updatedIds)
        setWishlistProducts((prev) => prev.filter((p) => p.id !== id));
        localStorage.setItem("wishlist", JSON.stringify(updatedIds))
        toast.success("Removed From Wishlist")
    };

    const { addToCart } = useCart();

    
  return (
    <>
        <div className="px-[5%] lg:px-[10%] py-20">
            {wishlistProducts.length === 0 ? (
                <div className="flex justify-center items-center flex-col text-center py-20 text-gray-500">
                    <Icon icon="proicons:heart" width="100" height="100"/>
                    <h3 className="Exo font-semibold text-3xl text-gray-800 my-2">Wishlist is empty.</h3>
                    <p className="tracking-wide">You don't have any products added in your wishlist. Search and save items to your Wishlist</p>
                    <Link href="/Pages/MensProducts" className="mt-5 px-4 py-2 bg-black rounded text-white text-xl">Shop Now</Link>
                </div>
            ): (
                <>
                <h2 className="my-8 text-5xl font-semibold Exo">My Wishlist :</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {wishlistProducts.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            <div className="overflow-hidden">
                                <Image 
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full lg:w-[80%] object-cover h-full rounded group-hover:scale-105 transition duration-500 ease-in-out"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className="py-3">
                                <Link href={`/app/Pages/MensProducts/${item.id}`}>
                                    <span className="Exo text-gray-700">{item.brand}</span>
                                    <h2 className="Exo text-lg text-gray-800 font-medium my-3 hover:text-black cursor-pointer">{item.title}</h2>
                                </Link>
                                <div className="flex items-center gap-3 mb-2">
                                    <h5 className="Exo font-semibold text-gray-800">{item.lessPrice}</h5>
                                    <span className="bg-red-500 text-white px-3 rounded Exo font-semibold pt-0.5">{item.off}</span>
                                </div>
                                <div className="flex items-center gap-3 mt-3">
                                    <button
                                        onClick={() => removeFromWishlist(item.id)}
                                        className="p-2 rounded-full bg-black cursor-pointer text-white hover:bg-gray-800 transition"
                                    >
                                        <Icon icon="akar-icons:cart" width="20" height="20"/>
                                    </button>

                                    <button
                                        onClick={() => toggleWishlist(item.id)}
                                        className="p-2 rounded-full bg-red-500 cursor-pointer text-white hover:bg-red-600 transition"
                                    >
                                        <Icon icon="mdi:delete" width="20" height="20"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </>
            )}
        </div>
    </>
  )
}
