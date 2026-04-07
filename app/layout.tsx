import type { Metadata } from "next";
import { Exo, Geist, Geist_Mono, Luxurious_Roman } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import { WishlistProvider } from "./Pages/Wishlist/WishlistContext";
import { CartProvider } from "./Pages/Cart/CartContext";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer/Footer";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

const luxurious = Luxurious_Roman({
  weight: ["400"],
  variable: "--font-luxurious",
  subsets: ["latin"],
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orvena",
  description: "Orvena Fashion E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full ${exo.variable} ${luxurious.variable}`}
    >
      
      <body className="min-h-full flex flex-col">
      <WishlistProvider>
      <CartProvider>
      <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right"/>
      </CartProvider>
        </WishlistProvider>
        </body>
    </html>
  );
}
