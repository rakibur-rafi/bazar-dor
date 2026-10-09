import React from 'react';
import Hero from './components/Home/Hero';
import Products from './components/Home/Products';

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Hero/>
      <Products/>
    </div>
  );
};

export default page;