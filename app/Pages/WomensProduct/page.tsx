"use client";

import WomensProductData from "@/app/JsonData/WomensProduct.json"
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

import { useCart } from "@/app/Pages/Cart/CartContext";
import { useWishlist } from "@/app/Pages/Wishlist/WishlistContext";
import { useState } from "react";

type Product = typeof WomensProductData[0]

const sortOptions = [
    { key: "default", label: "Default" },
    { key: "latest", label: "Latest" },
    { key: "oldest", label: "Oldest" },
    { key: "low", label: "Low ➜ High" },
    { key: "high", label: "High ➜ Low" },
]

export default function WomensProduct() {

    const [sortOption, setSortOption] = useState("default");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [visibleCount, setVisibleCount] = useState(16);

    const sortedProducts = [...WomensProductData].sort((a, b) => {


        switch (sortOption) {
            case "low": 
                return Number(a.price.replace("$", "")) - Number(b.price.replace("$",""))

                case "high": 
                return Number(b.price.replace("$", "")) - Number(a.price.replace("$",""));

                case "latest": 
                return b.id.localeCompare(a.id)

                case "default": 
                default:
                return a.id.localeCompare(b.id)

        } 
    })

    const { addToCart, cart } = useCart();
    const { wishlist, toggleWishlist } = useWishlist();

  return (
    <>
                <div className="Page-section relative">
            <div className="px-[5%] lg:px-[10%] py-40 pb-10">
                <h2 className="text-5xl md:text-7xl lg:text-8xl text-gray-300 font-bold Exo uppercase">Women Clothing</h2>
            </div>
            <div className="absolute top-1/2 right-0 translate-y-4/2 md:translate-y-1/2 w-[60%] md:w-[40%] bg-gray-100 h-10"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 md:-translate-y-1/2 w-[40%] md:w-[5%] lg:w-[8%] bg-gray-100 h-10">
            </div>
        </div>

        <div className="px-[5%] lg:px-[10%] py-20">
            <div className="py-5 mb-10 flex justify-between items-center">
                <div className="Exo text-2xl font-semibold text-gray-700">Showing ({WomensProductData.length}) products </div>

                <div className="relative cursor-pointer">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="px-4 py-2 cursor-pointer border border-gray-300 rounded hover:bg-gray-100 flex items-center gap-2">
                    sort: {sortOptions.find((o) => o.key === sortOption)?.label}
                </button>

                {dropdownOpen && (
                    <div className="absolute cursor-pointer right-0 mt-2 w-52 bg-white border border-gray-200 rounded shadow-lg z-10">
                        {sortOptions.map((option) => (
                            <button key={option.key} className="w-full text-left cursor-pointer px-4 py-2 hover:bg-gray-100" onClick={() => {
                                setSortOption(option.key);
                                setDropdownOpen(false)
                            }}>
                                {option.label}
                            </button>
                        ))}
                    </div>
                )}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {sortedProducts.slice(0, visibleCount).map((product: Product, index: number) => (
                    <div key={index} className="sneaker-card product-card group">
                        <Link href={`/Pages/WomensProduct/${product.id}`}>
                            <div className="overflow-hidden rounded-2xl relative group">
                                <Image 
                                    src={product.image}
                                    alt={product.title}
                                    width={500}
                                    height={500}
                                    className={`w-full h-full transition-all duration-300 group-hover:scale-105 ${product.secondImage ? "group-hover:opacity-0" : ""}`}
                                />

                                {product.secondImage && (
                                    <Image 
                                        src={product.secondImage}
                                        alt={`${product.title} second`}
                                        width={500}
                                        height={500}
                                        className="w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                    />
                                )}
                            </div>
                        </Link>

                        <div className="py-3">
                            <Link href={`/Pages/WomensProduct/${product.id}`}>
                                <span className="Exo text-gray-700">{product.brand}</span>
                                <h2 className="Exo text-lg text-gray-800 font-medium my-3 hover:text-black cursor-pointer">{product.title}</h2>
                            </Link>
                            <div className="flex items-center gap-3 mb-2">
                                <h5 className="Exo font-medium line-through text-gray-500">{product.lessPrice}</h5>
                                <span className="bg-red-500 text-white px-3 rounded Exo font-medium pt-0.5">{product.off}</span>
                            </div>
                            <div className="flex items-center relative gap-3 overflow-hidden">
                                <h5 className="Exo font-semibold text-gray-700">{product.price}</h5>
                                <div className="product-options flex items-center gap-2">
                                    <Link href={`/Pages/WomensProduct/${product.id}`}>
                                        <Icon icon="lets-icons:view" className="text-gray-700 product-option1 view-btn hover:text-black" width="24" height="24"/>
                                    </Link>

                                    <Icon icon={wishlist.includes(product.id) ? "eva:heart-fill" : "eva:heart-outline"} onClick={() => toggleWishlist(product.id)} className={`cursor-pointer product-option2 wishlist-btn hover:text-black ${wishlist.includes(product.id) ? "text-red-500" : "text-gray-700"}`} width="24" height="24"/>
                                    <Icon onClick={() => addToCart(product.id)} icon="akar-icons:cart" className="text-gray-700 product-option3 cart-btn hover:text-black" width="24" height="24"/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <button onClick={() => {
                    if (visibleCount < sortedProducts.length) {
                            setVisibleCount((prev) => prev + 16)
                    } else {
                        setVisibleCount(16)
                    }
                }} className="px-8 py-3 cursor-pointer border border-gray-300 rounded hover:bg-gray-100 Exo font-medium">
                    {visibleCount < sortedProducts.length ? "Show More" : "Show Less"}
                </button>
            </div>
        </div>
    </>
  )
}
