import SectionTitle from "../components/ui/SectionTitle";

import "../index.css";
import OurProducts from "../components/ui/OurProducts";
import { SolarArrowRightOutline } from "../assets/icons/ArrowRight";
import FuniroFurniture from "../components/ui/FuniroFurniture";
import Carousel from "../components/ui/Carousel";

function Home() {
  const CardImage = [
    {
      one: "/our Products/image 4.jpg",
      CatgoriesTite: "Dining",
    },
    {
      one: "/our Products/image 6.jpg",
      CatgoriesTite: "Living",
    },
    {
      one: "/our Products/Images.jpg",
      CatgoriesTite: "Bedroom",
    },
  ];

  return (
    <>
      <section className=" Herobackground   w-full md:h-[716px]   h-full  flex  justify-end items-center  mr-14    mb-14       md:pr-28   ">
        <div className="  md:w-[643px] md:h-[443px] bg-primary md:rounded-xl   pt-16 pb-9 px-9  ">
          <h3 className=" text-base  font-semibold  text-third mb-1 ">
            New Arrival
          </h3>
          <h1 className="  text-secondry font-bold     text-5xl mb-4 ">
            Discover Our New Collection
          </h1>
          <p className=" text-lg text-third  font-medium  mb-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button
            className=" bg-secondry  font-bold text-base  
             w-[222px]  h-20  flex items-center justify-center
            text-white"
          >
            BUY Now
          </button>
        </div>
      </section>

      <section className=" md:px-32 text-center">
        <div className=" space-y-3 mb-14 ">
          <SectionTitle title="Browse The Range" />
          <p className="  md:text-xl font-normal  text-base  text-pragrph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className=" w-full grid   md:grid-cols-4   lg:grid-cols-3  mb-14     gap-5     grid-cols-1">
          {CardImage.map((item, index) => {
            return (
              <>
                <div className="  md:col-span-2  lg:col-span-1 col-span-1 md:h-[520px] flex   space-y-7  flex-col justify-between  ">
                  <img
                    className=" w-full   rounded-md h-[480px] "
                    src={item.one}
                    alt="cardimg"
                    key={index}
                  />
                  <h3 className="  md:text-2xl text-lg font-semibold   text-third">
                    {item.CatgoriesTite}
                  </h3>
                </div>
              </>
            );
          })}
        </div>
      </section>

      <OurProducts />

      <section
        className=" my-16 
       py-11 md:pl-24 px-3 w-full
      bg-primary   "
      >
        <div className="  h-full  grid  lg:grid-cols-3  md:grid-cols-2  grid-cols-1  gap-10  items-center">

          <div className=" col-span-1 flex items-start justify-center  gap-3 flex-col   h-full">
            <h1 className="  font-bold  text-lightBlack  text-4xl ">
              50+ Beautiful rooms inspiration
            </h1>
            <p className=" text-base font-medium text-darkgray">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>

            <button
              className="  text-base font-semibold w-44 h-12 flex items-center 
             bg-secondry text-white
          justify-center "
            >
              Explore More
            </button>
          </div>

          <div className=" grid md:col-span-2    col-span-1    md:grid-cols-2  grid-cols-1 h-full gap-5">
            <div className=" col-span-1  relative z-10  flex overflow-hidden   items-end   pl-6 pb-6    h-full">
              <img
                className=" w-full absolute left-0 top-0  -z-10 "
                src="/our Products/innderPeace.svg"
                alt=""
              />
              <div className="  flex  items-end ">
                <div className=" w-[217px] h-[130px] bg-white/75  p-8 ">
                  <p>
                    01 <span className="  ">---</span> Bed Room
                  </p>
                  <h3 className="  text-darkgray   md:text-2xl text-lg  ">
                    Inner Peace
                  </h3>
                </div>
                <button className=" w-12 h-12  bg-secondry text-white flex items-center  justify-center">
                  <SolarArrowRightOutline />
                </button>
              </div>
            </div>
              <Carousel/>
          

          </div>

        </div>
      </section>
      <FuniroFurniture />
    </>
  );
}

export default Home;
