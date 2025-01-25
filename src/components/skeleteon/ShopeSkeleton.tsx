

const HeroSkeleton = () => (
  <div className="w-full h-[416px] bg-[#F3F4F6] animate-pulse flex items-center justify-center relative overflow-hidden" />
);

const SectionTitleSkeleton = () => (
  <div className="w-1/5 mx-auto rounded-md h-3 bg-[#F3F4F6] animate-pulse my-7" />
);

const CardSkeleton = () => (
  <div className="bg-[#F3F4F6] col-span-1 md:col-span-1 lg:h-[500px] md:h-fit h-full rounded-md flex space-y-7 flex-col justify-between animate-pulse">
    <div className="w-full md:h-[480px] h-64" />
    <div className="bg-[#E5E7EB] h-6 w-1/2 rounded" />
  </div>
);

const ButtonSkeleton = () => (
  <div className="w-[245px] h-16 bg-[#F3F4F6] animate-pulse" />
);





const ShopeSkeleton = () => {
  return (
    <div className="mb-8">
      {/* Hero Section Skeleton */}
      <HeroSkeleton />

      <section className="container mx-auto px-4 my-8">
        {/* Section Title Skeleton */}
        <SectionTitleSkeleton />

        {/* Grid Skeleton for Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mb-14 gap-5 grid-cols-1">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <CardSkeleton key={index} />
            ))}
        </div>

        {/* Button Skeleton */}
        <div className="flex justify-center my-8">
          <ButtonSkeleton />
        </div>
      </section>
    </div>
  );
};

export default ShopeSkeleton;