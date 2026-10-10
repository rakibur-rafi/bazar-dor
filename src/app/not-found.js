import React from "react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] items-center justify-center  px-4 py-12">
            <div className="w-full max-w-md rounded-2xl border border-[#E1E8E1] bg-white p-8 text-center shadow-sm sm:p-10">
                <h1 className="text-8xl font-extrabold tracking-tight text-[#D03739]">
                    ৪০৪
                </h1>

                {/* Message */}
                <h2 className="mt-4 text-2xl font-bold text-[#1d271f]">
                    পেজটি খুঁজে পাওয়া যায়নি
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#1d271f]/60">
                    দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
                    পেজটি সরানো হয়েছে অথবা লিংকটি ভুল হতে পারে।
                </p>

                {/* Back Home */}
                <Link
                    href="/"
                    className="mt-7 inline-flex items-center justify-center rounded-xl bg-[#D03739] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#157A40]"
                >
                    ← হোম পেজে ফিরে যান
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
