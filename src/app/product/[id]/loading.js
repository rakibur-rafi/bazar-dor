
import React from "react";

const Loading = () => {
    return (
        <div className="mx-auto max-w-7xl px-4">
            <div className="mt-8 mb-4 flex flex-col gap-6 rounded-3xl border border-[#E1E8E1] bg-[#fafcfa] p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                    <div className="skeleton h-20 w-20 shrink-0 rounded-xl bg-[#f0f5f0]" />

                    <div className="flex flex-col gap-3">
                        <div className="skeleton h-8 w-48 bg-[#E1E8E1]" />

                        <div className="skeleton h-4 w-32 bg-[#E1E8E1]" />

                        <div className="skeleton h-4 w-56 bg-[#E1E8E1]" />
                    </div>
                </div>

                {/* Today's Price Skeleton */}
                <div className="flex min-w-40 flex-col items-center gap-3 rounded-3xl bg-[#F0F5F0] p-5">
                    <div className="skeleton h-4 w-20 bg-[#E1E8E1]" />

                    <div className="skeleton h-9 w-24 bg-[#E1E8E1]" />

                    <div className="skeleton h-4 w-28 bg-[#E1E8E1]" />

                    <div className="skeleton h-4 w-16 bg-[#E1E8E1]" />
                </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-[#E1E8E1] bg-white">
                <div className="border-b border-[#E1E8E1] bg-[#fafcfa] p-5">
                    <div className="skeleton h-6 w-48 bg-[#E1E8E1]" />
                </div>

                <div className="grid grid-cols-3 gap-4 border-b border-[#E1E8E1] p-4">
                    <div className="skeleton h-4 w-20 bg-[#E1E8E1]" />
                    <div className="skeleton h-4 w-16 bg-[#E1E8E1]" />
                    <div className="skeleton h-4 w-16 bg-[#E1E8E1]" />
                </div>

                <div className="divide-y divide-[#E1E8E1]">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-3 items-center gap-4 p-4"
                        >
                            <div className="skeleton h-5 w-28 bg-[#f0f5f0]" />
                            <div className="skeleton h-5 w-16 bg-[#E1E8E1]" />
                            <div className="skeleton h-5 w-16 bg-[#E1E8E1]" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Loading;
