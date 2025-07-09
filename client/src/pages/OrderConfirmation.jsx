import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const OrderConfirmation = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center font-sans">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12">
          <CheckCircleIcon className="h-20 w-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Order Confirmed!</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Thank you for your purchase. Your order is being processed and you will receive a confirmation email shortly.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/shop" 
              className="bg-primary-blue text-black font-bold py-3 px-8 rounded-full hover:bg-secondary-blue transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Continue Shopping
            </Link>
            <Link 
              to="/" 
              className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-bold py-3 px-8 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
