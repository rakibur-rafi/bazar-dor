import React from 'react';
import Link from 'next/link';

const ProductCard = ({product}) => {
    const units = {
    kg: "কেজি",
    litre: "লিটার",
    piece: "পিস",
    dozen: "ডজন",
    }
    return (
        <Link href={`/product/${product.id}`} key={product.id} className='flex flex-col gap-4 bg-[#FAFCFA] border border-[#E1E8E1] rounded-3xl p-4'>
            <div className='flex items-center gap-3'>
                <p className='bg-[#F0F5F0] px-3 py-2 rounded-xl'>{product.image}</p>
                <div className='flex flex-col gap-1'>
                    <span className='text-md text-[#1D271F] text-md font-semibold'>{product.nameBn}</span>
                    <span className='text-xs text-[#1D271F]/70'>প্রতি {units[product.unit] || product.unit}</span>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <p className='text-xs '>আজকের দাম</p>
                    <p className='space-x-1'>
                        <span className='text-xl font-bold text-[#1D271F]'>{product.today.toLocaleString('bn-BD')}</span>
                        <span className='font-medium text-sm'>টাকা</span>
                    </p>
                </div>
                <div className='flex items-end'>
                    <p
                        className={`inline-flex items-center gap-1 rounded-3xl px-2 py-1 bg-[#F0F5F0]${
                            product.change.dir === "up"
                                ? " text-[#D03739]"
                                : product.change.dir === "down"
                                ? " text-[#1A9951]"
                                : " text-[#1d271f]/60"
                        }`}
                    >
                        <span className="text-sm">
                            {product.change.dir === "up"
                                ? "▲"
                                : product.change.dir === "down"
                                ? "▼"
                                : "—"}
                        </span>

                        <span className="text-sm font-bold">
                            {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
                        </span>
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;