"use client";

import Image from "next/image";

import SneakersData from "@/app/JsonData/SneakersData.json"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay,Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import { Icon } from "@iconify/react";
import Link from "next/link";

import { useCart } from "../../Cart/CartContext";
import { useWishlist } from "../../Wishlist/WishlistContext";


export default function Sneakers() {
    const { addToCart, cart } = useCart();
    const { toggleWishlist,wishlist } = useWishlist()

  return (
    <>
       <div className="px-[5%] lg:px-[10%] py-10 lg:py-20">
        <div className="flex flex-wrap justify-between items-center gap-5">
        <h2 className="Exo text-4xl uppercase md:text-6xl font-semibold text-gray-800">
            Best Selling Sneakers
            </h2>
            <div className="flex items-center">
                <button className="z-10 sneaker-prev cursor-pointer w-12 h-12 rounded flex items-center justify-center hover:-translate-x-2 transition-all duration-300">
                    <Icon icon="guidance:right-arrow" width="30"/>
                </button>
                <div className="w-30 h-0.5 bg-gray-600"></div>
                <button className="z-10 sneaker-next cursor-pointer w-12 h-12 rounded flex items-center justify-center hover:-translate-x-2 transition-all duration-300">
                    <Icon icon="guidance:left-arrow" width="30"/>
                </button>
            </div>
            <button className="def-btn font-semibold cursor-pointer py-2 border-s-2 border-r-2 border-transparent px-3 hover:border-black transition-all duration-300 rounded">SHOP MORE</button> 
            </div>
            <Swiper
            slidesPerView={6}
            spaceBetween={20}
            loop={true}
            autoplay={{
                delay: 2000
            }}
            navigation={{
                nextEl: ".sneaker-next",
                prevEl: ".sneaker-prev"
            }}
            modules={[Autoplay, Navigation]}
            breakpoints={{
                1200:{ slidesPerView: 6 },
                1000:{ slidesPerView: 4 },
                600:{ slidesPerView: 2 },
                0:{ slidesPerView: 1 },
            }}
        >
                {SneakersData.map((item,index) => (
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
    </>
  )
}






