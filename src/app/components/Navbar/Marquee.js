
import React from 'react';
import PriceTicker from './PriceTicker';

const Marquee = async () => {
    const res = await fetch(
        'https://api.abcz.workers.dev/api/bazardor/products'
    );

    if (!res.ok) {
        throw new Error('Failed to fetch product prices');
    }

    const products = await res.json();

    return <PriceTicker products={products} />;
};

export default Marquee;