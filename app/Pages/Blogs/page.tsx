"use client"

import Link from "next/link";
import Image from "next/image";
import blog1 from "@/public/blog-1.jpg";
import blog2 from "@/public/blog-2.jpg";
import blog3 from "@/public/blog-3.jpg";
import blog4 from "@/public/blog-4.jpg";
import blog5 from "@/public/blog-5.jpg";
import blog6 from "@/public/blog-6.jpg";

const BlogsData = [
    {
        id: 1,
        img: blog1,
        date: "05/26",
        title: "Yoga at home. Feel the transformation in only several weeks"
    },
    {
        id: 2,
        img: blog2,
        date: "08/26",
        title: "Sports equipments to make your workout more fun"
    },
    {
        id: 3,
        img: blog3,
        date: "09/26",
        title: "Several prescription for a healthier meal – keto food"
    },
    {
        id: 4,
        img: blog4,
        date: "11/26",
        title: "Parisain Brand Gentle Remider Launches Ready-To-Wear"
    },
    {
        id: 5,
        img: blog5,
        date: "02/26",
        title: "Ace & Tate Unveil SS23' Campaign world up with James Messiah"
    },
    {
        id: 6,
        img: blog6,
        date: "01/26",
        title: "Les Benjamins & PUMA Link Up for carpet Influenced SS23 Drop"
    },
];

export default function Blogs() {
  return (
    <>
        <div className="Page-section relative">
            <div className="px-[5%] lg:px-[10%] py-40 pb-10">
                <h2 className="text-5xl md:text-7xl lg:text-9xl text-gray-300 font-bold Exo uppercase">Blogs</h2>
            </div>
            <div className="absolute top-1/2 right-0 translate-y-4/2 md:translate-y-1/2 w-[60%] md:w-[40%] bg-gray-100 h-10"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 md:-translate-y-1/2 w-[40%] md:w-[5%] lg:w-[8%] bg-gray-100 h-10">
            </div>
        </div>

        <div className="px-[5%] lg:px-[10%] py-10 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {BlogsData.map((blog, index) => (
                        <Link href={`/Pages/Blogs/${blog.id}`} key={index}>
                            <div className="blog-card group">
                                <div className="overflow-hidden rounded-2xl">
                                    <Image 
                                        src={blog.img}
                                        alt={blog.title}
                                        width={800}
                                        height={800}
                                        className="w-full h-full group-hover:scale-105 transition-all duration-300"
                                    />
                                </div>
                                <div className="py-4">
                                    <div>
                                        <h4 className="Exo font-semibold text-gray-800 mb-3">{blog.date}</h4>
                                    </div>
                                    <div>
                                        <h2 className="Exo text-2xl font-semibold text-gray-700 cursor-pointer hover:text-black">{blog.title}</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
        </div>
    </>
  )
}
