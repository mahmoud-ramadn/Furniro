function SingleProductSkeleton() {
  return (
    <section className="container mx-auto px-4 my-8">
      {/* Header Skeleton */}
      <div className="w-full h-[130px] flex items-center px-10 md:px-[100px] bg-[#F3F4F6] animate-pulse"></div>

      {/* Title Skeleton */}
      <div className="w-1/5 mx-auto h-3 bg-[#F3F4F6] rounded-md animate-pulse my-7"></div>

      {/* Main Product Image Skeleton */}
      <div className="bg-[#F3F4F6] animate-pulse md:w-[606px] md:h-[730px] w-full h-[400px] rounded-md mx-auto my-8"></div>

      {/* Grid Skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-[#F3F4F6] rounded-md flex flex-col justify-between animate-pulse h-full md:h-[500px] p-4"
          >
            <div className="w-full h-[70%] bg-[#E5E7EB] rounded-md"></div>
            <div className="bg-[#E5E7EB] h-6 w-1/2 mt-4 rounded"></div>
          </div>
        ))}
      </div>

      {/* Button Skeleton */}
      <div className="flex justify-center my-8">
        <div className="w-[245px] h-16 bg-[#F3F4F6] rounded-md animate-pulse"></div>
      </div>
    </section>
  );
}

export default SingleProductSkeleton;