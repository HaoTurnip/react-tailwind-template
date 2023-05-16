import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
    },
    {
      id: 2,
      name: 'Product 2',
    },
    {
      id: 3,
      name: 'Product 3',
    },
    {
      id: 4,
      name: 'Product 4',
    },
    {
      id: 5,
      name: 'Product 5',
    },
    {
      id: 6,
      name: 'Product 6',
    },
    {
      id: 7,
      name: 'Product 7',
    },
    {
      id: 8,
      name: 'Product 8',
    },
    {
      id: 9,
      name: 'Product 9',
    },
    {
      id: 10,
      name: 'Product 10',
    },
    {
      id: 11,
      name: 'Product 11',
    },
    {
      id: 12,
      name: 'Product 12',
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative overflow-hidden transition-all duration-300 transform hover:scale-105"
        >
          <div className="bg-gray-200 h-40 flex items-center justify-center">
            <FontAwesomeIcon icon={faShoppingCart} className="text-gray-600 text-4xl" />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-lg font-semibold">{product.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
