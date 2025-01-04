import { IconHeart } from "../../assets/icons/Heart";
import { IconReverse_alt } from "../../assets/icons/Revers";
import { IconBxsShareAlt } from "../../assets/icons/Share";

function ProductCard() {
  const CardImage = [
    {
      one: "/our Products/image 1.jpg",
      title: "Syltherine",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: "Rp 3.500.000",
      offer: "New",
    },
    {
      one: "/our Products/image 2.svg",
      title: "Syltherine",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: "Rp 3.500.000",
      offer: "New",
    },
    {
      one: "/our Products/image 3.jpg",
      title: "Syltherine",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: "Rp 3.500.000",
      offer: "new",
    },
    {
      one: "/our Products/image 4.jpg",
      title: "Syltherine",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: "Rp 3.500.000",
      precent: "-50%",
    },
    {
      one: "/our Products/image 6.jpg",
      title: "Syltherine",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: "Rp 3.500.000",
      offer: "New",
    },
    {
      one: "/our Products/image 7.jpg",
      title: "Syltherine",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: "Rp 3.500.000",
      precent: "-50%",
    },
    {
      one: "/our Products/image 9.jpg",
      title: "Syltherine",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: "Rp 3.500.000",
      precent: "-30%",
    },
    {
      one: "/our Products/Images.jpg",
      title: "Syltherine",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: "Rp 3.500.000",
      precent: "-19%",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  py-3 md:gap-8  gap-4 ">
      {CardImage.map((card, index) => (
        <div
          key={index}
          className="col-span-1 md:col-span-1 h-[446px]  relative group  rounded-sm shadow-md"
        >
          {card.offer ? (
            <span
              className={`w-12 h-12 rounded-full   absolute    right-6 top-6  bg-success 
            flex  items-center 
                text-base  font-medium text-white
             justify-center `}
            >
              {card.offer}
            </span>
          ) : (
            <span
              className={`w-12 h-12 rounded-full   absolute    right-6 top-6   bg-danger 
            flex  items-center 
                text-base  font-medium text-white
             justify-center `}
            >
              {card.precent}
            </span>
          )}

          <div
            className=" w-full h-[0%] absolute left-0 
            overflow-hidden   top-1/2  -translate-y-1/2  group-hover:h-[100%]  
              duration-100 ease-linear transition-all  flex items-center justify-center   px-4  bg-cardhover/30   "
          >
            <div
              className="  px-3  flex items-center 
                    flex-col  justify-between  h-24 "
            >
              <button
                type="button"
                className="
                      text-secondry w-[202px] font-semibold h-12 flex items-center 
                      justify-center text-base  bg-white "
              >
                Add to Cart
              </button>

              <div className=" flex items-center  text-base  font-semibold text-white  gap-x-5">
                <button type="button" className="flex items-center ">
                  <IconBxsShareAlt /> Share
                </button>

                <button type="button" className="flex items-center ">
                  <IconReverse_alt /> Compare
                </button>

                <button type="button" className="  flex items-center ">
                  <IconHeart /> Like
                </button>
              </div>
            </div>
          </div>
          <img
            src={card.one}
            alt={card.title}
            className="w-full  h-[301px]  object-cover"
          />
          <div className=" py-5 px-4">
            <h2 className=" text-2xl  text-cardTitel    font-semibold  ">
              {card.title}
            </h2>
            <p className=" text-base  text-cardSubtite font-medium ">
              {card.subtitle}
            </p>
            <div className="mt-2 flex justify-between items-center">
              <h3 className="  text-lg  text-cardTitel  font-bold">
                {card.price}
              </h3>
              <span className="line-through   text-cardSubtite/30   font-normal  text-base  ">
                {card.discount}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
