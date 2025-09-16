import './style.css';
function SingleProductSkeleton() {
  const ImageGallerySkeleton = () => (
    <div className="flex md:flex-col flex-row gap-4 md:gap-8 justify-between md:h-[416px] w-full md:w-auto">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="md:w-20 w-16 md:h-20 h-16 rounded-lg overflow-hidden skeleton"
        />
      ))}
    </div>
  );

  // Skeleton for the main product image
  const MainImageSkeleton = () => (
    <div className="w-full md:w-[423px] h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-md skeleton" />
  );

  // Skeleton for the product title
  const TitleSkeleton = () => (
    <div className="h-8 sm:h-10 md:h-12 w-3/4 rounded-md skeleton mb-3 md:mb-4" />
  );

  // Skeleton for the product price
  const PriceSkeleton = () => (
    <div className="h-6 sm:h-7 md:h-8 w-1/3 sm:w-1/4 rounded-md skeleton mb-4 md:mb-6" />
  );

  // Skeleton for the product rating
  const RatingSkeleton = () => (
    <div className="h-5 sm:h-6 md:h-6 w-1/2 rounded-md skeleton mb-4 md:mb-6" />
  );

  // Skeleton for the product description
  const DescriptionSkeleton = () => (
    <div className="h-16 sm:h-20 md:h-20 w-full rounded-md skeleton mb-6 md:mb-8" />
  );

  // Skeleton for the size selector
  const SizeSkeleton = () => (
    <div className="h-14 sm:h-16 flex flex-col justify-between mb-5 md:mb-6">
      <div className="h-5 sm:h-6 w-1/4 rounded-md skeleton mb-2" />
      <div className="flex gap-3 sm:gap-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="w-8 h-8 rounded-md skeleton" />
        ))}
      </div>
    </div>
  );

  // Skeleton for the color selector
  const ColorSkeleton = () => (
    <div className="h-14 sm:h-16 flex flex-col justify-between mb-6 md:mb-8">
      <div className="h-5 sm:h-6 w-1/4 rounded-md skeleton mb-2" />
      <div className="flex gap-3 sm:gap-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="w-8 h-8 rounded-full skeleton" />
        ))}
      </div>
    </div>
  );

  // Skeleton for the action buttons
  const ActionButtonsSkeleton = () => (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 md:mb-8">
      <div className="w-full sm:w-32 h-10 sm:h-12 rounded-2xl skeleton" />
      <div className="w-full sm:w-32 h-10 sm:h-12 rounded-2xl skeleton" />
    </div>
  );

  const ProductDetailsSkeleton = () => (
    <div className="space-y-3 sm:space-y-4">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="h-5 sm:h-6 w-full rounded-md skeleton" />
      ))}
    </div>
  );

  return (
    <div className="container mt-6 sm:mt-9 mb-8 sm:mb-14 px-4 md:px-0">
      <div className="flex flex-wrap justify-center items-start gap-6 sm:gap-8 md:gap-20">
        <div className="flex md:items-start flex-wrap md:flex-nowrap flex-col md:flex-row gap-6 sm:gap-8 w-full md:w-auto">
          <ImageGallerySkeleton />
          <MainImageSkeleton />
        </div>
        <div className="w-full md:w-[606px] rounded-md px-2 sm:px-4">
          <TitleSkeleton />
          <PriceSkeleton />
          <RatingSkeleton />
          <DescriptionSkeleton />
          <SizeSkeleton />
          <ColorSkeleton />
          <ActionButtonsSkeleton />
          <hr className="w-full h-[1px] bg-gray-200 my-6 md:my-8" />
          <ProductDetailsSkeleton />
        </div>
      </div>
    </div>
  );
}

export default SingleProductSkeleton;
