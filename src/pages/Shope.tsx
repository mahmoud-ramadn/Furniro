import { useState, useEffect } from 'react';
import ProductsList from '../components/ui/ProductsList';
import Banner from '../components/ui/Banner';
import TopageBanner from '../components/ui/TopageBanner';
import useShopeProducts from '../hooks/useShope';
import Loading from '../components/feedback/Loading';
import { TProduct } from '../types/products';

function Shope() {
  const {
    productsToDisplay,
    currentPage,
    handleNext,
    handlePageClick,
    loading,
    error,
  } = useShopeProducts();

  // Filter states
  const [showFilter, setShowFilter] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [sortBy, setSortBy] = useState('default');
  const [filters, setFilters] = useState({
    name: '',
    priceRange: { min: '', max: '' },
  });

  // Filtered and sorted products
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>(
    productsToDisplay || [],
  );

  // Apply filters and sorting
  useEffect(() => {
    if (!productsToDisplay) return;

    let filtered = [...productsToDisplay];

    // Apply name filter
    if (filters.name) {
      filtered = filtered.filter((product) =>
        product.title?.toLowerCase().includes(filters.name.toLowerCase()),
      );
    }

    // Apply price range filter
    if (filters.priceRange.min !== '' || filters.priceRange.max !== '') {
      filtered = filtered.filter((product) => {
        const price = parseFloat(product.price) || 0;
        const min =
          filters.priceRange.min !== ''
            ? parseFloat(filters.priceRange.min)
            : 0;
        const max =
          filters.priceRange.max !== ''
            ? parseFloat(filters.priceRange.max)
            : Infinity;
        return price >= min && price <= max;
      });
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low-high':
        filtered.sort(
          (a, b) => (parseFloat(a.price) || 0) - (parseFloat(b.price) || 0),
        );
        break;
      case 'price-high-low':
        filtered.sort(
          (a, b) => (parseFloat(b.price) || 0) - (parseFloat(a.price) || 0),
        );
        break;
      case 'name-a-z':
        filtered.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
        break;
      case 'name-z-a':
        filtered.sort((a, b) => (b.title || '').localeCompare(a.title || ''));
        break;
      default:
        // Keep original order
        break;
    }

    setFilteredProducts(filtered);
  }, [productsToDisplay, filters, sortBy]);

  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handlePriceRangeChange = (type: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: {
        ...prev.priceRange,
        [type]: value,
      },
    }));
  };

  const clearFilters = () => {
    setFilters({
      name: '',
      priceRange: { min: '', max: '' },
    });
    setSortBy('default');
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <Loading loading={loading} error={error as undefined} type="Shope">
      <TopageBanner />

      {/* Filter and Controls Bar */}
      <div className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-center">
        <div className="container mx-auto h-auto md:h-[100px] flex flex-col md:flex-row items-center justify-between py-4 md:py-0 px-4 gap-4 md:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
            <div className="flex items-center gap-x-3">
              <img
                src="/filter/system-uicons_filtering.webp"
                className="w-[25px] h-[25px] cursor-pointer hover:opacity-70"
                alt="Filter icon"
                onClick={toggleFilter}
              />
              <h3
                className="text-xl font-semibold cursor-pointer hover:opacity-70 text-white"
                onClick={toggleFilter}
              >
                Filter
              </h3>
            </div>

            <div className="w-full sm:w-auto h-[37px] border-l-0 sm:border-l-2 border-l-white/30 flex justify-center items-center pt-2 sm:pt-0">
              <span className="text-white font-medium text-sm sm:text-base">
                Showing 1–{Math.min(itemsPerPage, filteredProducts.length)} of{' '}
                {filteredProducts.length} results
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
            <div className="w-full sm:w-fit h-[55px] flex items-center gap-x-4">
              <span className="font-medium text-lg text-white whitespace-nowrap">
                Show
              </span>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="w-full sm:w-[55px] h-full bg-white text-lg font-medium text-text-links flex items-center justify-center border-none outline-none rounded-md px-2"
              >
                <option value={8}>8</option>
                <option value={16}>16</option>
                <option value={24}>24</option>
                <option value={32}>32</option>
              </select>
            </div>

            <div className="w-full sm:w-[288px] h-[55px] flex items-center gap-x-4">
              <span className="font-medium text-lg text-white whitespace-nowrap">
                Sort by
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-[188px] h-full bg-white text-lg font-medium text-text-links px-3 border-none outline-none rounded-md"
              >
                <option value="default">Default</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="name-a-z">Name: A to Z</option>
                <option value="name-z-a">Name: Z to A</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilter && (
        <div className="w-full bg-white border-b border-gray-200 py-8 shadow-md">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Name Filter */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <label className="block text-lg font-semibold text-gray-800 mb-4">
                  Search by Name
                </label>
                <input
                  type="text"
                  value={filters.name}
                  onChange={(e) => handleFilterChange('name', e.target.value)}
                  placeholder="Enter product name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                />
              </div>

              {/* Price Range Filter */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <label className="block text-lg font-semibold text-gray-800 mb-4">
                  Price Range
                </label>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-600 mb-1">
                      Min
                    </label>
                    <input
                      type="number"
                      value={filters.priceRange.min}
                      onChange={(e) =>
                        handlePriceRangeChange('min', e.target.value)
                      }
                      placeholder="0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm text-gray-600 mb-1">
                      Max
                    </label>
                    <input
                      type="number"
                      value={filters.priceRange.max}
                      onChange={(e) =>
                        handlePriceRangeChange('max', e.target.value)
                      }
                      placeholder="1000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Filter Actions */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={clearFilters}
                    className="flex-1 px-6 py-3 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 font-medium transition-colors duration-300"
                  >
                    Clear Filters
                  </button>
                  <button
                    onClick={() => {
                      setShowFilter(false);
                    }}
                    className="flex-1 px-6 py-3 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 font-medium transition-colors duration-300"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Products Section */}
      <section className="container px-4 mx-auto my-12">
        <ProductsList cardData={filteredProducts.slice(0, itemsPerPage)} />

        {/* Pagination - only show if we have more items than itemsPerPage */}
        {filteredProducts.length > itemsPerPage && (
          <div className="flex justify-center gap-3 my-16 items-center">
            {Array.from(
              { length: Math.ceil(filteredProducts.length / itemsPerPage) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageClick(index + 1)}
                  aria-current={currentPage === index + 1 ? 'page' : undefined}
                  className={`w-12 h-12 flex items-center justify-center rounded-full cursor-pointer font-medium text-lg transition-all duration-300 ${
                    currentPage === index + 1
                      ? 'bg-secondary-500 text-white shadow-lg'
                      : 'bg-primary-100 text-primary-800 hover:bg-primary-200'
                  }`}
                >
                  {index + 1}
                </button>
              ),
            )}

            <button
              onClick={handleNext}
              disabled={
                currentPage ===
                Math.ceil(filteredProducts.length / itemsPerPage)
              }
              className={`w-28 h-12 rounded-full font-medium transition-all duration-300 ${
                currentPage ===
                Math.ceil(filteredProducts.length / itemsPerPage)
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-primary-500 text-white hover:bg-primary-600'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </section>

      <Banner />
    </Loading>
  );
}

export default Shope;
