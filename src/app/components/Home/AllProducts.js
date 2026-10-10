import React from 'react';
import Link from 'next/link';

const AllProducts = ({products}) => {
    const units = {
    kg: "কেজি",
    litre: "লিটার",
    piece: "পিস",
    dozen: "ডজন",
    }
    return (
        <div id='সব-পণ্য' className='flex flex-col gap-4'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-xl font-bold text-[#1D271F]'>সব পণ্য</h1>
                <p className='text-sm text-[#1D271F]/70'>মোট {products.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    products.map(product => (
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
                                            className={`bg-[#F0F5F0] px-2 py-1 rounded-3xl space-x-1 text-sm font-semibold ${
                                                product.change.dir === 'up'
                                                    ? 'text-[#D03739]'
                                                    : product.change.dir === 'down'
                                                    ? 'text-[#1A9951]'
                                                    : 'text-[#1D271F]'
                                            }`}
                                        >
                                            <span>{product.change.dir === 'up'
                                                ? '▲'
                                                : product.change.dir === 'down'
                                                ? '▼'
                                                : '—'} </span>
                                                <span className='text-sm font-bold'>{product.change.pct.toLocaleString('bn-BD')}%</span>
                                        </p>
                                        
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default AllProducts;