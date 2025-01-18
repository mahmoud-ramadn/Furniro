const HomeSkeleton = () => (
    <div  className=" mb-8">
        <div className="w-full     animate-pulse relative lg:h-[716px] h-full flex justify-end items-center mr-14 mb-14 md:pr-[2%]">
            <div className="w-full md:w-[643px] lg:w-1/2 h-[443px] space-y-7  bg-secondary-500/80  md:rounded-xl p-9 pt-16 pb-9 shadow-lg animate-pulse">
                <div className="h-3 w-1/6   bg-primary-500/20 animate-pulse rounded-lg"></div>
                <div className="h-3 w-full  bg-primary-500/20 animate-pulse rounded-lg"></div>
                <div className="h-3 w-2/4  bg-primary-500/20 animate-pulse rounded-lg"></div>
                <div className="w-[222px] h-16 bg-primary-500/20 animate-pulse"></div>
            </div>
        </div>


        <div className="container  px-4 mx-auto">
            <div className="  w-1/5 mx-auto  rounded-md h-3  bg-secondary-500/80 animate-pulse mb-3 ">
            </div>
            <div className=" w-1/4 mx-auto  rounded-md h-3   bg-secondary-500/80 animate-pulse  mb-14">

            </div>
            <div className="  grid md:grid-cols-4 lg:grid-cols-3 mb-14 gap-5 grid-cols-1  ">

                {Array(3)
                    .fill(null)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="sm:col-span-2 lg:col-span-1 col-span-1 rounded-md md:h-[520px] flex space-y-7 flex-col justify-between animate-pulse"
                        >
                            <div className="w-full bg-secondary-500/80  rounded-md  md:h-[480px] h-64"></div>
                            <div className="bg-gray-300 h-3 w-1/6 mx-auto bg-secondary-500/80  rounded">
                            </div>
                        </div>
                    ))}
            </div>
        </div>

       
        <section className="container mx-auto px-4 my-8">
            <div className="  w-1/5 mx-auto  rounded-md  h-3 bg-secondary-500/80 animate-pulse  my-7 ">
            </div>

            <div className="  grid md:grid-cols-2 lg:grid-cols-4 mb-14 gap-5 grid-cols-1  ">

                {Array(8)
                    .fill(null)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="  bg-secondary-500/80 col-span-1 md:col-span-1 lg:h-[500px] md:h-fit h-full  rounded-md flex space-y-7 flex-col justify-between animate-pulse"
                        >
                            <div className="w-full  md:h-[480px] h-64"></div>
                            <div className="bg-gray-300 h-6 w-1/2 rounded"></div>
                        </div>
                    ))}
            </div>



            <div className="flex justify-center my-8">
                <div className="w-[245px] h-16 bg-secondary-500/80 animate-pulse"></div>
            </div>
        </section>


    </div>
);

export default HomeSkeleton;
