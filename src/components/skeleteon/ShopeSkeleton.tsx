function ShopeSkeleton() {
  return (
    <div className=" mb-8">
      <div className="w-full  h-[416px]  bg-secondary-500/80   animate-pulse  flex items-center justify-center    relative overflow-hidden "></div>

      <section className="container mx-auto px-4 my-8">
        <div className="  w-1/5 mx-auto  rounded-md  h-3 bg-secondary-500/80 animate-pulse  my-7 "></div>

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
}

export default ShopeSkeleton;
