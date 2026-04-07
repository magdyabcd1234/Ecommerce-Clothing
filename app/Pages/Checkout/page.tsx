"use client"

import React, { useEffect, useState } from "react"

import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
import MensProductData from "@/app/JsonData/MensProduct.json"
import RandomProducts from "@/app/JsonData/RandomProducts.json"
import WomensProductData from "@/app/JsonData/WomensProduct.json"
import SneakersData from "@/app/JsonData/SneakersData.json"
import NewArrivalsData from "@/app/JsonData/NewArrivals.json"
import toast from "react-hot-toast"
import { useCart } from "../Cart/CartContext"

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


export default function Checkout() {
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


    const subtotal = cartItems.reduce(
        (acc,item) => acc + Number(item?.price.replace("$","")) * item?.quantity ,0
    );

    const [shippingInfo, setShippingInfo] = useState({
        firstName: "",
        lastName: "",
        company: "",
        address: "",
        apartment: "",
        city: "",
        phone: "",
        email: "",
        notes: "",
    });

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setShippingInfo({...shippingInfo, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = () => {
        if(
            !shippingInfo.firstName ||
            !shippingInfo.lastName || 
            !shippingInfo.address || 
            !shippingInfo.phone || 
            !shippingInfo.email   
        ){
            toast.error("Order placed successfully!")
        }
        toast.success("Order placed successfully!")
    };
    if(cartItems.length === 0) {
        return (
            <div className="py-20 text-center text-gray-500">
                Your cart is empty. <Link href="/Pages/MensProducts" className="text-blue-600 underline">Go Shopping</Link>
            </div>
        )
    }
  return (
    <>
        <div className="px-[5%] lg:px-[10%] py-20 mt-8">
            <h2 className="text-5xl font-semibold mb-10">Checkout</h2>

            <div className="flex flex-col lg:flex-row justify-between gap-5">
                <div className="w-full lg:w-1/2 h-full">
                <h3 className="text-2xl font-semibold mb-5">Billing details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                        <label className="Exo font-semibold">First Name <span className="text-red-500">*</span></label>
                        <input
                         type="text"
                         name="firstName"
                         value={shippingInfo.firstName}
                         onChange={handleInputChange}
                         className="border border-gray-200 rounded px-4 py-2 mt-1 w-full focus:border-gray-400 transition-all duration-300 outline-none"

                         />
                    </div>

                    <div>
                        <label className="Exo font-semibold">Last Name <span className="text-red-500">*</span></label>
                        <input
                         type="text"
                         name="lastName"
                         value={shippingInfo.lastName}
                         onChange={handleInputChange}
                         className="border border-gray-200 rounded px-4 py-2 mt-1 w-full focus:border-gray-400 transition-all duration-300 outline-none"

                         />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="Exo font-semibold">Company name (optional) <span className="text-red-500">*</span></label>
                        <input
                         type="text"
                         name="company"
                         value={shippingInfo.company}
                         onChange={handleInputChange}
                         className="border border-gray-200 rounded px-4 py-2 mt-1 w-full focus:border-gray-400 transition-all duration-300 outline-none"
                         />
                        </div>
                        <div className="mt-3">
                        <label className="Exo font-semibold">Street address <span className="text-red-500">*</span></label>
                        <input
                         type="text"
                         name="address"
                         value={shippingInfo.address}
                         onChange={handleInputChange}
                         className="border border-gray-200 rounded px-4 py-2 mt-1 w-full focus:border-gray-400 transition-all duration-300 outline-none"
                         />
                        </div>
                        <div className="mt-3">
                        <input
                         type="text"
                         name="apartment"
                         value={shippingInfo.apartment}
                         placeholder="Apartment, suite,unit,etc. (optional)"
                         onChange={handleInputChange}
                         className="border border-gray-200 rounded px-4 py-2 mt-1 w-full focus:border-gray-400 transition-all duration-300 outline-none"
                         />
                        </div>

                        <div className="mt-3">
                        <label className="Exo font-semibold">Town /City <span className="text-red-500">*</span></label>
                        <input
                         type="text"
                         name="City"
                         value={shippingInfo.city}
                         onChange={handleInputChange}
                         className="border border-gray-200 rounded px-4 py-2 mt-1 w-full focus:border-gray-400 transition-all duration-300 outline-none"
                         />
                        </div>

                        <div className="mt-3">
                        <label className="Exo font-semibold">Country (optional) <span className="text-red-500">*</span></label>
                        <input
                         type="text"
                         name="City"
                         value={shippingInfo.city}
                         onChange={handleInputChange}
                         className="border border-gray-200 rounded px-4 py-2 mt-1 w-full focus:border-gray-400 transition-all duration-300 outline-none"
                         />
                        </div>

                        <div className="mt-3">
                        <label className="Exo font-semibold">Postcode <span className="text-red-500">*</span></label>
                        <input
                         type="text"
                         onChange={handleInputChange}
                         className="border border-gray-200 rounded px-4 py-2 mt-1 w-full focus:border-gray-400 transition-all duration-300 outline-none"
                         />
                        </div>

                        <div className="mt-3">
                        <label className="Exo font-semibold">Phone <span className="text-red-500">*</span></label>
                        <input
                         type="text"
                         name="Phone"
                         value={shippingInfo.phone}
                         onChange={handleInputChange}
                         className="border border-gray-200 rounded px-4 py-2 mt-1 w-full focus:border-gray-400 transition-all duration-300 outline-none"
                         />
                        </div>

                        <div className="mt-3">
                        <label className="Exo font-semibold">Email Address <span className="text-red-500">*</span></label>
                        <input
                         type="text"
                         name="Phone"
                         value={shippingInfo.email}
                         onChange={handleInputChange}
                         className="border border-gray-200 rounded px-4 py-2 mt-1 w-full focus:border-gray-400 transition-all duration-300 outline-none"
                         />
                        </div>

                        <div className="mt-3">
                        <label className="Exo font-semibold">Additional Information <span className="text-red-500">*</span></label>
                        <textarea rows={5} placeholder="Notes about order, e.g special notes for deilivery."
                        className="border border-gray-200 rounded px-4 py-2 mt-1 w-full focus:border-gray-400 p-3 transition-all duration-300 outline-none"
                        >
                        </textarea>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 border border-gray-200 rounded-lg p-6 shadow-sm lg:sticky top-0 left-0 h-full">
                    <h3 className="text-2xl font-semibold mb-5">Order Summary</h3>
                    <div className="flex flex-col gap-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <Image src={item.image} alt={item.title} width={60} height={60} className="rounded"/>
                                    <div className="flex flex-col">
                                        <span className="text-gray-800 font-medium">
                                            {item.title}
                                        </span>
                                        <span className="text-gray-800 font-medium">
                                            {item.brand}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="Exo line-through text-red-300">{item.lessPrice}</span>
                                    <span className="Exo font-semibold">${(Number(item.price.replace("$","")) * item.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                     </div>
                     <div className="border-t border-gray-300 pt-4 flex justify-between mt-5 font-semibold text-lg">
                        <span className="Exo text-xl">Total:</span>
                        <span className="Exo text-xl">${subtotal.toFixed(2)}</span>
                     </div>
                     <button
                     type="submit"
                     onClick={handlePlaceOrder}
                     className="w-full mt-5 cursor-pointer px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition"
                     >
                        Place Order
                     </button>
                    </div>
                </div>
            </div>
    </>
  )
}
