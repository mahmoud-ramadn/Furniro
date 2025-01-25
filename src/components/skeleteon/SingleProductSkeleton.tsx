import './style.css'
function SingleProductSkeleton() {
  const ImageGallerySkeleton = () => (
    <div className="flex md:flex-col flex-row gap-8 justify-between md:h-[416px]">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="md:w-20 w-1/4 md:h-20 h-full rounded-lg overflow-hidden skeleton"
        />
      ))}
      <div className="md:w-20 w-1/4 md:h-20 h-full rounded-lg overflow-hidden skeleton" />
    </div>
  );

  // Skeleton for the main product image
  const MainImageSkeleton = () => (
    <div className="md:w-[423px] w-full h-[500px] overflow-hidden rounded-md skeleton" />
  );

  // Skeleton for the product title
  const TitleSkeleton = () => (
    <div className="h-12 w-3/4 rounded-md skeleton mb-4" />
  );

  // Skeleton for the product price
  const PriceSkeleton = () => (
    <div className="h-8 w-1/4 rounded-md skeleton mb-6" />
  );

  // Skeleton for the product rating
  const RatingSkeleton = () => (
    <div className="h-6 w-1/2 rounded-md skeleton mb-6" />
  );

  // Skeleton for the product description
  const DescriptionSkeleton = () => (
    <div className="h-20 w-full rounded-md skeleton mb-8" />
  );

  // Skeleton for the size selector
  const SizeSkeleton = () => (
    <div className="h-16 flex flex-col justify-between mb-6">
      <div className="h-6 w-1/4 rounded-md skeleton" />
      <div className="flex gap-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="w-8 h-8 rounded-md skeleton" />
        ))}
      </div>
    </div>
  );

  // Skeleton for the color selector
  const ColorSkeleton = () => (
    <div className="h-16 flex flex-col justify-between mb-8">
      <div className="h-6 w-1/4 rounded-md skeleton" />
      <div className="flex gap-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="w-8 h-8 rounded-full skeleton" />
        ))}
      </div>
    </div>
  );

  // Skeleton for the action buttons
  const ActionButtonsSkeleton = () => (
    <div className="flex gap-4 mb-8">
      <div className="w-32 h-12 rounded-2xl skeleton" />
      <div className="w-32 h-12 rounded-2xl skeleton" />
    </div>
  );

  // Skeleton for the product details
  const ProductDetailsSkeleton = () => (
    <div className="space-y-4">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="h-6 w-full rounded-md skeleton" />
      ))}
    </div>
  );

  // Full Product Page Skeleton

 


  return (
    <div className="container mt-9 mb-14 flex flex-wrap justify-center items-start gap-20">
      <div className="flex md:items-start flex-wrap md:flex-row flex-col gap-8">
        <ImageGallerySkeleton />
        <MainImageSkeleton />
      </div>
      <div className="md:w-[606px] md:h-[730px] rounded-md px-4">
        <TitleSkeleton />
        <PriceSkeleton />
        <RatingSkeleton />
        <DescriptionSkeleton />
        <SizeSkeleton />
        <ColorSkeleton />
        <ActionButtonsSkeleton />
        <hr className="w-full h-[1px] bg-gray-200 my-8" />
        <ProductDetailsSkeleton />
      </div>
    </div>
    // <section className="container mx-auto px-4 my-8">
    //   {/* Header Skeleton */}
    //   <div className="w-full h-[130px] flex items-center px-10 md:px-[100px] bg-[#F3F4F6] animate-pulse">





    //   </div>

    
    //   <div className="w-1/5 mx-auto h-3 bg-[#F3F4F6] rounded-md animate-pulse my-7"></div>

    //   {/* Main Product Image Skeleton */}
    //   <div className="bg-[#F3F4F6] animate-pulse md:w-[606px] md:h-[730px] w-full h-[400px] rounded-md mx-auto my-8"></div>

    //   {/* Grid Skeleton */}
    //   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
    //     {Array.from({ length: 4 }).map((_, index) => (
    //       <div
    //         key={index}
    //         className="bg-[#F3F4F6] rounded-md flex flex-col justify-between animate-pulse h-full md:h-[500px] p-4"
    //       >
    //         <div className="w-full h-[70%] bg-[#E5E7EB] rounded-md"></div>
    //         <div className="bg-[#E5E7EB] h-6 w-1/2 mt-4 rounded"></div>
    //       </div>
    //     ))}
    //   </div>

    //   {/* Button Skeleton */}
    //   <div className="flex justify-center my-8">
    //     <div className="w-[245px] h-16 bg-[#F3F4F6] rounded-md animate-pulse"></div>
    //   </div>
    // </section>
  );
}

export default SingleProductSkeleton;




