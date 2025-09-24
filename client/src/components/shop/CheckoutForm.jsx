// CheckoutForm.jsx - Modern Checkout Form
import React, { useState } from 'react';
import { CreditCardIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'mpesa'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout logic
    console.log('Checkout submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
      {/* Personal Info */}
      <div className="space-y-6 mb-8">
        <h3 className="font-bold text-xl text-slate-900 dark:text-white">Shipping Information</h3>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors duration-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors duration-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Shipping Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors duration-300"
            required
          />
        </div>
      </div>

      {/* Payment Method */}
      <div className="space-y-6 mb-8">
        <h3 className="font-bold text-xl text-slate-900 dark:text-white">Payment Method</h3>
        <div className="space-y-4">
          <label className="flex items-center space-x-3 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300 cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="mpesa"
              checked={formData.paymentMethod === 'mpesa'}
              onChange={handleChange}
              className="w-5 h-5 text-blue-600 focus:ring-blue-500"
            />
            <div className="flex-1">
              <div className="font-medium text-slate-900 dark:text-white">M-Pesa</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Pay via mobile money</div>
            </div>
            <img src="/api/placeholder/40/24" alt="M-Pesa" className="h-6" />
          </label>
          
          <label className="flex items-center space-x-3 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300 cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={formData.paymentMethod === 'card'}
              onChange={handleChange}
              className="w-5 h-5 text-blue-600 focus:ring-blue-500"
            />
            <div className="flex-1">
              <div className="font-medium text-slate-900 dark:text-white">Credit/Debit Card</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Visa, MasterCard</div>
            </div>
            <CreditCardIcon className="w-6 h-6 text-slate-400" />
          </label>
        </div>
      </div>

      {/* Secure Note */}
      <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
        <LockClosedIcon className="w-5 h-5 text-green-500" />
        <span>Secure checkout with SSL encryption</span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
      >
        <span>Complete Purchase</span>
        <ArrowRightIcon className="w-5 h-5" />
      </button>
    </form>
  );
};

export default CheckoutForm;
