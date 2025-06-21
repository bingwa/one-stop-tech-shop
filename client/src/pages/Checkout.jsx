import { useCart } from '@/context/CartContext.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Checkout() {
    const { cart, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart();
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        if (!phone) { alert('Enter phone number'); return; }
        setLoading(true);
        try {
            const res = await fetch('http://localhost:5000/api/mpesa/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone, amount: totalPrice })
            });
            const data = await res.json();
            if (res.ok) {
                alert('Mpesa prompt sent. Please complete payment on your phone.');
                clearCart();
            } else {
                alert(`Payment error: ${data.message}`);
            }
        } catch (err) {
            console.error(err);
            alert('Network error, try again later');
        } finally {
            setLoading(false);
        }
    };

    if (cart.length === 0) {
        return (
            <div className="text-center py-24">
                <h1 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h1>
                <p className="mt-4 text-gray-600">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/shop" className="mt-6 inline-block rounded-md bg-primary-blue px-4 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-secondary-blue">
                    Go to Shop
                </Link>
            </div>
        )
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray sm:text-4xl">Shopping Cart</h1>
                <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16" onSubmit={handlePlaceOrder}>
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        <h2 id="cart-heading" className="sr-only">Items in your shopping cart</h2>
                        <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                            {cart.map((product) => (
                                <li key={product.id} className="flex py-6 sm:py-10">
                                    <div className="flex-shrink-0">
                                        <img src={product.image} alt={product.name} className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"/>
                                    </div>
                                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h3 className="text-sm">
                                                        <span className="font-medium text-gray-700 hover:text-gray-800">{product.name}</span>
                                                    </h3>
                                                </div>
                                                <p className="mt-1 text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
                                            </div>
                                            <div className="mt-4 sm:mt-0 sm:pr-9">
                                                <label htmlFor={`quantity-${product.id}`} className="sr-only">Quantity, {product.name}</label>
                                                <input id={`quantity-${product.id}`} name={`quantity-${product.id}`} type="number"
                                                    className="w-16 rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                                    value={product.quantity}
                                                    onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                                                />
                                                <div className="absolute right-0 top-0">
                                                    <button type="button" onClick={() => removeFromCart(product.id)} className="-m-2 inline-flex p-2 text-black-400 hover:text-gray-500">
                                                        <span className="sr-only">Remove</span>
                                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section aria-labelledby="summary-heading" className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
                        <h2 id="summary-heading" className="text-lg font-medium text-black mb-4">Order summary</h2>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">Mpesa Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="07xxxxxxxx"
                                className="block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-primary-blue focus:ring-primary-blue sm:text-sm"
                            />
                        </div>
                        <dl className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <dt className="text-sm text-black">Subtotal</dt>
                                <dd className="text-sm font-medium text-black">{"Ksh " + totalPrice.toFixed(2)}</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="flex items-center text-sm text-black">
                                    <span>Shipping estimate</span>
                                </dt>
                                <dd className="text-sm font-medium text-black">Ksh 5.00</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="text-base font-medium text-black">Order total</dt>
                                <dd className="text-base font-medium text-black">{"Ksh " + (totalPrice + 5).toFixed(2)}</dd>
                            </div>
                        </dl>
                        <div className="mt-6">
                            <button type="submit" disabled={loading} className="w-full rounded-md border border-transparent bg-primary-blue px-4 py-3 text-base font-medium text-black shadow-sm hover:bg-secondary-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                                Checkout
                            </button>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )
}
