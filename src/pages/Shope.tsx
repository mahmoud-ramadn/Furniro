import ProductsList from '../components/ui/ProductsList';
import Banner from '../components/ui/Banner';
import TopageBanner from '../components/ui/TopageBanner';
import useShopeProducts from '../hooks/useShope';
import Loading from '../components/feedback/Loading';
function Shope() {
  const {productsToDisplay,totalPages,currentPage,
    handleNext,handlePageClick,loading,error
  }=useShopeProducts();
  
  return (
    
      <Loading loading={loading} error={error as undefined} type='Shope'>
      <TopageBanner />

      <div className="w-full bg-primary-500  text-center ">
        <div className=" md:container mx-auto h-[100px]    flex items-center md:justify-between flex-col md:flex-row justify-center">
          <div className="flex items-center gap-x-6 w-full md:w-auto">

            <div className="flex items-center gap-x-3">
              <img
                src="/filter/system-uicons_filtering.webp"
                className="w-[25px] h-[25px]"
                alt="Filter icon"
              />
              <h3 className="text-xl font-normal">Filter</h3>
            </div>

            <div className="flex gap-x-6">
              <img
                src="/filter/ci_grid-big-round.webp"
                className="w-[25px] h-[25px] object-cover"
                alt="Grid view icon"
              />
              <img
                src="/filter/bi_view-list.webp"
                className="w-[25px] h-[25px] object-cover"
                alt="List view icon"
              />
            </div>

            <div className="md:w-[237px] h-[37px] border-l-2 border-l-text-links flex justify-center items-center">
              Showing 1–16 of 32 results
            </div>
          </div>

          <div className="flex items-center gap-x-6 mt-4 md:mt-0">

            <div className="w-fit h-[55px] flex items-center gap-x-4">
              <span className="font-normal text-xl">Show</span>
              <div className="w-[55px] h-full bg-white text-xl font-normal text-text-links flex items-center justify-center">
                16
              </div>
            </div>

            <div className="md:w-[288px] h-[55px] flex items-center gap-x-4">
              <span className="font-normal text-xl">Sort by</span>
              <div className="md:w-[188px] h-full bg-white text-xl font-normal text-text-links flex items-center justify-center">
                Default
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container px-4 mx-auto my-8 ">
        <ProductsList   cardData={productsToDisplay || []} />
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
      </Loading>
    
  );
}

export default Shope;
