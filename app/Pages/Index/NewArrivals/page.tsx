"use client";

import Image from "next/image";
import NewArrivalsData from "@/app/JsonData/NewArrivals.json";

import { Icon } from "@iconify/react";

export default function NewArrivals() {
  return (
    <>
        <div className="px-[5%] lg:px-[10%] py-10 lg:py-20">
            <div className="flex flex-wrap justify-between items-center gap-5 mb-20">
                <h2 className="Exo text-4xl uppercase font-semibold text-gray-800">New Arrivals</h2>
                <button className="def-btn font-semibold cursor-pointer py-2 border-s-2 border-r-2 border-transparent px-3 hover:border-black transition-all duration-300 rounded">
                    SHOP NOW
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                {NewArrivalsData.map((item, index) => (
                    <div key={index} className="sneaker-card product-card group">
                        <div className="overflow-hidden relative group">
                            <Image 
                                src={item.image}
                                alt={item.title}
                                width={500}
                                height={500}
                                className={`w-full h-full transition-all duration-300 ${item.secondImage ? "group-hover:opacity-0" : ""}`}
                            />

                            {item.secondImage && (
                                <Image 
                                    src={item.secondImage}
                                    alt={`${item.title} second`}
                                    width={500}
                                    height={500}
                                    className="w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                />
                            )}
                        </div>

                        <div className="py-3">
                            <span className="Exo text-gray-700">{item.brand}</span>
                            <h2 className="Exo text-lg text-gray-800 font-medium my-3 hover:text-black cursor-pointer">{item.title}</h2>
                            <div className="flex items-center gap-3 mb-2">
                                <h5 className="Exo font-medium line-through text-gray-500">{item.lessPrice}</h5>
                                <span className="bg-red-500 text-white px-3 rounded Exo font-medium pt-0.5">{item.off}</span>
                            </div>
                            <div className="flex items-center relative gap-3 overflow-hidden">
                                <h5 className="Exo font-semibold text-gray-700">
                                    {item.price}
                                    </h5>
                                    <div className="product-options flex items-center gap-2">
                                        <Icon icon="lets-icons:view" className="text-gray-700 product-option1 wishlist-btn hover:text-black" width="24" height="24"/>
                                        <Icon icon="eva:heart-outline" className="text-gray-700 product-option2 view-btn hover:text-black" width="24" height="24"/>
                                        <Icon icon="akar-icons:cart" className="text-gray-700 product-option3 cart-btn hover:text-black" width="24" height="24"/>
                                    </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
