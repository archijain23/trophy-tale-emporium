
import React from 'react';

const Shop = () => {
  console.log("Shop component is rendering");
  
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-2">Sample Product</h3>
            <p className="text-gray-600">This is a sample product for the shop page.</p>
            <p className="text-xl font-bold text-primary mt-4">$29.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
