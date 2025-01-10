import { useState, } from 'react';
import ProductsList from '../components/ui/ProductsList';
import Banner from '../components/ui/Banner';
import useFetchProduct from '../hooks/GetProducts';
import TopageBanner from '../components/ui/TopageBanner';

function Shope() {
  const { loading, data, error } = useFetchProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const totalPages = Math.ceil((data?.products.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const productsToDisplay = data?.products.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
  if (loading) {
    return (
      <div className="font-bold text-5xl w-full min-h-screen flex items-center justify-center bg-primary-200 rounded-md">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-3xl font-bold text-danger-500 text-center">
        Something went wrong.
      </div>
    );
  }

  return (
    <div>
      <TopageBanner />
      <div className="w-full h-[100px] bg-primary-500"></div>
      <section className="container mx-auto my-8">
        <ProductsList cardData={productsToDisplay || []} />

        {/* Pagination */}
        <div className="flex justify-center gap-4 my-20 items-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              aria-current={currentPage === index + 1 ? 'page' : undefined}
              className={`w-16 h-16 flex items-center justify-center rounded-lg cursor-pointer font-normal text-xl ${currentPage === index + 1
                  ? 'bg-secondary-500 text-white'
                  : 'bg-primary-500 text-black'
                }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`w-24 h-16 rounded-lg ${currentPage === totalPages
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-primary-500 text-black'
              }`}
          >
            Next
          </button>
        </div>
        
      </section>
      <Banner />
    </div>
  );
}

export default Shope;
