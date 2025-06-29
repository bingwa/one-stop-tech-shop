import { useState, useEffect, useMemo } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const FilterDisclosure = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="border-b border-gray-200 py-6">
            <h3 className="-my-3 flow-root">
                <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">{title}</span>
                    <span className="ml-6 flex items-center"><ChevronDownIcon className={`h-5 w-5 transform transition-transform duration-200 ${isOpen ? '-rotate-180' : 'rotate-0'}`} /></span>
                </button>
            </h3>
            {isOpen && <div className="pt-6">{children}</div>}
        </div>
    );
};

export default function Shop() {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [filters, setFilters] = useState({
        categories: [],
        brands: [],
        conditions: [],
        price: 300000
    });

    const filterOptions = useMemo(() => ({
        categories: [...new Set(allProducts.map(p => p.category))],
        brands: [...new Set(allProducts.map(p => p.brand))],
        conditions: [...new Set(allProducts.map(p => p.condition))]
    }), [allProducts]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // In production, use the full URL, in development use the proxy
                const apiUrl = import.meta.env.PROD 
                    ? 'https://one-stop-tech-shop-api.onrender.com' 
                    : '';
                const response = await fetch(`${apiUrl}/api/products`);
                if (!response.ok) throw new Error('Network error. Is the server running?');
                const data = await response.json();
                setAllProducts(data);
            } catch (err) { setError(err.message); } 
            finally { setLoading(false); }
        };
        fetchProducts();
    }, []);

    const filteredProducts = useMemo(() => {
        return allProducts
            .filter(p => filters.categories.length === 0 || filters.categories.includes(p.category))
            .filter(p => filters.brands.length === 0 || filters.brands.includes(p.brand))
            .filter(p => filters.conditions.length === 0 || filters.conditions.includes(p.condition))
            .filter(p => p.price <= filters.price);
    }, [filters, allProducts]);

    const handleFilterChange = (filterName, value) => {
        setFilters(prev => {
            const currentValues = prev[filterName];
            const newValues = currentValues.includes(value)
                ? currentValues.filter(item => item !== value)
                : [...currentValues, value];
            return { ...prev, [filterName]: newValues };
        });
    };
    
    if (loading) return <div className="text-center py-20">Loading...</div>;
    if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;

    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 py-16">
                    <aside className="w-full lg:w-1/4 lg:pr-8">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm sticky top-24">
                            <h2 className="text-xl font-bold mb-4 border-b pb-4 dark:text-gray-100">Filters</h2>
                            <FilterDisclosure title="Category">{filterOptions.categories.map(cat => (<div key={cat} className="flex items-center mt-2"><input id={`cat-${cat}`} onChange={() => handleFilterChange('categories', cat)} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" /><label htmlFor={`cat-${cat}`} className="ml-3 text-sm text-gray-600 dark:text-gray-300">{cat}</label></div>))}</FilterDisclosure>
                            <FilterDisclosure title="Brand">{filterOptions.brands.map(brand => (<div key={brand} className="flex items-center mt-2"><input id={`brand-${brand}`} onChange={() => handleFilterChange('brands', brand)} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" /><label htmlFor={`brand-${brand}`} className="ml-3 text-sm text-gray-600 dark:text-gray-300">{brand}</label></div>))}</FilterDisclosure>
                            <FilterDisclosure title="Condition">{filterOptions.conditions.map(cond => (<div key={cond} className="flex items-center mt-2"><input id={`cond-${cond}`} onChange={() => handleFilterChange('conditions', cond)} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" /><label htmlFor={`cond-${cond}`} className="ml-3 text-sm text-gray-600 dark:text-gray-300">{cond}</label></div>))}</FilterDisclosure>
                            <FilterDisclosure title="Price">
                                <input type="range" min="100000" max="300000" step="50" value={filters.price} onChange={(e) => setFilters(f => ({ ...f, price: Number(e.target.value) }))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-4"/>
                                <div className="text-center font-medium text-gray-700 dark:text-gray-300 mt-2">Up to <span className="font-bold text-blue-600">Ksh {filters.price}</span></div>
                            </FilterDisclosure>
                        </div>
                    </aside>
                    <main className="w-full lg:w-3/4">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
                            </div>
                        ) : (
                            <div className="text-center py-20 rounded-lg bg-white shadow-sm"><h3 className="text-xl font-semibold">No Products Found</h3><p className="text-gray-500 mt-2">Try adjusting your filters.</p></div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};
