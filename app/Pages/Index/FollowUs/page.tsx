"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import instaImg1 from "@/public/Instagram-1.jpg";
import instaImg2 from "@/public/Instagram-2.jpg";
import instaImg3 from "@/public/Instagram-3.jpg";
import instaImg4 from "@/public/Instagram-4.jpg";
import instaImg5 from "@/public/Instagram-5.jpg";
import instaImg6 from "@/public/Instagram-6.jpg";
import instaImg7 from "@/public/Instagram-7.jpg";

const InstagramImages = [instaImg1, instaImg2, instaImg3, instaImg4, instaImg5, instaImg6, instaImg7];

export default function FollowUs() {
  return (
    <>
        <div className="px-[5%] lg:px-[10%] py-10">
            <div className="flex flex-col justify-center items-center text-center">
                <Icon icon="akar-icons:instagram-fill" width="40" height="40"/>
                <p className="w-full lg:w-[30%] text-lg Exo font-medium text-gray-700">Remember to show off your new purchase on insta by 
                    tagging us and <span className="font-bold text-gray-800"> get $20 off</span> your next order.</p>
                    <h2 className="flex gap-2 Exo font-semibold my-3">FOLLOW US ON INSTAGRAM <Icon icon="guidance:left-arrow" width="24" height="24"/>
                    </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mt-10">
                {InstagramImages.map((insta, index) => (
                    <div key={index} className={`relative group overflow-hidden rounded ${index === 6 ? "hidden lg:block" : ""}`}>
                        <Image 
                            src={insta}
                            alt={`Insta-Image-${index}`}
                            width={800}
                            height={800}
                            className="w-full h-full object-cover cursor-pointer"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-300 flex items-center justify-center">
                            <Icon icon="akar-icons:instagram-fill" className="text-white text-4xl scale-75 group-hover:scale-100 transition-all duration-300"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
