import React from 'react';
import Link from 'next/link';
const ChangeUp = ({up}) => {
    const units = {
    kg: "কেজি",
    litre: "লিটার",
    piece: "পিস",
    dozen: "ডজন",
    }

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
                <p className='text-lg text-[#D03739]'>▲</p>
                <h1 className='text-xl font-bold text-[#1D271F]'>আজ দাম বেড়েছে</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    up.map(product => (
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
                                    <p className='bg-[#F0F5F0] px-2 py-1 rounded-3xl space-x-1 text-[#D03739]'>
                                        <span className='text-sm'>▲</span>
                                        <span className='text-sm font-bold'>{product.change.pct.toLocaleString('bn-BD')}%</span></p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default ChangeUp;