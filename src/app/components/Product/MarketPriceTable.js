
import React from "react";

const MarketPriceTable = ({ markets, unit }) => {
    const units = {
        kg: "কেজি",
        litre: "লিটার",
        piece: "পিস",
        dozen: "ডজন",
    };

    const minPrice = Math.min(
        ...markets.map((market) => market.min)
    );

    const maxPrice = Math.max(
        ...markets.map((market) => market.max)
    );

    const avgPrice = Math.round(
        markets.reduce(
            (total, market) => total + (market.min + market.max) / 2,
            0
        ) / markets.length
    );

    return (
        <div className="mx-auto mt-6 max-w-7xl rounded-3xl border border-[#E1E8E1] bg-[#FAFCFA] p-4 sm:p-6">

            <div className="mb-8">
                <h2 className="mb-5 text-xl font-bold text-[#1d271f]">
                    দামের সারসংক্ষেপ
                </h2>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {/* Minimum Price */}
                    <div className="rounded-2xl border border-[#E1E8E1] bg-white p-4">
                        <p className="text-sm text-[#1d271f]">
                            সর্বনিম্ন দাম
                        </p>

                        <p className="mt-2 text-2xl font-bold text-[#1A9951]">
                            {minPrice.toLocaleString("bn-BD")} টাকা
                        </p>

                        <p className="mt-1 text-xs text-[#1d271f]/70">
                            সবচেয়ে কম দামের বাজার
                        </p>
                    </div>

                    

                    {/* Maximum Price */}
                    <div className="rounded-2xl border border-[#E1E8E1] bg-white p-4">
                        <p className="text-sm text-[#1d271f]">
                            সর্বোচ্চ দাম
                        </p>

                        <p className="mt-2 text-2xl font-bold text-[#E11D48]">
                            ৳{maxPrice.toLocaleString("bn-BD")}
                        </p>

                        <p className="mt-1 text-xs text-[#1d271f]/70">
                            সবচেয়ে বেশি দামের বাজার
                        </p>
                    </div>

                    {/* Average Price */}
                    <div className="rounded-2xl border border-[#E1E8E1] bg-white p-4">
                        <p className="text-sm text-[#1d271f]">
                            গড় দাম
                        </p>

                        <p className="mt-2 text-2xl font-bold text-[#1A9951]">
                            ৳{avgPrice.toLocaleString("bn-BD")}
                        </p>

                        <p className="mt-1 text-xs text-[#1d271f]/70">
                            প্রতি {units[unit]}-এর হিসাবে
                        </p>
                    </div>
                </div>
            </div>


            {/* Table Header */}
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-xl font-bold text-[#1d271f]">
                        বাজারভিত্তিক আজকের দাম
                    </h2>
            </div>

            {/* Market Price Table */}
            <div className="w-full overflow-x-auto rounded-2xl border border-[#E1E8E1]">
                <table className="w-full min-w-[700px] text-left">
                    <thead className="bg-[#F0F5F0]">
                        <tr className="text-sm text-[#1d271f]/70">
                            <th className="px-5 py-4 font-semibold">
                                বাজার
                            </th>

                            <th className="px-5 py-4 font-semibold">
                                বিভাগ
                            </th>

                            <th className="whitespace-nowrap px-5 py-4 text-right font-semibold">
                                সর্বনিম্ন
                            </th>

                            <th className="whitespace-nowrap px-5 py-4 text-right font-semibold">
                                সর্বাধিক
                            </th>

                            <th className="whitespace-nowrap px-5 py-4 text-right font-semibold">
                                গড়
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {markets.map((market, index) => {
                            const marketAvg = Math.round(
                                (market.min + market.max) / 2
                            );

                            return (
                                <tr
                                    key={market.market}
                                    className={`border-t border-[#E1E8E1] transition-colors hover:bg-[#F0F5F0] ${
                                        index % 2 === 1
                                            ? "bg-[#FAFCFA]"
                                            : "bg-white"
                                    }`}
                                >
                                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-[#1d271f]">
                                        {market.market}
                                    </td>

                                    <td className="whitespace-nowrap px-5 py-4 text-sm text-[#1d271f]">
                                        {market.division}
                                    </td>

                                    <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-[#1d271f]">
                                        ৳{market.min.toLocaleString("bn-BD")}
                                    </td>

                                    <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-[#1d271f]">
                                        ৳{market.max.toLocaleString("bn-BD")}
                                    </td>

                                    <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-[#1d271f]">
                                        ৳{marketAvg.toLocaleString("bn-BD")}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MarketPriceTable;
