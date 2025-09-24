// client/src/pages/ProductDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import ProductCard from '../components/shop/ProductCard.jsx';
import { StarIcon } from '@heroicons/react/20/solid';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  
 

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        setError(null);
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        
        const productResponse = await fetch(`${apiUrl}/api/products/${id}`);
        if (!productResponse.ok) throw new Error(`Product with ID ${id} not found. Make sure the server is running the latest code.`);
        
        const productData = await productResponse.json();
        setProduct(productData);

        if (productData.images && productData.images.length > 0) {
            setSelectedImage(productData.images[0]);
        } else {
            setSelectedImage({ id: 0, src: productData.image, alt: productData.name });
        }
        
        const allProductsResponse = await fetch(`${apiUrl}/api/products`);
        const allProductsData = await allProductsResponse.json();
        
        const similar = allProductsData.filter(p => p.category === productData.category && p.id !== parseInt(id));
        setSimilarProducts(similar.slice(0, 4));

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <div className="text-center py-20">Loading Product...</div>;
  if (error) return (
    <div className="text-center py-20"><h2 className="text-2xl font-bold text-red-600">Error</h2><p className="text-gray-600 mt-2">{error}</p><Link to="/shop" className="mt-6 inline-block rounded-md bg-blue-600 px-4 py-2.5 font-semibold text-white">Back to Shop</Link></div>
  );
  if (!product) return null;

  const isOutOfStock = product.stock === 0;

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 pt-6 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <nav aria-label="Breadcrumb"><ol role="list" className="flex items-center space-x-2"><li className="text-sm"><Link to="/shop" className="font-medium text-gray-500 hover:text-gray-600">Shop</Link></li><li><div className="flex items-center"><svg className="h-5 w-5 flex-shrink-0 text-gray-300" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg><Link to="/shop" className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-600">{product.category}</Link></div></li></ol></nav>
        
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
          {/* Image gallery */}
          <div className="flex flex-col-reverse">
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <ul className="grid grid-cols-4 gap-6">
                {product.images && product.images.length > 1 && product.images.map((image) => (
                  <li key={image.id} onClick={() => setSelectedImage(image)} className="relative flex items-center justify-center h-24 cursor-pointer rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-center rounded-md" />
                    {selectedImage && selectedImage.id === image.id && <span className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-blue-600 ring-offset-2" aria-hidden="true" />}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-w-1 aspect-h-1 w-full">{selectedImage && <img src={selectedImage.src} alt={selectedImage.alt} className="h-full w-full object-contain object-center rounded-lg shadow-lg sm:rounded-lg"/>}</div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
            <div className="mt-4 flex justify-between items-center"><p className="text-3xl tracking-tight text-gray-900">{"Ksh " + product.price.toFixed(2)}</p><span className={`inline-flex items-center gap-x-1.5 rounded-full px-3 py-1 text-sm font-medium ${isOutOfStock ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{isOutOfStock ? 'Out of Stock' : 'In Stock'}</span></div>
            <div className="mt-3"><div className="flex items-center"><StarIcon className="h-5 w-5 text-yellow-400" /><StarIcon className="h-5 w-5 text-yellow-400" /><StarIcon className="h-5 w-5 text-yellow-400" /><StarIcon className="h-5 w-5 text-yellow-400" /><StarIcon className="h-5 w-5 text-gray-300" /><span className="text-sm text-gray-500 ml-2">(12 Reviews)</span></div></div>
            
            <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-base font-semibold text-gray-900">Key Features</h3>
                <ul role="list" className="mt-4 space-y-3 text-sm text-gray-600">{product.specs && product.specs.map((spec) => (<li key={spec.name} className="flex"><span className="font-semibold w-32 flex-shrink-0">{spec.name}</span><span>{spec.value}</span></li>))}</ul>
            </div>

            <button onClick={() => addToCart(product)} type="button" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={isOutOfStock}>Add to cart</button>
            
            <div className="mt-10">
                <h3 className="text-base font-semibold text-gray-900">Description</h3>
                <div className="mt-4 prose prose-sm text-gray-600 max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
          </div>
        </div>

        {similarProducts.length > 0 && (
            <div className="mt-24"><h2 className="text-2xl font-bold tracking-tight text-gray-900">You Might Also Like</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {similarProducts.map((p) => <ProductCard key={p.id} product={p} />)}
                </div>
            </div>
        )}
      </div>
    </div>
  )
}
