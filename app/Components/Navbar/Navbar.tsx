"use client";


import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useWishlist } from "@/app/Pages/Wishlist/WishlistContext";
import { useCart } from "@/app/Pages/Cart/CartContext";

type NavLink = {
    label: string;
    href: string;
    dropdown?: { label: string; href: string; }
}

const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Men's", href: "/Pages/MensProducts/" },
    { label: "Women's", href: "/Pages/WomensProduct/" },
    { label: "Shoes's", href: "/Pages/ShoesProduct/" },
    { label: "Collections", href: "/Pages/Collections" },
    { label: "Blogs", href: "/Pages/Blogs" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const normalizePath = (path: string) => path.replace(/\/$/, "");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { wishlistCount } = useWishlist();
    const { cartCount } = useCart();

  return (
    <>
        {/* Navbar */}
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-[5%] lg:px-[10%] ${scrolled ? "bg-white backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
            <div className="flex justify-between items-center py-3">
                <div className="flex justify-between items-center gap-5">
                    {/* Logo */}
                    <Link href="/">
                    <div className="flex items-center gap-2 bg-black rounded-lg px-2 pe-4 py-1">
                        <h1 className="Luxur text-2xl md:text-4xl font-bold text-white tracking-widest">Orvena</h1>
                    </div>
                    </Link>

                    {/* Menu Links */}
                    <nav className="hidden lg:flex space-x-3 ps-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`text-lg text-gray-700 nav-menu px-2 font-medium transition-all ${normalizePath(pathname) === normalizePath(link.href) ? "text-gray-950 border-b-2 border-t-2 border-black active-link" : "text-black hover:text-black"}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() =>{
                            setIsLogin(true)
                            setShowModal(true)
                        }}
                    >
                        <Icon 
                            icon="solar:user-linear"
                            width="35"
                            height="35"
                            className="p-1.5 border border-gray-500 rounded-full hover:bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer"
                        />
                    </button>

                    <div className="relative">
                        <Link href="/Pages/Wishlist">
                        <Icon 
                            icon="ic:outline-favorite-border"
                            width="35"
                            height="35"
                            className="p-1.5 border border-gray-500 rounded-full hover:bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer"
                        />
                        </Link>
                        {wishlistCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                                {wishlistCount}
                            </span>
                        )}
                    </div>
                    <div className="relative">
                        <Link href="/Pages/Cart">
                        <Icon 
                            icon="ic:outline-shopping-cart"
                            width="35"
                            height="35"
                            className="p-1.5 border border-gray-500 rounded-full hover:bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer"
                        />
                        </Link>

                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                                {cartCount}
                            </span>
                        )}
                    </div>

                    <button className="lg:hidden flex flex-col gap-[5px]" onClick={() => setOpen(!open)}>
                        <span className={`block w-6 h-[3px] bg-black transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className={`block w-6 h-[3px] bg-black transition-all ${open ? "opacity-0" : ""}`}></span>
                        <span className={`block w-6 h-[3px] bg-black transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                 className={`lg:hidden fixed top-[60px] left-0 w-full z-50 bg-white transition-all duration-300 ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-6"
                        }`}>
                        <div className="mx-[5%] rounded-2xl shadow-2xl border border-white/10">
                            <nav className="flex flex-col px-6 py-6 gap-5">
                            {navLinks.map((link) => (
                            <Link
                             key={link.label}
                             href={link.href}
                             onClick={() => setOpen(false)}
                            className={`text-lg font-medium border-b border-black/10 ${pathname === link.href ? "text-purple-600" : "text-black hover:text-purple-600"
                         }`}
                      >
                      {link.label}
                        </Link>
                 ))}
                </nav>
            </div>
        </div>
     </div>
</div>

    {/* Login/Register Modal  */}
    {showModal && (
        <div className="fixed inset-0 z-50 h-screen flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative bg-white border border-white/10 rounded-xl p-10 w-[450px] md:w-[500px] shadow-2xl animate-fadeIn">
                <button
                className="absolute top-5 right-5 text-4xl cursor-pointer text-black hover:rotate-90 transition-all duration-500"
                onClick={() => setShowModal(false)}
                >
                    ✕
                </button>

                <h2 className="text-3xl font-semibold mb-8 text-black">
                    {isLogin ? "Login to Your Account" : "Register Your Account"}
                </h2>

                <form className="flex flex-col gap-4">
                    {!isLogin && (
                        <input
                            type="text" 
                            placeholder="Full Name"
                            className="w-full bg-gray-200/20 border border-black/20 text-black px-4 py-3 rounded-xl focus:outline-none focus:border-black transition-all"
                            required
                        />
                    )}
                    <input
                    type="email" 
                    placeholder="Email Address"
                    className="w-full bg-gray-200/20 border border-black/20 text-black px-4 py-3 rounded-xl focus:outline-none focus:border-black transition-all"
                    required
                        />
                    <input
                    type="password" 
                    placeholder="Password"
                    className="w-full bg-gray-200/20 border border-black/20 text-black px-4 py-3 rounded-xl focus:outline-none focus:border-black transition-all"
                    required
                        />

                        <button
                            type="submit"
                            className="w-full mt-3 bg-black text-white text-xl py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all cursor-pointer"
                        >
                            {isLogin ? "Login Now" : "Register Now"}
                        </button>
                </form>

                <p className="text-center text-sm mt-4 text-black font-semibold">
                    {isLogin ? (
                        <>
                             Don't have an account?{" "}
                            <button
                                 type="button"
                                 className="font-bold Exo cursor-pointer hover:underline transition-all"
                                 onClick={() => setIsLogin(false)}
                            >
                                Register Here
                            </button>
                        </>
                    ): (
                        <>
                            Already have an account?{" "}
                            <button
                                 type="button"
                                 className="font-bold Exo cursor-pointer hover:underline transition-all"
                                 onClick={() => setIsLogin(true)}
                            >
                                Login Here
                            </button>
                        </>
                    )}
                </p>

                <p className="text-center text-sm mt-4 pt-4 border-t border-white/10">
                By signing in or signing up to <Link href="https://uicode.in/" className="Exo font-bold">uicode</Link>, 
                you agree to our{" "}
                <Link href="/" className="font-bold Exo hover:underline">
                Terms of Use 
                </Link>{" "}
                and{" "}
                <Link href="/" className="font-bold Exo hover:underline">
                Privacy Policy
                </Link>.
                </p>
            </div>
        </div>
    )}
    </>
  )
}
