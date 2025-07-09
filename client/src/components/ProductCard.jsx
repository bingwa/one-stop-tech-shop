// client/src/components/ProductCard.jsx
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import { PlusIcon, MinusIcon, CheckIcon, XCircleIcon } from '@heroicons/react/24/solid';

export default function ProductCard({ product }) {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useCart();
  const itemInCart = cartItems.find(item => item.id === product.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;
  const isOutOfStock = product.stock === 0;

  const handleIncrease = (e) => {
    e.preventDefault(); e.stopPropagation();
    if (isOutOfStock) return;
    addToCart(product);
  };

  const handleDecrease = (e) => {
    e.preventDefault(); e.stopPropagation();
    if (isOutOfStock) return;
    if (itemInCart) {
      if (itemInCart.quantity === 1) {
        // If quantity is 1, it should be removed, but the current context has a separate `removeFromCart`.
        // For simplicity, we'll use decreaseQuantity which handles not going below 1.
        decreaseQuantity(product.id);
      } else {
        decreaseQuantity(product.id);
      }
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
      
      {/* Stock Badge */}
      <div className={`absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold text-white ${isOutOfStock ? 'bg-red-500' : 'bg-green-500'}`}>
        {isOutOfStock ? <XCircleIcon className="h-4 w-4" /> : <CheckIcon className="h-4 w-4" />}
        {isOutOfStock ? 'Out of Stock' : 'In Stock'}
      </div>

      <div className={`aspect-h-4 aspect-w-3 bg-gray-200 sm:h-60 ${isOutOfStock ? 'grayscale' : ''}`}>
        <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"/>
      </div>
      
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">{product.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 flex-grow">{product.description.substring(0, 60)}...</p>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{"Ksh " + product.price}</p>
        </div>
      </div>
       
       <div className="p-4 pt-0 z-10">
         <div className="flex items-center justify-center gap-2">
           <div className={`flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 shadow-sm flex-shrink-0 ${isOutOfStock ? 'opacity-50' : ''}`}>
             <button onClick={handleDecrease} className="p-2.5 text-gray-700 dark:text-gray-200 rounded-l-full hover:bg-gray-200 dark:hover:bg-gray-600 disabled:cursor-not-allowed" disabled={quantity === 0 || isOutOfStock}>
               <MinusIcon className="h-5 w-5" />
             </button>
             <span className="px-2 text-center font-bold text-gray-900 dark:text-gray-100 text-base w-8">{quantity}</span>
             <button onClick={handleIncrease} className="p-2.5 text-gray-700 dark:text-gray-200 rounded-r-full hover:bg-gray-200 dark:hover:bg-gray-600 disabled:cursor-not-allowed" disabled={isOutOfStock}>
               <PlusIcon className="h-5 w-5" />
             </button>
           </div>
           <button onClick={handleIncrease} className="flex-grow rounded-full bg-primary-blue px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-md hover:bg-secondary-blue disabled:opacity-50 disabled:cursor-not-allowed" disabled={isOutOfStock}>
             {isOutOfStock ? 'Unavailable' : 'Add to Cart'}
           </button>
         </div>
       </div>
    </Link>
  );
}
