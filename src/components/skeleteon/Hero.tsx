function Hero() {
  return (
    <>
      <section className=" Herobackground   w-full md:h-[716px]   bg-gray-400 rounded-md animate-pulse   h-full  flex  justify-end items-center  mr-14    mb-14       md:pr-28   ">
        <div className="  md:w-[643px] md:h-[443px]     bg-gray-600 md:rounded-xl   pt-16 pb-9 px-9  "></div>
      </section>

      <section className=" md:px-32 text-center">
        <div className=" w-full grid   md:grid-cols-4   lg:grid-cols-3  mb-14     gap-5     grid-cols-1">
          <div className="  md:col-span-2  lg:col-span-1 col-span-1  animate-pulse bg-gray-400 h-[520px] flex   space-y-7  flex-col justify-between  "></div>
          <div className="  md:col-span-2  lg:col-span-1 col-span-1  animate-pulse bg-gray-400 h-[520px] flex   space-y-7  flex-col justify-between  "></div>
          <div className="  md:col-span-2  lg:col-span-1 col-span-1 animate-pulse  bg-gray-400 h-[520px] flex   space-y-7  flex-col justify-between  "></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
