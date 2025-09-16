import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  lazy,
  Suspense,
  useRef,
  FC,
} from 'react';
import useFetchProduct from '../../hooks/GetProducts';
import { TProduct } from '../../types/products';
import Btn from './Btn';

interface OurProductsProps {
  visibleNumber: number;
  Title: string;
  className?: string;
  showViewAll?: boolean;
  maxVisibleProducts?: number;
  enableInfiniteScroll?: boolean;
}

interface ViewState {
  currentVisible: number;
  isExpanded: boolean;
  isLoading: boolean;
}

const ProductsList = lazy(() => import('../ui/ProductsList'));

// Loading skeleton component
const ProductsSkeleton: FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {Array.from({ length: 8 }).map((_, index) => (
      <div
        key={index}
        className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
      >
        <div className="aspect-square bg-gray-200 animate-pulse"></div>
        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded w-1/2 animate-pulse"></div>
        </div>
      </div>
    ))}
  </div>
);

// Error component
const ErrorState: FC<{ onRetry?: () => void }> = ({ onRetry }) => (
  <div className="text-center py-16">
    <div className="max-w-md mx-auto">
      <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
        <svg
          className="w-12 h-12 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Something went wrong
      </h3>
      <p className="text-gray-600 mb-6">
        We couldn't load the products. Please try again.
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          Try Again
        </button>
      )}
    </div>
  </div>
);

const OurProducts: FC<OurProductsProps> = ({
  visibleNumber,
  Title,
  className = '',
  showViewAll = true,
  maxVisibleProducts = 30,
  enableInfiniteScroll = false,
}) => {
  const { loading, data, error, refetch } = useFetchProduct();
  const sectionRef = useRef<HTMLElement>(null);
  const [viewState, setViewState] = useState<ViewState>({
    currentVisible: visibleNumber,
    isExpanded: false,
    isLoading: false,
  });

  // Memoized products data
  const allProducts: TProduct[] = useMemo(() => {
    return data?.products || [];
  }, [data]);

  const productsToDisplay: TProduct[] = useMemo(() => {
    return allProducts.slice(0, viewState.currentVisible);
  }, [allProducts, viewState.currentVisible]);

  // Statistics
  const productStats = useMemo(
    () => ({
      total: allProducts.length,
      showing: productsToDisplay.length,
      remaining: Math.max(0, allProducts.length - viewState.currentVisible),
      canShowMore: allProducts.length > viewState.currentVisible,
      canShowLess: viewState.currentVisible > visibleNumber,
    }),
    [
      allProducts.length,
      productsToDisplay.length,
      viewState.currentVisible,
      visibleNumber,
    ],
  );

  // Reset state when visibleNumber changes
  useEffect(() => {
    setViewState({
      currentVisible: visibleNumber,
      isExpanded: false,
      isLoading: false,
    });
  }, [visibleNumber]);

  // Smooth scroll to section
  const scrollToSection = useCallback((offset: number = -100) => {
    if (sectionRef.current) {
      const elementPosition = sectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  // Handle show more/less toggle
  const handleToggle = useCallback(async () => {
    if (viewState.isLoading) return;

    setViewState((prev) => ({ ...prev, isLoading: true }));

    // Simulate loading for better UX
    await new Promise((resolve) => setTimeout(resolve, 300));

    setViewState((prev) => {
      const newState = { ...prev, isLoading: false };

      if (!prev.isExpanded) {
        // Show More
        newState.currentVisible = Math.min(
          maxVisibleProducts,
          allProducts.length,
        );
        newState.isExpanded = true;
      } else {
        // Show Less
        newState.currentVisible = visibleNumber;
        newState.isExpanded = false;
        // Scroll back to section when showing less
        setTimeout(() => scrollToSection(), 100);
      }

      return newState;
    });
  }, [
    viewState.isLoading,
    maxVisibleProducts,
    allProducts.length,
    visibleNumber,
    scrollToSection,
  ]);

  // Handle retry on error
  const handleRetry = useCallback(() => {
    if (refetch) {
      refetch();
    }
  }, [refetch]);

  // Infinite scroll implementation (if enabled)
  useEffect(() => {
    if (
      !enableInfiniteScroll ||
      viewState.isExpanded ||
      !productStats.canShowMore
    )
      return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.offsetHeight;

      if (scrollTop + windowHeight >= docHeight - 1000) {
        handleToggle();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [
    enableInfiniteScroll,
    viewState.isExpanded,
    productStats.canShowMore,
    handleToggle,
  ]);

  if (loading && !data) {
    return (
      <section className={`py-16 ${className}`} ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {Title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto rounded-full"></div>
          </div>
          <ProductsSkeleton />
        </div>
      </section>
    );
  }

  if (error && !data) {
    return (
      <section className={`py-16 ${className}`} ref={sectionRef}>
        <div className="container mx-auto px-4">
          <ErrorState onRetry={handleRetry} />
        </div>
      </section>
    );
  }

  if (!allProducts.length) {
    return (
      <section className={`py-16 ${className}`} ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">Check back later for new arrivals.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 ${className}`} ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {Title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-600 mx-auto rounded-full mb-4"></div>

          {/* Product Counter */}
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <span className="text-lg">
              Showing{' '}
              <span className="font-semibold text-secondary-600">
                {productStats.showing}
              </span>{' '}
              of <span className="font-semibold">{productStats.total}</span>{' '}
              products
            </span>
            {productStats.remaining > 0 && (
              <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm font-medium">
                +{productStats.remaining} more
              </span>
            )}
          </div>
        </div>

        {/* Products List */}
        <div className="relative">
          <Suspense fallback={<ProductsSkeleton />}>
            <ProductsList cardData={productsToDisplay} />
          </Suspense>

          {/* Loading Overlay */}
          {viewState.isLoading && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-xl">
              <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-lg shadow-lg">
                <div className="animate-spin w-6 h-6 border-2 border-secondary-500 border-t-transparent rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  Loading more products...
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {showViewAll &&
          (productStats.canShowMore || productStats.canShowLess) && (
            <div className="flex flex-col items-center gap-4 mt-12">
              {/* Progress Bar */}
              <div className="w-full max-w-md">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Products shown</span>
                  <span>
                    {productStats.showing}/{productStats.total}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-secondary-500 to-secondary-600 h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min(100, (productStats.showing / productStats.total) * 100)}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Toggle Button */}
              <Btn
                onClick={handleToggle}
                disabled={viewState.isLoading}
                className={`
                relative overflow-hidden bg-white border-2 border-secondary-500 text-secondary-600 
                hover:bg-secondary-500 hover:text-white px-8 py-4 rounded-xl font-semibold 
                transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                min-w-[200px] flex items-center justify-center gap-2
              `}
              >
                {viewState.isLoading ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full"></div>
                    <span>Loading...</span>
                  </>
                ) : viewState.isExpanded ? (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                    <span>Show Less</span>
                  </>
                ) : (
                  <>
                    <span>Show More ({productStats.remaining})</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                )}
              </Btn>

              {/* View All Link */}
              {!viewState.isExpanded && (
                <button
                  onClick={() =>
                    setViewState((prev) => ({
                      ...prev,
                      currentVisible: allProducts.length,
                      isExpanded: true,
                    }))
                  }
                  className="text-gray-600 hover:text-secondary-600 font-medium transition-colors duration-200 flex items-center gap-1 group"
                >
                  <span>View All Products</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}
      </div>
    </section>
  );
};

export default OurProducts;
