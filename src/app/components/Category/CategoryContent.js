
"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProductCard from "../Home/ProductCard";

const CategoryContent = ({ products }) => {
    const [sort, setSort] = useState("default");

    const sortedProducts = [...products].sort((a, b) => {
        if (sort === "low-to-high") {
            return a.today - b.today;
        }

        if (sort === "high-to-low") {
            return b.today - a.today;
        }

        return a.id - b.id;
    });

    if (!products || products.length === 0) {
        return (
            <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
                <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#f0f5f0] text-5xl">
                    🛒
                </div>

                <h1 className="text-3xl font-bold text-[#1d271f]">
                    পণ্য পাওয়া যায়নি!
                </h1>

                <p className="mt-3 max-w-md text-[#1d271f]/70">
                    এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
                    অন্য ক্যাটাগরি থেকে পণ্য খুঁজে দেখুন।
                </p>

                <Link
                    href="/"
                    className="mt-6 rounded-xl bg-[#05893E] px-6 py-3 font-semibold text-white transition hover:bg-[#047532]"
                >
                    হোম পেজে ফিরে যান
                </Link>
            </div>
        );
    }

    const categoryName = products[0].categoryNameBn;

    return (
        <div className="mx-auto w-full max-w-7xl px-4 pb-12">

            <div className="mt-8 mb-4 flex items-center gap-2 rounded-3xl border border-[#E1E8E1] bg-[#fafcfa] p-6">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center  text-4xl">
                    {products[0].categoryIcon}
                </div>

                <div>
                    <h1 className="text-3xl font-bold text-[#1d271f]">
                        {categoryName}
                    </h1>

                    <p className="mt-1 text-sm text-[#1d271f]/70">
                        {products.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>
            </div>


            <div className="mb-6 flex items-center justify-end gap-3 rounded-2xl border border-[#E1E8E1] bg-[#fafcfa] p-4">
                <h2 className="font-semibold text-[#1d271f]">
                    সাজান
                </h2>

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="select select-bordered rounded-xl w-auto border-[#E1E8E1] bg-white text-sm font-medium text-[#1d271f] focus:border-[#05893E] focus:outline-none"
                >
                    <option value="default">ডিফল্ট</option>
                    <option value="low-to-high">দাম: কম থেকে বেশি</option>
                    <option value="high-to-low">দাম: বেশি থেকে কম</option>
                </select>
            </div>

            <div>
                 <p className="mb-6 text-sm text-[#1d271f]/70">
                        মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
                    </p>
            </div>



            {/* Products */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sortedProducts.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default CategoryContent;
