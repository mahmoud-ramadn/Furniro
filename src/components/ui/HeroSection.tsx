import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative w-full lg:h-[716px] h-full flex justify-end items-center mr-14 mb-14 md:pr-[2%]">
      {/* Background Image */}
      <img
        className="w-full h-full -z-10 absolute left-0 top-0 object-cover"
        srcSet="/images/scandinavian-interior-mockup-wall-decal-background 1 (1).webp 1x, /images/scandinavian-interior-mockup-wall-decal-background 1 (1)@2x.webp 2x"
        src="/images/scandinavian-interior-mockup-wall-decal-background 1 (1).webp"
        alt="Scandinavian interior mockup with wall decal background"
        loading="lazy"
      />

      {/* Content */}
      <div className="md:w-[643px] lg:w-1/2 md:h-[443px] bg-primary-500 md:rounded-xl p-9 pt-16 pb-9 shadow-lg">
        <h3 className="text-base font-semibold text-text-primary mb-1 tracking-wide">
          New Arrival
        </h3>
        <h1 className="text-secondary-500 font-bold text-5xl mb-4 leading-tight">
          Discover Our New Collection
        </h1>
        <p className="text-lg text-text-primary font-medium mb-11 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <Link to='/shop'
          className="bg-secondary-500 font-bold text-base w-[222px] h-16  flex items-center justify-center text-white hover:bg-secondary-600 transition duration-300"
          aria-label="Buy Now"
        >
          BUY NOW
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
