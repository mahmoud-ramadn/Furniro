const HomeSkeleton = () => (
    <div className="mb-8">
        {/* Hero Section Skeleton */}
        <div className="w-full animate-pulse relative lg:h-[716px] h-full flex justify-end items-center mr-14 mb-14 md:pr-[2%]">
            <div className="w-full md:w-[643px] lg:w-1/2 h-[443px] space-y-7 bg-secondary-500/80 md:rounded-xl p-9 pt-16 pb-9 shadow-lg animate-pulse">
                <div className="h-3 w-1/6 bg-primary-500/20 rounded-lg"></div>
                <div className="h-3 w-full bg-primary-500/20 rounded-lg"></div>
                <div className="h-3 w-2/4 bg-primary-500/20 rounded-lg"></div>
                <div className="w-[222px] h-16 bg-primary-500/20 rounded-lg"></div>
            </div>
        </div>

        {/* Section Title Skeleton */}
        <div className="container px-4 mx-auto">
            <div className="w-1/5 mx-auto h-3 bg-secondary-500/80 rounded-md animate-pulse mb-3"></div>
            <div className="w-1/4 mx-auto h-3 bg-secondary-500/80 rounded-md animate-pulse mb-14"></div>

            {/* Grid Skeleton for Cards */}
            <div className="grid md:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-5 mb-14">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div
                        key={index}
                        className="sm:col-span-2 lg:col-span-1 col-span-1 rounded-md md:h-[520px] flex flex-col space-y-7 justify-between animate-pulse"
                    >
                        <div className="w-full bg-secondary-500/80 rounded-md md:h-[480px] h-64"></div>
                        <div className="h-3 w-1/6 mx-auto bg-secondary-500/80 rounded-md"></div>
                    </div>
                ))}
            </div>
        </div>

        {/* Secondary Section */}
        <section className="container mx-auto px-4 my-8">
            <div className="w-1/5 mx-auto h-3 bg-secondary-500/80 rounded-md animate-pulse my-7"></div>

            {/* Grid Skeleton for More Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5 mb-14">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-secondary-500/80 col-span-1 md:col-span-1 lg:h-[500px] md:h-fit h-full rounded-md flex flex-col space-y-7 justify-between animate-pulse"
                    >
                        <div className="w-full md:h-[480px] h-64 bg-secondary-500/80 rounded-md"></div>
                        <div className="h-6 w-1/2 bg-gray-300 rounded-md mx-auto"></div>
                    </div>
                ))}
            </div>

            {/* Button Skeleton */}
            <div className="flex justify-center my-8">
                <div className="w-[245px] h-16 bg-secondary-500/80 rounded-md animate-pulse"></div>
            </div>
        </section>
    </div>
);

export default HomeSkeleton;
