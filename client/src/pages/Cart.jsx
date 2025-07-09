import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

const Cart = () => {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal } = useContext(CartContext);

    return (
        <div className="container mx-auto mt-10 p-5">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div className="text-center py-16">
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Your cart is currently empty.</p>
                    <Link to="/shop" className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between border-b dark:border-gray-700 py-4">
                                <div className="flex items-center space-x-4">
                                    <img src={item.image || 'https://placehold.co/80x80/e2e8f0/e2e8f0'} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                                    <div>
                                        <h2 className="font-semibold text-lg text-gray-800 dark:text-white">{item.name}</h2>
                                        <p className="text-gray-600 dark:text-gray-400">Price: KES {item.price.toLocaleString()}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-3 border rounded-md p-1 dark:border-gray-600">
                                        <button onClick={() => decreaseQuantity(item.id)} className="text-gray-600 dark:text-gray-300 hover:text-red-500"><FiMinus /></button>
                                        <span className="font-semibold">{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)} className="text-gray-600 dark:text-gray-300 hover:text-green-500"><FiPlus /></button>
                                    </div>
                                    <p className="font-semibold w-24 text-right">KES {(item.price * item.quantity).toLocaleString()}</p>
                                    <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                                        <FiTrash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="lg:col-span-1">
                         <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Cart Summary</h2>
                            <div className="flex justify-between mb-4 text-gray-600 dark:text-gray-300">
                                <span>Subtotal</span>
                                <span className="font-semibold">KES {getCartTotal().toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between mb-4 text-gray-600 dark:text-gray-300">
                                <span>Shipping</span>
                                <span className="font-semibold">Free</span>
                            </div>
                            <hr className="my-4 dark:border-gray-600" />
                            <div className="flex justify-between font-bold text-lg text-gray-800 dark:text-white">
                                <span>Total</span>
                                <span>KES {getCartTotal().toLocaleString()}</span>
                            </div>
                            <div className="mt-6 space-y-3">
                                <Link to="/checkout" className="w-full text-center bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition block font-semibold">
                                    Proceed to Checkout
                                </Link>
                                <Link to="/shop" className="w-full text-center bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-6 py-3 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition block font-semibold">
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
