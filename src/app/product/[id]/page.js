
import MarketPriceTable from "@/app/components/Product/MarketPriceTable";
import React from "react";

const ProductDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(
        `https://api.api-store.workers.dev/api/bazardor/products/${id}`
    );

    const product = await res.json();

    const markets = product.markets;


    const units = {
        kg: "কেজি",
        litre: "লিটার",
        piece: "পিস",
        dozen: "ডজন",
    };

    return (
        <div className="mx-auto max-w-7xl px-4">
            <div>
                <div className="mt-8 mb-4 flex items-center justify-between rounded-3xl border border-[#E1E8E1] bg-[#fafcfa] p-6">
                    <div className="flex items-center gap-4">
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-4xl">
                            {product.image}
                        </div>

                        <div className="flex flex-col gap-1">
                            <div>
                                <h1 className="text-3xl font-bold text-[#1d271f]">
                                    {product.nameBn}
                                </h1>

                                <p className="text-sm text-[#1d271f]/70">
                                    প্রতি {units[product.unit]} ·{" "}
                                    {product.categoryNameBn}
                                </p>
                            </div>

                            <div>
                                {product.change.dir === "up" ? (
                                    <p className="mt-1 text-sm">
                                        গতকালের তুলনায় আজ দাম{" "}
                                        <span className="font-semibold">
                                            বেড়েছে
                                        </span>{" "}
                                        -{" "}
                                        {(
                                            product.today - product.yesterday
                                        ).toLocaleString("bn-BD")}{" "}
                                        টাকা
                                    </p>
                                ) : product.change.dir === "down" ? (
                                    <p className="mt-1 text-sm">
                                        গতকালের তুলনায় আজ দাম{" "}
                                        <span className="font-semibold">
                                            কমেছে
                                        </span>{" "}
                                        -{" "}
                                        {(
                                            product.yesterday - product.today
                                        ).toLocaleString("bn-BD")}{" "}
                                        টাকা
                                    </p>
                                ) : (
                                    <p className="mt-1 text-sm">
                                        দাম পরিবর্তন হয়নি
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center rounded-3xl bg-[#F0F5F0] p-5">
                        <p className="text-sm text-[#1d271f]/70">
                            আজকের দাম
                        </p>

                        <p className="text-3xl font-bold text-[#1d271f]">
                            {product.today.toLocaleString("bn-BD")}
                        </p>

                        <p className="text-sm text-[#1d271f]/70">
                            টাকা / {units[product.unit]}
                        </p>

                        {product.change.dir === "up" ? (
                            <p className="text-sm font-semibold text-[#1d271f]">
                                ▲{" "}
                                {product.change.pct.toLocaleString("bn-BD")} %
                            </p>
                        ) : product.change.dir === "down" ? (
                            <p className="text-sm font-semibold text-[#1d271f]">
                                ▼{" "}
                                {product.change.pct.toLocaleString("bn-BD")} %
                            </p>
                        ) : (
                            <p className="text-sm font-semibold text-[#1d271f]">
                                —{" "}
                                {product.change.pct.toLocaleString("bn-BD")} %
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <MarketPriceTable
                markets={markets}
                unit={product.unit}
            />
        </div>
    );
};

export default ProductDetails;