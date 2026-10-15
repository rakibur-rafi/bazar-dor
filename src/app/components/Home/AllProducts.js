import React from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';

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
                        <ProductCard product={product} key={product.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default AllProducts;