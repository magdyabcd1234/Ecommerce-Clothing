"use client";

import Image from "next/image";
import NewArrivalsData from "@/app/JsonData/NewArrivals.json";
import { Icon } from "@iconify/react";


import NewArrivalsImg6 from "@/public/NewArrival-6.webp";
import NewArrivalsImg7 from "@/public/NewArrival-7.webp";
import NewArrivalsImg8 from "@/public/NewArrival-8.webp";
import NewArrivalsImg9 from "@/public/NewArrival-9.webp";
import NewArrivalsImg10 from "@/public/NewArrival-10.webp";
import NewArrivalsImg11 from "@/public/NewArrival-11.webp";

import SneakersData from "@/app/JsonData/SneakersData.json";

import shoes4 from "@/public/Shoes4.jpg"
import shoes5 from "@/public/Shoes5.jpg"
import shoes6 from "@/public/Shoes6.jpg"
import shoes7 from "@/public/Shoes7.webp"
import shoes8 from "@/public/Shoes8.webp"
import shoes9 from "@/public/Shoes9.webp"

const newarrivalData = [
    {
        id: "nv1",
        image: NewArrivalsImg6,
        brand: "Quisuito",
        title: "Minimal Street Sneakers – Clean Everyday Style",
        price: "$102.00",
    },

    {
        id: "nv2",
        image: NewArrivalsImg7,
        brand: "Zenuro",
        title: "Urban Runner Sneakers – Lightweight Comfort",
        price: "$28.00",
    },

    {
        id: "nv3",
        image: NewArrivalsImg8,
        brand: "Zenuro",
        title: "Classic Low-Top Sneakers – Casual Daily Wear",
        price: "$12.00",
        off: "-37% OFF",
        lessPrice: "$151"
    },

    {
        id: "nv4",
        image: NewArrivalsImg9,
        brand: "Zenuro",
        title: "Sport Flex Sneakers – Breathable & Stylish",
        price: "$64.00",
    },

    {
        id: "nv5",
        image: NewArrivalsImg10,
        brand: "Quisuito",
        title: "Modern Fit Sneakers – Street Ready Design",
        price: "$38.00",
    },

    {
        id: "nv6",
        image: NewArrivalsImg11,
        brand: "Quisuito",
        title: "Premium Comfort Sneakers – All Day Support",
        price: "$119.00",
    }
]

const sneakerData = [
    {
        id: "sk1",
        image: shoes4,
        brand: "Zenuro",
        title: "Air Flex Sneakers – Lightweight Performance",
        price: "$ 55.00"
    },
    {
        id: "sk2",
        image: shoes5,
        brand: "dumark",
        title: "Street Runner Pro – Everyday Sport Style",
        price: "$ 60.00"
    },

    {
        id: "sk3",
        image: shoes6,
        brand: "Quisuito",
        title: "Ultra Boost Sneakers – Maximum Comfort Fit",
        price: "$ 119.00"
    },
    {
        id: "sk4",
        image: shoes7,
        brand: "Quisuito",
        title: "Dynamic Move Sneakers – Flexible & Durable",
        price: "$ 76.00"
    },
    {
        id: "sk5",
        image: shoes8,
        brand: "Quisuito",
        title: "Classic Street Sneakers – Timeless Look",
        price: "$ 75.00"
    },
    {
        id: "sk6",
        image: shoes9,
        brand: "Quisuito",
        title: "Power Walk Sneakers – Comfort in Motion",
        price: "$ 79.00"
    },
]

import { useCart } from "@/app/Pages/Cart/CartContext";
import { useWishlist } from "@/app/Pages/Wishlist/WishlistContext";

