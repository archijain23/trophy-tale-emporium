
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  console.log("ProductDetail component is rendering for product:", productId);
  
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Detail</h1>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-2xl font-semibold mb-4">Product ID: {productId}</h2>
          <p className="text-gray-600">This is a sample product detail page.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
