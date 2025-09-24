import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/shop/ProductCard.jsx';
import { 
  ChevronDownIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowRightIcon,
  SparklesIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';

const FilterDisclosure = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="border-b border-slate-200 dark:border-slate-700 py-6">
      <h3 className="-my-3 flow-root">
        <button 
          type="button" 
          onClick={() => setIsOpen(!isOpen)} 
          className="flex w-full items-center justify-between bg-white dark:bg-slate-800 py-3 text-sm text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors duration-300"
        >
          <span className="font-semibold text-slate-900 dark:text-white">{title}</span>
          <span className="ml-6 flex items-center">
            <ChevronDownIcon className={`h-5 w-5 transform transition-transform duration-200 ${isOpen ? '-rotate-180' : 'rotate-0'}`} />
          </span>
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
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
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
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/products`);
        if (!response.ok) throw new Error('Network error. Is the server running?');
        const data = await response.json();
        setAllProducts(data);
        setIsVisible(true);
      } catch (err) { 
        setError(err.message); 
      } finally { 
        setLoading(false); 
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = allProducts
      .filter(p => filters.categories.length === 0 || filters.categories.includes(p.category))
      .filter(p => filters.brands.length === 0 || filters.brands.includes(p.brand))
      .filter(p => filters.conditions.length === 0 || filters.conditions.includes(p.condition))
      .filter(p => p.price <= filters.price);

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [filters, allProducts, searchTerm]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => {
      const currentValues = prev[filterName];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value];
      return { ...prev, [filterName]: newValues };
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading premium devices...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Connection Error</h2>
          <p className="text-red-500 dark:text-red-400 mb-4">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30 mb-6">
              <SparklesIcon className="w-4 h-4" />
              <span>Premium Tech Devices & Accessories</span>
            </div>
            <h1 className="font-bold text-4xl lg:text-6xl mb-6 leading-tight">
              Kenya's Premier
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Tech Store
              </span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Discover our curated selection of smartphones, tablets, and accessories with local warranty and support across Kenya.
            </p>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-50">
          <img src="/src/assets/shop-bg.jpg" alt="Shop Background" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Search and Quick Actions */}
      <section className="py-8 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search devices, brands, categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-4 pr-12 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 shadow-sm"
              />
              <MagnifyingGlassIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>

            <div className="flex items-center space-x-4">
              {/* Results Count */}
              <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {filteredProducts.length} products found
              </span>

              {/* Mobile Filter Toggle */}
              <button 
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="lg:hidden flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-300"
              >
                <AdjustmentsHorizontalIcon className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div id="products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className={`w-full lg:w-1/4 lg:pr-8 ${mobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 sticky top-32">
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                    <FunnelIcon className="w-5 h-5 text-blue-600" />
                    <span>Filters</span>
                  </h2>
                  <button 
                    onClick={() => setFilters({ categories: [], brands: [], conditions: [], price: 300000 })}
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                  >
                    Clear All
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-0">
                <FilterDisclosure title="Category">
                  <div className="space-y-3">
                    {filterOptions.categories.map(cat => (
                      <div key={cat} className="flex items-center">
                        <input 
                          id={`cat-${cat}`} 
                          onChange={() => handleFilterChange('categories', cat)} 
                          type="checkbox" 
                          className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-700"
                          checked={filters.categories.includes(cat)}
                        />
                        <label htmlFor={`cat-${cat}`} className="ml-3 text-sm text-slate-700 dark:text-slate-300 capitalize">
                          {cat}
                        </label>
                      </div>
                    ))}
                  </div>
                </FilterDisclosure>

                <FilterDisclosure title="Brand">
                  <div className="space-y-3">
                    {filterOptions.brands.map(brand => (
                      <div key={brand} className="flex items-center">
                        <input 
                          id={`brand-${brand}`} 
                          onChange={() => handleFilterChange('brands', brand)} 
                          type="checkbox" 
                          className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-700"
                          checked={filters.brands.includes(brand)}
                        />
                        <label htmlFor={`brand-${brand}`} className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </FilterDisclosure>

                <FilterDisclosure title="Condition">
                  <div className="space-y-3">
                    {filterOptions.conditions.map(cond => (
                      <div key={cond} className="flex items-center">
                        <input 
                          id={`cond-${cond}`} 
                          onChange={() => handleFilterChange('conditions', cond)} 
                          type="checkbox" 
                          className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-700"
                          checked={filters.conditions.includes(cond)}
                        />
                        <label htmlFor={`cond-${cond}`} className="ml-3 text-sm text-slate-700 dark:text-slate-300 capitalize">
                          {cond}
                        </label>
                      </div>
                    ))}
                  </div>
                </FilterDisclosure>

                <FilterDisclosure title="Price Range">
                  <div className="space-y-4">
                    <input 
                      type="range" 
                      min="10000" 
                      max="300000" 
                      step="5000" 
                      value={filters.price} 
                      onChange={(e) => setFilters(f => ({ ...f, price: Number(e.target.value) }))} 
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>KSh 10K</span>
                      <span>KSh 300K</span>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        Up to KSh {filters.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </FilterDisclosure>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="w-full lg:w-3/4">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <div 
                    key={product.id}
                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 shadow-lg border border-slate-100 dark:border-slate-700 max-w-md mx-auto">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No Products Found</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setFilters({ categories: [], brands: [], conditions: [], price: 300000 });
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl lg:text-5xl mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-300 leading-relaxed">
            Contact us for custom orders, bulk purchases, or specific device requirements. 
            We offer competitive pricing and personalized service for Kenyan businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Contact Sales Team</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
