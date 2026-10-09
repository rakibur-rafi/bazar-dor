
import Image from 'next/image';
import React from 'react';

const NavTop = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    const navButtons = (
        <>
            <button className="btn btn-ghost text-black text-sm px-2 sm:px-4 py-2.5 font-semibold rounded-lg">
                সাইন ইন
            </button>

            <button className="btn bg-[#05893E] border-none text-sm text-white shadow-md shadow-[#05893E]/60 px-2 sm:px-4 py-2.5 font-semibold rounded-lg">
                সাইন আপ
            </button>
        </>
    );

    return (
        <div className="w-full border-b border-[#F0F5F0]">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-2 sm:px-4 gap-2">
                <div className="p-2 rounded-lg flex items-center gap-2 min-w-0">
                    <div className="p-2 rounded-lg bg-[#05893E] shrink-0">
                        <Image
                            src="/logo-icon.png"
                            width={28}
                            height={28}
                            alt="logo"
                            priority
                        />
                    </div>

                    <div className="flex flex-col min-w-0">
                        <h1 className="text-xl font-semibold whitespace-nowrap text-black">বাজার দর</h1>
                        <p className="text-xs text-[#1D271F]">{date}</p>
                    </div>
                </div>

                <div className="flex gap-1 sm:gap-2 shrink-0">
                    {navButtons}
                </div>
            </div>
        </div>
    );
};

export default NavTop;