function SingleProductSkeleton() {
  return (
    <section className="container mx-auto px-4 my-8">
      <div className=" w-full h-[130px]  flex items-center   px-10   md:px-[100px]  bg-secondary-500/80  animate-pulse">

      </div>
      {/* Title Skeleton */}
      <div className="w-1/5 mx-auto h-3 bg-secondary-500/80 rounded-md animate-pulse my-7"></div>

      {/* Main Product Image Skeleton */} 
      <div className="bg-secondary-500/80 animate-pulse md:w-[606px] md:h-[730px] w-full h-[400px] rounded-md mx-auto my-8"></div>

      {/* Grid Skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-secondary-500/80 rounded-md flex flex-col justify-between animate-pulse h-full md:h-[500px] p-4"
          >
            <div className="w-full h-[70%] bg-secondary-500 rounded-md"></div>
            <div className="bg-gray-300 h-6 w-1/2 mt-4 rounded"></div>
          </div>
        ))}
      </div>

      {/* Button Skeleton */}
      <div className="flex justify-center my-8">
        <div className="w-[245px] h-16 bg-secondary-500/80 rounded-md animate-pulse"></div>
      </div>
    </section>
  );
}

export default SingleProductSkeleton;
