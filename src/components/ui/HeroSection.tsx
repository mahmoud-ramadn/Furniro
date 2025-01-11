
function HeroSection() {
  return (
    <section className="   relative    w-full lg:h-[716px]   h-full  flex  justify-end items-center  mr-14    mb-14       md:pr-[2%]   ">
      <img
        className="w-full h-full -z-10 absolute left-0 top-0 object-cover"
        srcSet="/images/scandinavian-interior-mockup-wall-decal-background 1 (1).webp 1x, /images/scandinavian-interior-mockup-wall-decal-background 1 (1)@2x.webp 2x"
        src="/images/scandinavian-interior-mockup-wall-decal-background 1 (1).webp"
        alt="hero"
        loading="lazy"
      />

      <div className=" md:w-[643px] md:h-[443px]  bg-primary-500 md:rounded-xl   pt-16 pb-9 px-9  ">
        <h3 className=" text-base  font-semibold    text-text-primary  mb-1 ">
          New Arrival
        </h3>
        <h1 className="   text-secondary-500  font-bold     text-5xl mb-4 ">
          Discover Our New Collection
        </h1>
        <p className=" text-lg  text-text-primary  font-medium  mb-11">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button
          className="  bg-secondary-500  font-bold text-base  
         w-[222px]  h-20  flex items-center justify-center
        text-white"
        >
          BUY Now
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
