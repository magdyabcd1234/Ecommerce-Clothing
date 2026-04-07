import React from 'react'

export default function HotDealBanner() {
  return (
    <>
        <div className="HotDealBanner">
            <div className="HotDealBanner-top"></div>
            <div className="HotDealBanner-bottom"></div>
            <div className="w-full md:w-[50%] lg:w-[30%]">
                <h5 className="text-white Exo text-xl uppercase font-semibold">hot deal this week</h5>
                <h2 className="text-white Exo my-5 text-7xl font-semibold">Flat 40% off everything</h2>
                <button className="btn btn-left bg-white font-semibold hover:bg-prim shadow-md shadow-white hover:shadow-prim">
                  <span className="">Explore More</span>
                </button>
            </div>
        </div>
    </>
  )
}
