"use client";

import {Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import Brand1 from "@/public/logo1.svg";
import Brand2 from "@/public/logo2.svg";
import Brand3 from "@/public/logo3.svg";
import Brand4 from "@/public/logo4.svg";
import Brand5 from "@/public/logo5.svg";
import Brand6 from "@/public/logo6.svg";
import Brand7 from "@/public/logo7.svg";
import Brand8 from "@/public/logo8.svg";
import Brand9 from "@/public/logo9.svg";
import Brand10 from "@/public/logo10.svg";

const BrandsData = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, Brand9, Brand10];

export default function Brands() {
  return (
    <>
        <div className="px-[5%] lg:px-[10%] py-0 md:py-10 pb-0 ">
                <Swiper
                    slidesPerView={8}
                    spaceBetween={20}
                    loop={true}
                    modules={[Autoplay]}
                    breakpoints={{
                        1200: { slidesPerView: 8 },
                        1000: { slidesPerView: 5 },
                        600: { slidesPerView: 3 },
                        575: { slidesPerView: 3 },
                        0: { slidesPerView: 2 },
                    }}
                >
                    {BrandsData.map((brand, index) => (
                        <SwiperSlide key={index} className="group">
                            <div className="brand-image relative">
                                <Image 
                                    src={brand}
                                    alt={`brand${index}`}
                                    width={500}
                                    height={500}
                                    className="w-full h-full"
                                />
                            </div>
                            <Image 
                                src={brand}
                                alt={`brand${index}`}
                                width={500}
                                height={500}
                                className="w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-105"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
    </>
  )
}
