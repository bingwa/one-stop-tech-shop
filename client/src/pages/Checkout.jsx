import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import axios from 'axios';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const Checkout = () => {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [shippingInfo, setShippingInfo] = useState({
        firstName: '',
        lastName: '',
        streetAddress: '',
        townCity: '',
        county: '',
        postcode: '',
        phone: '',
        email: '',
    });
    const [loading, setLoading] = useState(false);
    const [paymentMessage, setPaymentMessage] = useState('');
    const [error, setError] = useState('');
    const [shippingCost, setShippingCost] = useState(0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({ ...shippingInfo, [name]: value });

        if (name === 'townCity') {
            if (value.trim().toLowerCase() === 'mombasa') {
                setShippingCost(0);
            } else {
                setShippingCost(400);
            }
        }
        setShippingInfo({ ...shippingInfo, [name]: value });
    };

    const handleMpesaPayment = async (e) => {
        e.preventDefault();
        setError('');
        setPaymentMessage('');

        if (!shippingInfo.phone || !/^(?:254|\+254|0)?(7\d{8}|1\d{8})$/.test(shippingInfo.phone)) {
            setError('Please enter a valid Kenyan phone number (e.g., 0712345678 or 0112345678).');
            return;
        }

        setLoading(true);
        setPaymentMessage('Processing payment... Please wait.');

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/stkpush`, {
                amount: getCartTotal() + shippingCost,
                phone: shippingInfo.phone,
            });
            
            setLoading(false);

            if (response.data.ResponseCode === '0') {
                setPaymentMessage('STK Push sent to your phone. Please enter your M-Pesa PIN to complete the transaction.');
                setTimeout(() => {
                    clearCart();
                    navigate('/order-confirmation');
                }, 15000);
            } else {
                 setError(response.data.ResponseDescription || 'An unexpected error occurred.');
            }

        } catch (err) {
            setLoading(false);
            console.error('M-Pesa API Error:', err);
            setError(err.response?.data?.message || 'Failed to initiate payment. Please try again.');
        }
    };

    if (cartItems.length === 0 && !loading) {
        return (
            <div className="text-center py-24 container mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Your Cart is Empty</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Looks like you haven't added anything to your cart yet.</p>
                <button onClick={() => navigate('/shop')} className="bg-primary-blue text-black font-bold py-3 px-8 rounded-full hover:bg-secondary-blue transition-all duration-300 shadow-lg transform hover:scale-105">
                    Start Shopping
                </button>
            </div>
        )
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <button onClick={() => navigate('/shop')} className="inline-flex items-center gap-2 text-primary-blue hover:text-secondary-blue mb-8 font-semibold">
                        <ArrowLeftIcon className="h-5 w-5" />
                        Back to Shop
                    </button>

                    <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
                        {/* Order Summary -> Left Column */}
                        <section className="lg:col-span-5 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-fit">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">Order Summary</h2>
                            <div className="space-y-5">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex items-center gap-4">
                                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-semibold text-gray-800 dark:text-gray-200">{item.name}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="font-semibold text-gray-800 dark:text-gray-100">KES {(item.price * item.quantity).toLocaleString()}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
                                <dl className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <dt className="text-gray-500 dark:text-gray-400">Subtotal</dt>
                                        <dd className="font-medium text-gray-800 dark:text-gray-200">KES {getCartTotal().toLocaleString()}</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-gray-500 dark:text-gray-400">Shipping</dt>
                                        <dd className="font-medium text-gray-800 dark:text-gray-200">KES {shippingCost.toLocaleString()}</dd>
                                    </div>
                                    <div className="flex justify-between text-base font-bold text-gray-900 dark:text-white">
                                        <dt>Total</dt>
                                        <dd>KES {(getCartTotal() + shippingCost).toLocaleString()}</dd>
                                    </div>
                                </dl>
                            </div>
                        </section>

                        {/* Shipping & Payment -> Right Column */}
                        <section className="lg:col-span-7 mt-12 lg:mt-0">
                            <form onSubmit={handleMpesaPayment} className="space-y-10">
                                {/* Shipping Details */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Shipping Address</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                                            <input type="text" id="firstName" name="firstName" value={shippingInfo.firstName} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700" required />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                                            <input type="text" id="lastName" name="lastName" value={shippingInfo.lastName} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700" required />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Street Address</label>
                                            <input type="text" id="streetAddress" name="streetAddress" value={shippingInfo.streetAddress} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700" required />
                                        </div>
                                        <div>
                                            <label htmlFor="townCity" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Town / City</label>
                                            <input type="text" id="townCity" name="townCity" value={shippingInfo.townCity} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700" required />
                                        </div>
                                        <div>
                                            <label htmlFor="county" className="block text-sm font-medium text-gray-700 dark:text-gray-300">County</label>
                                            <input type="text" id="county" name="county" value={shippingInfo.county} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700" required />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                            <input type="email" id="email" name="email" value={shippingInfo.email} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700" required />
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Details */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Payment</h2>
                                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/1200px-M-PESA_LOGO-01.svg.png" alt="M-Pesa" className="h-6"/>
                                                <span className="font-semibold text-gray-800 dark:text-gray-200">Lipa na M-Pesa</span>
                                            </div>
                                            <div className="w-10 h-6 rounded-full bg-green-500"></div>
                                        </div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">You will receive a prompt on your phone to complete the payment.</p>
                                        <div className="mt-4">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">M-Pesa Phone Number</label>
                                            <input type="tel" id="phone" name="phone" placeholder="0712345678" value={shippingInfo.phone} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <button 
                                        type="submit"
                                        disabled={loading || cartItems.length === 0}
                                        className="w-full bg-primary-blue text-black text-base font-bold py-4 rounded-full hover:bg-secondary-blue transition-all duration-300 shadow-lg transform hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {loading ? 'Processing...' : `Pay KES ${(getCartTotal() + shippingCost).toLocaleString()}`}
                                    </button>
                                    {paymentMessage && <p className="text-sm text-center mt-4 font-medium text-green-600 dark:text-green-400">{paymentMessage}</p>}
                                    {error && <p className="text-sm text-center mt-4 font-medium text-red-600 dark:text-red-400">{error}</p>}
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;