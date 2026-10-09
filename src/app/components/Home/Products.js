import React from 'react';
import ChangeUp from './ChangeUp';
import ChangeDown from './ChangeDown';
import AllProducts from './AllProducts';

const Products = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    const products= await res.json();
    const changeUp = products.filter(product => product.change.dir === 'up').sort((a, b) => b.change.pct - a.change.pct).slice(0, 6)
    const changeDown = products.filter(product => product.change.dir === 'down').sort((a, b) => a.change.pct - b.change.pct).slice(0, 6)
    return (
        <div>
            <div className='flex flex-col gap-10'>
                <ChangeUp up={changeUp}/>
                <ChangeDown down={changeDown}/>
                <AllProducts products={products}/>
            </div>
        </div>
    );
};

export default Products;