
import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react'

import payment1 from "@/public/payments1.svg";
import payment2 from "@/public/payments2.svg";
import payment3 from "@/public/payments3.svg";
import payment4 from "@/public/payments4.svg";
import payment5 from "@/public/payments5.svg";
import payment6 from "@/public/payments6.svg";
import Image from 'next/image';

const paymentsData = [payment1, payment2, payment3, payment4, payment5, payment6];

export default function Footer() {
  return (
    <>
        <div className="px-[8%] lg:px-[10%] py-20 lg:py-20 lg:pb-10 relative">
            <div className="footer-shape"></div>
            <div className="footer-shape2"></div>
            <footer>
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="w-full lg:w-1/2">
                        <div className="inline-block mb-5">
                            <Link href="/">
                                <div className="bg-black rounded-lg px-2 pe-4 py-1">
                                    <h1 className="Luxur text-4xl font-bold text-white tracking-widest">Orvena</h1>
                                </div>
                            </Link>
                        </div>
                        <div className="flex">
                            <Icon icon="tabler:map-pin" width="24" height="24"/>
                            <h3 className="Exo font-semibold ps-2 text-gray-700">17 Irving Pl, New York, NY 10003</h3>
                        </div>
                        <div className="flex mt-2">
                            <Icon icon="heroicons-outline:mail" width="24" height="24"/>
                            <h3 className="Exo font-semibold ps-2 text-gray-700">Example@site.com</h3>
                        </div>
                        <div className="flex mt-2">
                            <Icon icon="solar:phone-calling-bold" width="24" height="24"/>
                            <h3 className="Exo font-semibold ps-2 text-gray-700">123 456 7890</h3>
                        </div>

                        <p className="mt-5 text-gray-700 text-md w-full lg:w-[85%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/1">
                        <div className="footer-grid">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5">
                                <div className="footer-col">
                                    <h2 className="text-3xl Exo font-semibold tracking-wide mb-5">SHOP</h2>

                                    <div className="flex flex-col">
                                        <Link href="#about" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Men Clothing</Link>
                                        <Link href="#service" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Women Clothing</Link>
                                        <Link href="#pricing" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Shoes</Link>
                                        <Link href="#blog" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Outlet</Link>
                                        <Link href="#faqs" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Collections</Link>
                                    </div>
                                </div>

                                <div className="footer-col">
                                    <h2 className="text-3xl Exo font-semibold tracking-wide mb-5">SPORTS</h2>

                                    <div className="flex flex-col">
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Athletics</Link>
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Basketball</Link>
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Boxing</Link>
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Dancewear</Link>
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Fitness & Yoga</Link>
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Football</Link>
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Swimwear</Link>
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Tennis</Link>
                                    </div>
                                </div>

                                <div className="footer-col">
                                    <h2 className="text-3xl Exo font-semibold tracking-wide mb-5">HELP</h2>

                                    <div className="flex flex-col">
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Asked Questions</Link>
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Privacy Policy</Link>
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Returns & Exchanges</Link>
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Terms & Conditions</Link>

                                    </div>
                                </div>

                                
                                <div className="footer-col">
                                    <h2 className="text-3xl Exo font-semibold tracking-wide mb-5">Follow Us</h2>

                                    <div className="flex flex-col">
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Facebook</Link>
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Twitter</Link>
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Dribble</Link>
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Instagram</Link>
                                        <Link href="/" className='text-lg Exo text-gray-800 hover:text-black hover:ps-1 transition-all duration-200'>Pinterest</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-10">
                    <div className="flex flex-wrap justify-center lg:justify-between items-center text-center gap-3 border-t border-gray-300 pt-10">
                        <p className="text-xl text-gray-600">© Copyright 2026. All Rights Reserved by <Link href="https://uicode.in/" className='Exo font-semibold text-black'>uicode</Link></p>
                        <div className="flex flex-col md:flex-row items-center gap-5">
                            <h2 className="text-xl Exo text-gray-600">Secure payments :</h2>
                            <div className="flex items-center flex-wrap justify-center gap-4">
                                    {paymentsData.map((pay, index) => (
                                        <Image
                                            key={index}
                                            src={pay} 
                                            alt={`Pay-${index}`}
                                            width={60}
                                            height={60}
                                            className='opacity-50 hover:opacity-80 cursor-pointer transition-all duration-300'
                                          />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </>
  )
}