export default function Collections() {

    const { addToCart, cart } = useCart();
    const { wishlist, toggleWishlist } = useWishlist();

  return (
    <>
           <div className="Page-section relative">
            <div className="px-[5%] lg:px-[10%] py-40 pb-10">
                <h2 className="text-6xl md:text-7xl lg:text-8xl text-gray-300 font-bold Exo uppercase">Collections</h2>
            </div>
            <div className="absolute top-1/2 right-0 translate-y-4/2 md:translate-y-1/2 w-[60%] md:w-[45%] bg-gray-100 h-10"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 md:-translate-y-1/2 w-[40%] md:w-[5%] lg:w-[8%] bg-gray-100 h-10">
            </div>
        </div>

    <div className="px-[5%] lg:px-[10%] py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {NewArrivalsData.slice(0, 3).map((item, index) => (
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
                <div className="w-full lg:w-1/2 bg-[#f8f9fa] rounded">
                    <div className="p-20">
                        <h2 className="Exo text-4xl mb-5 font-semibold text-gray-800">CASUAL FIT SELECTION</h2>
                        <p className="Exo text-lg mb-5 text-gray-700">Lorem ipsum dolor sit, amet consectetur
                             adipisicing elit. Corporis incidunt, modi quasi ullam quas debitis harum nobis 
                             cupiditate. Nostrum nulla ea sit itaque accusamus. Dicta.</p>
                             <p className="Exo text-lg mb-5 text-gray-700">Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Temporibus ullam quisquam nobis! Quasi nobis odio mollitia
                                  praesentium vero obcaecati, blanditiis dolores! Voluptatibus laudantium delectus
                             quos!</p>
                             <p className="Exo text-lg mb-5 text-gray-700">Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Alias veniam nesciunt recusandae quas iure totam suscipit, 
                                soluta porro molestias eligendi dolores ducimus? Mollitia impedit dolorem fugit 
                            distinctio deleniti vitae aperiam!</p>
                    </div>
                </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 pt-10">
                {newarrivalData.map((item, index) => (
                    <div key={index} className="sneaker-card product-card group">
                             <div className="overflow-hidden relative group">
                            <Image 
                                src={item.image}
                                alt={item.title}
                                width={500}
                                height={500}
                                className="w-full h-full transition-all group-hover:scale-110 duration-300"
                            />


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

    <div className="px-[5%] lg:px-[10%] py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-5">       
        <div className="w-full lg:w-1/2 bg-[#f8f9fa] rounded">
        <div className="p-20">
                        <h2 className="Exo text-4xl mb-5 font-semibold text-gray-800">RUNNING COLLECTION</h2>
                        <p className="Exo text-lg mb-5 text-gray-700">Lorem ipsum dolor sit, amet consectetur
                             adipisicing elit. Corporis incidunt, modi quasi ullam quas debitis harum nobis 
                             cupiditate. Nostrum nulla ea sit itaque accusamus. Dicta.</p>
                             <p className="Exo text-lg mb-5 text-gray-700">Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Temporibus ullam quisquam nobis! Quasi nobis odio mollitia
                                  praesentium vero obcaecati, blanditiis dolores! Voluptatibus laudantium delectus
                             quos!</p>
                             <p className="Exo text-lg mb-5 text-gray-700">Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Alias veniam nesciunt recusandae quas iure totam suscipit, 
                                soluta porro molestias eligendi dolores ducimus? Mollitia impedit dolorem fugit 
                            distinctio deleniti vitae aperiam!</p>
                    </div>
        </div>
            <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SneakersData.slice(0, 3).map((item,index) => (
                    <div key={index}>
                        <div className="sneaker-card product-card group">
                            <div className="sneaker-img overflow-hidden">
                                
                                <Image src={item.image} alt={item.title} width={500} height={500} className="w-full h-full group-hover:scale-110 transition-all duration-300"/>
                               
                            </div>
                            <div className="py-3">
                                
                                <span className="Exo text-gray-700">{item.brand}</span>
                                <h2 className="Exo text-lg text-gray-800 font-medium my-3 hover:text-black cursor-pointer">{item.title}</h2>

                                <div className="flex items-center relative gap-3 overflow-hidden">
                                    <h5 className="Exo font-semibold text-gray-700">{item.price}</h5>
                                    <div className="product-options flex items-center gap-2">
                                        
                                            <Icon icon="lets-icons:view" className="text-gray-700 product-option1 view-btn hover:text-black" width="24" height="24" />
                                         
                                            <Icon icon={wishlist.includes(String(item.id)) ? "eva:heart-fill" : "eva:heart-outline"} onClick={() => toggleWishlist(String(item.id))} className={`cursor-pointer product-option2 wishlist-btn hover:text-black ${wishlist.includes(String(item.id)) ? "text-red-500" : "text-gray-700"}`} width="24" height="24" />
                                            <Icon 
                                            onClick={() => addToCart(item.id)}
                                            icon="akar-icons:cart" className="text-gray-700 product-option3 cart-btn hover:text-black" width="24" height="24"
                                            />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pt-10">
            {sneakerData.map((item, index) => (
                <div key={index}>
                                            <div className="sneaker-card product-card group">
                            <div className="sneaker-img overflow-hidden">
                                
                                <Image src={item.image} alt={item.title} width={500} height={500} className="w-full h-full group-hover:scale-110 transition-all duration-300"/>
                               
                            </div>
                            <div className="py-3">
                                
                                <span className="Exo text-gray-700">{item.brand}</span>
                                <h2 className="Exo text-lg text-gray-800 font-medium my-3 hover:text-black cursor-pointer">{item.title}</h2>

                                <div className="flex items-center relative gap-3 overflow-hidden">
                                    <h5 className="Exo font-semibold text-gray-700">{item.price}</h5>
                                    <div className="product-options flex items-center gap-2">
                                        
                                            <Icon icon="lets-icons:view" className="text-gray-700 product-option1 view-btn hover:text-black" width="24" height="24" />
                                         
                                            <Icon icon={wishlist.includes(String(item.id)) ? "eva:heart-fill" : "eva:heart-outline"} onClick={() => toggleWishlist(String(item.id))} className={`cursor-pointer product-option2 wishlist-btn hover:text-black ${wishlist.includes(String(item.id)) ? "text-red-500" : "text-gray-700"}`} width="24" height="24" />
                                            <Icon 
                                            onClick={() => addToCart(item.id)}
                                            icon="akar-icons:cart" className="text-gray-700 product-option3 cart-btn hover:text-black" width="24" height="24"
                                            />
                                        
                                    </div>
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
