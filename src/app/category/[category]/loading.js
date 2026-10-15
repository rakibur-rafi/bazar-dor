
import React from "react";

const Loading = () => {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 pb-12">
            {/* Category Header Skeleton */}
            <div className="mt-8 mb-4 flex items-center gap-4 rounded-3xl border border-[#E1E8E1] bg-[#fafcfa] p-6">
                <div className="skeleton h-20 w-20 shrink-0 rounded-xl bg-[#f0f5f0]" />

                <div className="flex flex-col gap-3">
                    <div className="skeleton h-8 w-32 bg-[#E1E8E1]" />
                    <div className="skeleton h-4 w-48 bg-[#E1E8E1]" />
                </div>
            </div>

            {/* Sorting Skeleton */}
            <div className="mb-6 flex items-center justify-end gap-3 rounded-2xl border border-[#E1E8E1] bg-[#fafcfa] p-4">
                <div className="skeleton h-5 w-16 bg-[#E1E8E1]" />
                <div className="skeleton h-12 w-48 rounded-xl bg-[#E1E8E1]" />
            </div>

            {/* Product Card Skeletons */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-[#E1E8E1] bg-white p-5"
                    >
                        <div className="skeleton mb-4 h-16 w-16 rounded-xl bg-[#f0f5f0]" />
                        <div className="skeleton mb-3 h-5 w-3/4 bg-[#E1E8E1]" />
                        <div className="skeleton mb-4 h-4 w-1/2 bg-[#E1E8E1]" />
                        <div className="skeleton h-8 w-1/3 bg-[#E1E8E1]" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Loading;
