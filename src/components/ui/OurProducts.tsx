import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

function OurProducts() {
  return (
    <section className="md:mx-24   my-8 ">
      <SectionTitle title="Our Products" />
      <ProductCard />

      <div className=" flex justify-center items-center">
        <button
          className="  text-secondry   w-[245px] h-[48px] 
        flex items-center  justify-center text-base font-semibold  bg-white border-[1px] border-secondry  "
        >
          Show More
        </button>
      </div>
    </section>
  );
}

export default OurProducts;
