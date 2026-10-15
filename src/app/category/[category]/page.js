import CategoryContent from '@/app/components/Category/CategoryContent';
import React from 'react';

const Category = async ({params}) => {
    const {category}= await params
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${category}`);
    const products = await res.json();
    return (
        <div>
            <CategoryContent products={products} />;
        </div>
    );
};

export default Category;