import React from 'react';
import Image from 'next/image';

const Hero = () => {
    const date= new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    })
return ( 
        <div className="my-8 max-sm:my-4 bg-[#fafcfa] rounded-3xl overflow-hidden"> 
            <div className="px-8 max-sm:px-4 py-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                <div className="flex flex-col items-start gap-5">
                    <span className="px-4 py-2 rounded-full bg-[#e4f2e9] text-[#068a3f] text-sm font-semibold">
                        {date}
                    </span>

                    <h1 className="text-4xl font-bold text-[#1D271F]">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className=" text-[#1D271F]/70 leading-relaxed max-w-lg">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                    </p>

                    <a href="#সব-পণ্য"><button className="btn bg-[#05893E] text-sm shadow-md shadow-[#05893E]/60 text-white border-none rounded-xl px-6">
                        সব পণ্য দেখুন
                    </button></a>
                </div>

                <div className="flex justify-end max-sm:justify-center">
                    <Image
                    src="/bazar-hero.png"
                    alt="bazar-dor"
                    width={315}
                    height={315}
                    loading='eager'
                    />
                </div>
         

        </div>
    </div>
);

};

export default Hero;
