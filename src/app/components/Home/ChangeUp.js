import React from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';
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
                        <ProductCard product={product} key={product.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ChangeUp;