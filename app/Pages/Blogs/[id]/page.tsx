"use client"

import { useParams } from "next/navigation";
import Link from "next/link";
import blog1 from "@/public/blog-1.jpg";
import blog2 from "@/public/blog-2.jpg";
import blog3 from "@/public/blog-3.jpg";
import blog4 from "@/public/blog-4.jpg";
import blog5 from "@/public/blog-5.jpg";
import blog6 from "@/public/blog-6.jpg";
import Image from "next/image";

const BlogsData = [
    {
        id: 1,
        img: blog1,
        date: "05/26",
        title: "Yoga at home. Feel the transformation in only several weeks",
        desc: "Discover how practicing yoga at home can improve both your physical and mental health.",
        desc1: "Simple daily routines can help reduce stress and increase flexibility.",
        desc2: "You don’t need expensive equipment, just consistency and focus.",
        desc3: "Start your journey today and experience real transformation within weeks."
    },
    {
        id: 2,
        img: blog2,
        date: "08/26",
        title: "Sports equipments to make your workout more fun",
        desc: "Upgrade your workout experience with the right sports equipment.",
        desc1: "From resistance bands to smart fitness tools, every detail matters.",
        desc2: "The right gear can boost motivation and improve your performance.",
        desc3: "Choose what fits your routine and make every workout enjoyable."
    },
    {
        id: 3,
        img: blog3,
        date: "09/26",
        title: "Several prescription for a healthier meal – keto food",
        desc: "Explore healthy keto meal ideas that are both delicious and effective.",
        desc1: "Balanced nutrition plays a key role in improving your energy levels.",
        desc2: "Low-carb meals can be creative, satisfying, and full of flavor.",
        desc3: "Build a sustainable and healthier lifestyle with simple food choices."
    },
    {
        id: 4,
        img: blog4,
        date: "11/26",
        title: "Parisain Brand Gentle Remider Launches Ready-To-Wear",
        desc: "A fresh Parisian collection redefining modern ready-to-wear fashion.",
        desc1: "Clean cuts, neutral tones, and timeless elegance define the style.",
        desc2: "A perfect balance between comfort and premium fashion design.",
        desc3: "Step into a new era of fashion with confidence and simplicity."
    },
    {
        id: 5,
        img: blog5,
        date: "02/26",
        title: "Ace & Tate Unveil SS23' Campaign world up with James Messiah",
        desc: "A bold new campaign combining fashion, identity, and creativity.",
        desc1: "James Messiah introduces a unique artistic perspective to the collection.",
        desc2: "Eyewear meets storytelling in a visually powerful concept.",
        desc3: "Discover the inspiration behind this standout collaboration."
    },
    {
        id: 6,
        img: blog6,
        date: "01/26",
        title: "Les Benjamins & PUMA Link Up for carpet Influenced SS23 Drop",
        desc: "Streetwear meets cultural heritage in this exciting collaboration.",
        desc1: "Inspired by traditional patterns with a modern streetwear twist.",
        desc2: "A fusion of heritage design and contemporary fashion trends.",
        desc3: "Limited pieces that redefine everyday street style."
    },
];



export default function BlogsDetails() {
    const { id } = useParams();
    const blog = BlogsData.find((item) => item.id.toString() === id);

    if(!blog) {
        return (
            <div className="text-center py-20 Exo text-3xl text-black">Blog Not Found</div>
        )
    }
  return (
    <>
        <div className="Page-section relative">
            <div className="px-[5%] lg:px-[10%] py-40 pb-10">
                <h2 className="text-5xl md:text-7xl lg:text-9xl text-gray-300 font-bold Exo uppercase">Blog Details</h2>
            </div>
            <div className="absolute top-1/2 right-0 translate-y-4/2 md:translate-y-1/2 w-[60%] md:w-[40%] bg-gray-100 h-10"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 md:-translate-y-1/2 w-[40%] md:w-[5%] lg:w-[8%] bg-gray-100 h-10">
            </div>
        </div>
        <div className="px-[5%] lg:px-[10%] py-10 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-1/2">
                <div className="py-4">
                    <h4 className="Exo font-semibold text-gray-800 mb-5">{blog.date}</h4>
                    <h2 className="Exo text-3xl lg:text-4xl mb-5 font-semibold text-gray-800 hover:text-black">{blog.title}</h2>
                </div>
                
                <div className="overflow-hidden mb-5 rounded-2xl group cursor-pointer">
                     <Image 
                     src={blog.img}
                     alt={blog.title}
                     width={800}
                    height={800}
                    className="w-full h-full group-hover:scale-105 transition-all duration-300"
                    />
                </div>

                <div className="space-y-5 pb-5 border-b border-gray-200">
                    <p className="Exo text-md tracking-wide text-gray-500">{blog.desc}</p>
                    <p className="Exo text-md tracking-wide text-gray-500">{blog.desc1}</p>
                    <p className="Exo text-md tracking-wide text-gray-500">{blog.desc2}</p>
                    <p className="Exo text-md tracking-wide text-gray-500">{blog.desc3}</p>
                    </div>
                </div>

                <div className="w-full lg:W-1/2">
                    <div className="space-y-5 lg:py-8 lg:sticky lg:top-24 shadow-lg p-5 rounded-2xl">
                        <textarea rows={6} placeholder="Add your comment..." className="Exo w-full border border-gray-300 outline-none rounded-md px-3 py-3 hover:border-black transition-all duration-300 cursor-pointer"></textarea>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                            <input type="text" placeholder="Name" className="Exo w-full border border-gray-300 outline-none rounded-md px-3 py-3 hover:border-black transition-all duration-300 cursor-pointer"/>
                            <input type="email" placeholder="Email" className="Exo w-full border border-gray-300 outline-none rounded-md px-3 py-3 hover:border-black transition-all duration-300 cursor-pointer"/>
                        </div>

                        <input type="text" placeholder="Website *" className="Exo w-full border border-gray-300 outline-none rounded-md px-3 py-3 hover:border-black transition-all duration-300 cursor-pointer"/>

                        <div className="flex gap-2">
                            <input type="checkbox" />
                            <label className="Exo text-gray-500">Save my name, email, and website in this browser for the next time I comment Post Comments</label>
                        </div>
                            <button className="bg-black text-white px-3 py-2 my-3 rounded-md cursor-pointer">
                                <span>Post Comment</span>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
