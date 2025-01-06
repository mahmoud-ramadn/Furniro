import Carousel from './Carousel';
import { SolarArrowRightOutline } from '../../assets/icons/ArrowRight';

function BeautifulRoomSection() {
  return (
    <section
      className=" my-16 
   py-11 md:pl-24 px-3 w-full
   bg-primary-500   lg:h-[650px] h-full  "
    >
      <div className="  h-full  grid  lg:grid-cols-3  md:grid-cols-2  grid-cols-1  gap-10  items-center">
        <div className=" col-span-1 flex items-start justify-center  gap-3 flex-col   h-full">
          <h1 className="  font-bold   text-text-cardTitle  text-4xl ">
            50+ Beautiful rooms inspiration
          </h1>
          <p className=" text-base font-medium  text-text-phargraph ">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>

          <button
            className="  text-base font-semibold w-44 h-12 flex items-center 
         bg-secondary-500 text-white
      justify-center "
          >
            Explore More
          </button>
        </div>

        <div className=" grid md:col-span-2    col-span-1    md:grid-cols-2  grid-cols-1 h-full gap-5">
          <div className=" col-span-1  relative z-10  flex overflow-hidden   items-end   pl-6 pb-6    h-full">
            <img
              className=" w-full absolute left-0 top-0   -z-10 "
              src="/images/banner.webp"
              alt=""
            />
            <div className="  flex  items-end ">
              <div className=" w-[217px] h-[130px] bg-white/75  p-8 ">
                <p className=" text-text-phargraph">
                  01 <span className="  ">---</span> Bed Room
                </p>
                <h3 className="   text-text-cardTitle   md:text-2xl text-lg  ">
                  Inner Peace
                </h3>
              </div>
              <button className=" w-12 h-12  bg-secondary-500 text-white flex items-center  justify-center">
                <SolarArrowRightOutline />
              </button>
            </div>
          </div>
          <Carousel />
        </div>
      </div>
    </section>
  );
}

export default BeautifulRoomSection;
