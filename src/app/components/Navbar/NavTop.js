
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const NavTop = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    const navButtons = (
        <>
            <Link href="/sign-in"><button className="btn bg-white text-black border-none shadow-none text-sm px-2 sm:px-4 py-2.5 font-semibold rounded-lg">
                সাইন ইন
            </button></Link>

            <Link href="/sign-up">
            <button className="btn bg-[#05893E] border-none text-sm shadow-md shadow-[#05893E]/60 px-2 sm:px-4 py-2.5 font-semibold rounded-lg">
                সাইন আপ
            </button></Link>
        </>
    );

    return (
        <div className="w-full border-b border-[#F0F5F0]">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-2 sm:px-4 gap-2">
                <div className="p-2 rounded-lg flex items-center gap-2 min-w-0">
                    <Link href="/" className="p-2 rounded-lg bg-[#05893E] shrink-0">
                        <Image
                            src="/logo-icon.png"
                            width={28}
                            height={28}
                            alt="logo"
                            priority
                        />
                    </Link>

                    <div className="flex flex-col min-w-0">
                        <Link href="/" className="text-xl font-semibold whitespace-nowrap text-black">বাজার দর</Link>
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