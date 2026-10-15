import React from "react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
                <div className="mb-5">
                    <h1 className="text-5xl font-bold text-[#1d271f]">
                        ৪০৪
                    </h1>
                </div>

                <h1 className="text-3xl font-bold text-[#1d271f]">
                    পাওয়া যায়নি
                </h1>

                <p className="mt-3 max-w-md text-[#1d271f]/70">
                    এই পেজটি খুঁজে পাওয়া যায়নি।
                </p>

                <Link
                    href="/"
                    className="mt-6 rounded-xl bg-[#05893E] px-6 py-3 font-semibold text-white transition hover:bg-[#047532]"
                >
                    হোম পেজে ফিরে যান
                </Link>
            </div>
    );
};

export default NotFound;

