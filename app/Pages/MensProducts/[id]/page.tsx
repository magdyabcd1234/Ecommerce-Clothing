"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import MensProductData from "@/app/JsonData/MensProduct.json";

import { Icon } from "@iconify/react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useCart } from "@/app/Pages/Cart/CartContext";
import { useWishlist } from "@/app/Pages/Wishlist/WishlistContext";

export default function ProductDetails() {

    const params = useParams();
    const { id } = params;
    const product = MensProductData.find((p) => p.id.toString() === id);

    if(!product) {
        return (
            <div className="px-[5%] py-20 text-center text-2xl font-semibold">
                Product not found
            </div>
        );
    }

    const { addToCart, cart } = useCart();
    const { wishlist, toggleWishlist } = useWishlist();

    const handleAddToCart = () => {
        if (!selectedSize) return;
        addToCart(product.id);
    };

    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);

    const handleClearSize = () => {
        setSelectedSize(null);
    }

    const isInWishlist = wishlist.includes(product.id);
    const isInCart = cart.includes(product.id)
  return (
    <>
                <div className="Page-section relative">
            <div className="px-[5%] lg:px-[10%] py-40 pb-10">
                <h2 className="text-6xl md:text-7xl lg:text-8xl text-gray-300 font-bold Exo uppercase">Product Details</h2>
            </div>
            <div className="absolute top-1/2 right-0 translate-y-5/2 md:translate-y-1/2 w-[60%] md:w-[30%] lg:w-[45%] bg-gray-100 h-10"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 md:-translate-y-1/2 w-[40%] md:w-[5%] lg:w-[9%] bg-gray-100 h-10">
            </div>
        </div>

        <div className="px-[5%] lg:px-[10%] py-20 pt-10 flex flex-col lg:flex-row gap-10 border-b border-gray-300">
            <div className="w-full lg:w-1/3 flex justify-center">
            <div className="rounded-2xl overflow-hidden w-full md:w-1/2 lg:w-full">
            <Image 
                src={product.image}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
            />
                 </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-5">
                <div>
                    <span className="text-gray-700 bg-prim px-3 py-1 rounded-full font-semibold Exo">{product.brand}</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-medium Exo text-gray-800">{product.title}</h1>
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-semibold Exo">{product.price}</h2>
                    <span className="line-through text-gray-500">{product.lessPrice}</span>
                    <span className="bg-red-500 text-white px-3 rounded Exo font-medium">{product.off}</span>
                </div>

                <p className="text-gray-600 mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde nam doloribus, iure exercitationem 
                    voluptatibus repellat eius expedita nulla ipsum fugit dignissimos nesciunt et nobis culpa maiores 
                    officiis optio obcaecati voluptate consequuntur excepturi sunt nostrum quis. Molestias blanditiis totam 
                    quibusdam 
                </p>

                <p className="text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, aut id optio sapiente nemo
                    , fugit, nulla cupiditate non recusandae earum iste laudantium voluptatum error autem eum.
                     Nostrum debitis necessitatibus et tempore? Explicabo placeat ipsam dolores atque. Incidunt 
                     a fugit quia? 
                </p>

                <div className="flex items-center gap-2">
                    <h3 className="Exo tracking-wide font-semibold uppercase">clothing-size &nbsp; —</h3>
                    <div className="flex gap-3 ml-4">
                        {["XS", "S", "M", "L", "XL", "XX"].map((size) => (
                            <div key={size} className="relative group">
                                <button onClick={() => setSelectedSize(size)} className={`px-3 py-1 cursor-pointer border rounded text-sm font-medium transition ${selectedSize === size ? "border-black bg-black text-white" : "border-gray-400 hover:border-black"}`}>
                                    {size}
                                </button>

                                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                    {size}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center">
                        <Icon icon="fluent:checkmark-circle-sparkle-24-regular" className="text-green-700" width="24" height="24"/>
                        <span className="ml-2 text-green-700 Exo font-semibold">In Stock</span>
                    </div>       
                <div>
                    {selectedSize && (
                        <button onClick={handleClearSize} className="px-4 py-1 border border-red-500 text-red-500 font-medium rounded hover:bg-red-500 hover:text-white transition cursor-pointer">
                            Clear
                        </button>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-2">
                <div className="flex items-center bg-black p-1">
                    <div className="bg-white flex items-center">
                        <span onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="px-3 py-1 text-2xl font-semibold cursor-pointer">
                            -
                        </span>
                        <span className="px-3 py-1 font-semibold border-e border-s border-gray-300">{quantity}</span>

                        <span onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 text-xl font-semibold cursor-pointer">
                            +
                        </span>
                    </div>

                    <button onClick={handleAddToCart} disabled={!selectedSize || isInCart} className={`px-6 py-3 rounded font-medium flex items-center gap-2 transition ${selectedSize ? "text-white cursor-pointer" : "text-gray-400 cursor-not-allowed"}`}>
                        <Icon icon="akar-icons:cart" width={24} height={24}/>
                        {isInCart ? "In Cart" : "Add to Cart"}
                    </button>
                </div>

                <button onClick={() => toggleWishlist(product.id)} className="def-btn flex gap-2 text-xl font-semibold cursor-pointer py-3.5 border border-gray-300 px-3 hover:border-transparent transition-all duration-300 rounded">
                    <Icon icon="eva:heart-outline" width={24} height={24} />
                    Wishlist
                </button>
            </div>

            <p>Categories: Active , Fashion Hoodies & Sweatshirts, Jackets & Coats, Jeans, Men 
                Clothing, Pants, Shirts, Socks, Suits & Sport Coats
            </p>
        </div>
    </div>

    <div className="px-[5%] lg:px-[10%] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
                <h2 className="Exo font-semibold text-5xl mb-5">Description</h2>
                <p className="text-gray-600 tracking-wide">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Nostrum ratione corrupti distinctio, quos vero voluptatibus necessitatibus tenetur
                      facere quisquam sint doloribus voluptates ab aliquam odio veniam sed beatae? Dignissimos,
                       a maiores. Quia eum excepturi repellat cupiditate eius culpa! Dolore rem tenetur adipisci 
                       aliquid debitis placeat pariatur consequatur! Nemo quasi impedit illum. Laboriosam deleniti
                        dolorem animi ullam dolor! Reprehenderit, ipsum optio.</p>
                        <p className="text-gray-600 tracking-wide mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem accusamus 
                            quasi quibusdam ducimus voluptates! Autem ipsum sunt dolores est, perferendis 
                            odit consequuntur eligendi dicta hic nemo quaerat incidunt amet, adipisci debitis
                             harum, tempore tenetur molestias id? Tempora labore qui at?
                        </p>
            </div>
            <div className="mt-5 lg:mt-0">
                <h2 className="Exo font-semibold text-5xl mb-5">Information</h2>
                <div className="mb-4">
                    <h3 className="Exo font-semibold">Shipping</h3>
                    <p className="text-gray-600 tracking-wide">We currently offer free shipping worldwide on all orders over $100</p>
                </div>
                <div className="mb-4">
                    <h3 className="Exo font-semibold">Sizing</h3>
                    <p className="text-gray-600 tracking-wide">Fits true to size. Do you need size advice?</p>
                </div>
                <div className="mb-4">
                    <h3 className="Exo font-semibold">Return & exchange</h3>
                    <p className="text-gray-600 tracking-wide">If you are not satisfied with your purchase you can return it to us within 14 days 
                        for an exchange or refund. More info
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="Exo font-semibold">Assistance</h3>
                    <p className="text-gray-600 tracking-wide">Contact us on (+91) 1234567890 , or email us at support@Example.com</p>
                </div>
            </div>
        </div>

        <h2 className="Exo font-semibold text-5xl my-10 mb-5">Related products</h2>

        <Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            autoplay={{
                delay: 2000
            }}
            modules={[Autoplay]}
            breakpoints={{
                1200: {slidesPerView: 4},
                1000: {slidesPerView: 3},
                600: {slidesPerView: 2},
                575: {slidesPerView: 1},
                0: {slidesPerView: 1},
            }}
        >
            {MensProductData.map((product, index) => (
                <SwiperSlide key={index} className="sneaker-card product-card group">
                                            <Link href={`/Pages/MensProducts/${product.id}`}>
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
                            <Link href={`/Pages/MensProducts/${product.id}`}>
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
                                    <Link href={`/Pages/MensProducts/${product.id}`}>
                                        <Icon icon="lets-icons:view" className="text-gray-700 product-option1 view-btn hover:text-black" width="24" height="24"/>
                                    </Link>

                                    <Icon icon={wishlist.includes(product.id) ? "eva:heart-fill" : "eva:heart-outline"} onClick={() => toggleWishlist(product.id)} className={`cursor-pointer product-option2 wishlist-btn hover:text-black ${wishlist.includes(product.id) ? "text-red-500" : "text-gray-700"}`} width="24" height="24"/>
                                    <Icon onClick={() => addToCart(product.id)} icon="akar-icons:cart" className="text-gray-700 product-option3 cart-btn hover:text-black" width="24" height="24"/>
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
