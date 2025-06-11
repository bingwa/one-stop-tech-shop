import { useCart } from '@/context/CartContext.jsx';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

export default function ProductCard({ product }) {
  const { cart, addToCart, updateQuantity } = useCart();

  const itemInCart = cart.find(item => item.id === product.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  const handleIncrease = () => {
    addToCart(product);
  };

  const handleDecrease = () => {
    if (itemInCart) {
      updateQuantity(product.id, itemInCart.quantity - 1); 
    }
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-2xl">
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-60">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"/>
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <span aria-hidden="true" className="absolute inset-0 z-10" />
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 flex-grow">{product.description}</p>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-lg font-bold text-gray-900">${product.price}</p>
        </div>
      </div>
       
       <div className="p-4 pt-0 z-20">
         <div className="flex items-center justify-center gap-2">
           <div className="flex items-center justify-center rounded-full bg-gray-100 shadow-sm flex-shrink-0">
             <button 
               onClick={handleDecrease} 
               className="p-2.5 text-gray-700 hover:text-red-500 rounded-l-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
               disabled={quantity === 0}
             >
               <MinusIcon className="h-5 w-5" />
             </button>
             <span className="px-2 text-center font-bold text-gray-900 text-base w-8">{quantity}</span>
             <button onClick={handleIncrease} className="p-2.5 text-gray-700 hover:text-blue-500 rounded-r-full hover:bg-gray-200 transition-colors">
               <PlusIcon className="h-5 w-5" />
             </button>
           </div>
           <button 
             onClick={handleIncrease}
             className="flex-grow rounded-full bg-primary-blue px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-md hover:bg-secondary-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue transition-all duration-200 ease-in-out"
           >
             Add to Cart
           </button>
         </div>
       </div>
    </div>
  );
}
