"use client";

import Image from "next/image";
import blog1 from "@/public/blog-1.jpg";
import blog2 from "@/public/blog-2.jpg";
import blog3 from "@/public/blog-3.jpg";

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
];

export default function Blogs() {
  return (
    <>
        <div className="px-[5%] lg:px-[10%] py-10 lg:py-20">
            <div className="flex flex-wrap justify-between items-center gap-5 mb-20">
                <div>
                    <h2 className="Exo text-4xl uppercase font-semibold text-gray-800">
                    REY'S JOURNAL
                    </h2>
                    <p className="Exo text-gray-700 font-medium mt-1">We write stuff too</p>
                </div>
                <button className="def-btn font-semibold cursor-pointer py-2 border-s-2 border-r-2 border-transparent px-3 hover:border-black transition-all duration-300 rounded">
                READ MORE ARTICLES
                </button>
            </div>
            <div className="mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {BlogsData.map((blog, index) => (
                        <div key={index}>
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}
