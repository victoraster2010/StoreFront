import React from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = () => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4 md:ml-8">
      <div className="px-4 py-2">
        <img src="box.png" alt="product" className="w-full h-32 object-cover" />
        <h2 className="text-gray-800 text-lg font-semibold capitalize mt-2">ProductName</h2>
        <p className="text-gray-600 mt-1"># id</p>
      </div>
      <div className="px-4 py-2 flex justify-end">
        <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
      </div>
    </div>
  );
};


