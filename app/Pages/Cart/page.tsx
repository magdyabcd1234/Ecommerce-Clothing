"use client"

import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import MensProductData from "@/app/JsonData/MensProduct.json"
import RandomProducts from "@/app/JsonData/RandomProducts.json"
import WomensProductData from "@/app/JsonData/WomensProduct.json"
import SneakersData from "@/app/JsonData/SneakersData.json"
import NewArrivalsData from "@/app/JsonData/NewArrivals.json"
import toast from "react-hot-toast"


import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay,Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { useWishlist } from "../Wishlist/WishlistContext"
import { useCart } from "./CartContext"

type ProductWithQty ={
    id: string;
    image: string;
    secondImage?: string;
    brand: string;
    title: string;
    price: string;
    lessPrice?: string;
    off?: string; 
    quantity: number;

}
export default function Cart() {
    const { wishlist, toggleWishlist } = useWishlist();
    const { cart, addToCart, removeFromCart } = useCart();

    const [quantities, setQuantities] = useState(
      cart.reduce((acc:Record<string,number>,id) => {
            acc[id] = 1;
            return acc;
      }, {})
    );

    const handleQtyChange = (id:string,qty:number) => {
        if (qty < 1) return;
        setQuantities({...quantities,[id]: qty})
    }

    const cartItems: ProductWithQty[] = cart.map((id) => {
        const product =
        MensProductData.find((p) => p.id === id) || 
        WomensProductData.find((p) => p.id === id) || 
        SneakersData.find((p) => p.id === id) || 
        NewArrivalsData.find((p) => p.id === id) || 
        RandomProducts.find((p) => p.id === id);
        if (!product) return null;
        return { ...product,quantity:quantities[id] || 1 };
    })
    .filter(Boolean) as ProductWithQty[];


    const total = cartItems.reduce(
        (acc,item) => acc + Number(item?.price.replace("$","") || 0) * (item?.quantity || 1),0
    );

    if(cartItems.length === 0) {
        return (
            <div className="py-20 text-center text-gray-500">
                Your Cart is empty.
            </div>
        )
    }
   

    
  return (
    <>
    <div className="px-[5%] lg:px-[10%] py-20 mt-10">
        <h2 className="text-5xl font-medium mb-10">Shopping Cart</h2>

        <div className="overflow-x-auto">
            <table className="min-w-full table-auto rounded-2xl">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-4 text-left">Product</th>
                        <th className="py-3 px-4 text-left">Price</th>
                        <th className="py-3 px-4 text-left">Quantity</th>
                        <th className="py-3 px-4 text-left">Subtotal</th>
                        <th className="py-3 px-4 text-left">Remove</th>
                    </tr>
                </thead>

                <tbody>
                    {cartItems.map((item) => (
                        <tr
                        key={item!.id}
                        className="border-b border-gray-200 hover:bg-gray-50"
                        >
                            <td className="py-4 px-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <img src={item!.image} alt={item!.title} className="w-24 sm:w-20 md:w-24 lg:w-[15%] object-cover rounded"/>
                                <div>
                                    <p className="text-gray-600 text-sm sm:text-base">{item!.brand}</p>
                                    <h3 className="font-medium Exo text-sm sm:text-lg md:text-xl">
                                        {item!.title}
                                    </h3>
                                </div>
                            </td>

                            <td className="py-4 px-4 Exo text-sm sm:text-base">
                                ${item!.price.replace("$","")}
                            </td>

                            <td className="py-4 px-4">
                                <div className="w-fit flex flex-col md:flex-row border border-transparent md:border-gray-200 rounded-lg items-center justify-between gap-2">
                                    <button
                                        onClick={() => handleQtyChange(item!.id,item!.quantity - 1)}
                                        className="px-4 py-1 text-2xl rounded md:rounded-none cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all duration-300"
                                    >
                                        -
                                    </button>
                                    <span>{item!.quantity}</span>
                                    <button
                                        onClick={() => handleQtyChange(item!.id,item!.quantity + 1)}
                                        className="px-4 py-1 text-2xl rounded md:rounded-none cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all duration-300"
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td className="py-4 px-4 Exo font-semibold text-sm sm:text-base">
                           $
                           {(
                            Number(item!.price.replace("$","")) * item!.quantity
                           ).toFixed(2)}
                            </td>
                            <td className="py-4 px-4">
                                <button
                                onClick={() => {
                                    removeFromCart(item!.id)
                                    toast.success("Removed From Cart")
                                }}
                                className="px-3 py-1 bg-red-500 cursor-pointer text-white rounded hover:bg-red-600 flex items-center gap-2 text-sm sm:text-base transition-all duration-300"
                                >
                                    <Icon icon="mdi:delete" width="20" height="20"/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-10 mt-20">
            <div className="lg:w-2/3">
            <h2 className="text-3xl font-semibold mb-4 Exo">You may also like</h2>

            <Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            autoplay={{
                delay: 2000
            }}
           
            modules={[Autoplay]}
            breakpoints={{
                1200:{ slidesPerView: 4 },
                1000:{ slidesPerView: 3 },
                600:{ slidesPerView: 2 },
                575:{ slidesPerView: 1 },
                0:{ slidesPerView: 1 },
            }}
        >
                {RandomProducts.map((item,index) => (
                    <SwiperSlide key={index}>
                        <div className="sneaker-card product-card group">
                            <div className="sneaker-img overflow-hidden">
                                <Link href={`/Pages/ShoesProduct/${item.id}`}>
                                <Image src={item.image} alt={item.title} width={500} height={500} className="w-full h-full group-hover:scale-110 transition-all duration-300"/>
                                </Link>
                            </div>
                            <div className="py-3">
                                <Link href={`/Pages/ShoesProduct/${item.id}`}>
                                <span className="Exo text-gray-700">{item.brand}</span>
                                <h2 className="Exo text-lg text-gray-800 font-medium my-3 hover:text-black cursor-pointer">{item.title}</h2>
                                </Link>
                                <div className="flex items-center relative gap-3 overflow-hidden">
                                    <h5 className="Exo font-semibold text-gray-700">{item.price}</h5>
                                    <div className="product-options flex items-center gap-2">
                                        <Link href={`/Pages/ShoesProduct/${item.id}`}>
                                            <Icon icon="lets-icons:view" className="text-gray-700 product-option1 view-btn hover:text-black" width="24" height="24" />
                                            </Link>
                                            <Icon icon={wishlist.includes(String(item.id)) ? "eva:heart-fill" : "eva:heart-outline"} onClick={() => toggleWishlist(String(item.id))} className={`cursor-pointer product-option2 wishlist-btn hover:text-black ${wishlist.includes(String(item.id)) ? "text-red-500" : "text-gray-700"}`} width="24" height="24" />
                                            <Icon 
                                            onClick={() => addToCart(item.id)}
                                            icon="akar-icons:cart" className="text-gray-700 product-option3 cart-btn hover:text-black" width="24" height="24"
                                            />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>

            <div className="lg:w-1/3 rounded-lg lg:sticky top-20 left-0 h-full">
            <h2 className="Exo text-2xl font-semibold mb-5">Cart Total</h2>
            <div className="grid grid-cols-2 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-5 border-b border-e border-gray-200">
                    <h2 className="Exo font-semibold">Subtotal</h2>
                </div>
                <div className="bg-gray-50 p-5 border-b border-gray-200">
                <h2 className="Exo font-semibold">${total.toFixed(2)}</h2>
                </div>
                <div className="bg-gray-100 p-5 border-b border-gray-200">
                <h2 className="Exo font-semibold">Total</h2>
                </div>
                <div className="bg-gray-50 p-5 border-b border-gray-200">
                <h2 className="Exo font-semibold">${total.toFixed(2)}</h2>
                </div>
            </div>
            <Link href={`/Pages/Checkout`}>
            <button className="w-full mt-5 px-6 py-3 Exo font-semibold cursor-pointer bg-black text-white rounded hover:bg-gray-800">
                Proceed to Checkout
            </button>
            </Link>
            </div>
        </div>
    </div>
    </>
  )
}
