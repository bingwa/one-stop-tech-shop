// ProductCard.jsx - Modern Product Card Component
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, EyeIcon } from '@heroicons/react/24/outline';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-slate-100 dark:border-slate-700">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors duration-300">
            <ShoppingCartIcon className="w-5 h-5 text-white" />
          </button>
          <Link to={`/product/${product.id}`} className="block p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors duration-300">
            <EyeIcon className="w-5 h-5 text-white" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-xl text-blue-600 dark:text-blue-400">
            {product.price}
          </span>
          <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Category Badge */}
      <div className="absolute top-4 left-4 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium capitalize">
        {product.category}
      </div>
    </div>
  );
};

export default ProductCard;
