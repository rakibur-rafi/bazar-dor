
import React from 'react';
import FastMarquee from 'react-fast-marquee';

const PriceTicker = ({ products }) => {
    return (
        <div className="w-full border-b border-[#F0F5F0]">
            <FastMarquee
                speed={40}
                pauseOnHover={true}
                autoFill={true}
                
            >
                {products.map(product => (
                    <div key={product.id} className="flex items-center gap-2 px-6 py-2 border-r border-[#F0F5F0] whitespace-nowrap ">
                        <span>{product.image}</span>
                        <span className="text-sm text-[#1D271F]">
                            {product.nameBn}
                        </span>

                        <span className="text-sm text-[#1D271F]">
                            {product.today.toLocaleString("bn-BD")} টাকা/কেজি
                        </span>

                        <span
                            className={`text-sm font-semibold ${
                                product.change.dir === 'up'
                                    ? 'text-[#D03739]'
                                    : product.change.dir === 'down'
                                    ? 'text-[#1A9951]'
                                    : 'text-[#1D271F]'
                            }`}
                        >
                            {product.change.dir === 'up'
                                ? '▲'
                                : product.change.dir === 'down'
                                ? '▼'
                                : '—'} 
                            <span> {product.change.pct.toLocaleString("bn-BD")}%</span>
                        </span>
                    </div>
                ))}
            </FastMarquee>
        </div>
    );
};

export default PriceTicker;