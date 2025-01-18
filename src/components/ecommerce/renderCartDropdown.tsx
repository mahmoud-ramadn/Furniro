/* eslint-disable react-hooks/rules-of-hooks */
import { PhLockLight } from "../../assets/icons/lock";
import { CarbonCloseFilled } from "../../assets/icons/Closes";
import { Link } from "react-router-dom";
import AppImg from "../ui/AppImg";
import { TProductWithCount } from "../../types/products";


const RenderCartDropdown = ({ deleteProduct, subtotal ,cart }: { deleteProduct:(item:TProductWithCount)=>void, subtotal:number ,cart:TProductWithCount[]})=> {
    
  return (
      <div className="absolute right-0 mt-2 w-[450px] bg-white h-[746px]    shadow-lg rounded-md ">
          {cart.length > 0 ? (
              <div className=" flex justify-between flex-col h-full">
                  <div className=" w-[350px]     mt-7 ml-7    ">
                      <div className=" w-full border-b-[1px] pb-6 border-text-links ">
                          <h2 className=" text-2xl font-semibold w-full flex justify-between items-center">
                              Shopping Cart <PhLockLight className=' w-[32px] h-[19px] ' />
                          </h2>
                      </div>
                      <div className=' flex justify-between h-full flex-col'>

                          <div className="overflow-y-scroll  h-[450px]  scrollbar-hidden">
                              {cart.map((item, index) => (
                                  <div
                                      key={index}
                                      className="   flex justify-between items-center  my-5 "
                                  >
                                      <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg bg-primary-500 overflow-hidden">
                                          {/* Check if images exist and have at least one element */}
                                          {item.images && item.images.length > 0 ? (
                                              <div className=' overflow-hidden w-[105px] h-[108px] rounded-md'>
                                                  <AppImg
                                                      className="w-full h-full"
                                                      src={item.images[0]}
                                                      alt="product item"
                                                  />
                                              </div>
                                          ) : (
                                              <div className="w-full h-full bg-gray-200"></div>
                                          )}
                                      </div>
                                      <div>
                                          <h3 className=" text-base font-normal">
                                              {item.title.substring(0, 20)}
                                          </h3>
                                          <p>
                                              {item.count} x
                                              <span className=" text-secondary-500 text-sm">
                                                  RS{item.price}
                                              </span>
                                          </p>
                                      </div>
                                      <button type="button" onClick={() => deleteProduct(item)}>
                                          <CarbonCloseFilled className='w-5 h-5' />
                                      </button>
                                  </div>
                              ))}
                          </div>

                          <div className='flex items-center justify-between'>
                              <h4 className=' text-base font-normal '>Subtotal</h4>
                              <p className=' text-secondary-500 font-semibold text-base'>Rs {subtotal}</p>

                          </div>
                      </div>

                  </div>

                  <div className=" border-t-[1px] w-full  flex items-center gap-x-4 justify-center py-7 ">
                      <Link
                          to="/cart"
                          className=" text-sm  font-normal  border-[1px] rounded-[50px] flex items-center  h-[30px] px-8"
                      >
                          cart
                      </Link>
                      <Link
                          to="/checkout"
                          className=" text-sm  font-normal  border-[1px] rounded-[50px] flex items-center  h-[30px] px-8"
                      >
                          Checkout
                      </Link>
                      <Link
                          to="/cart"
                          className=" text-sm  font-normal  border-[1px] rounded-[50px]  flex items-center  h-[30px] px-8"
                      >
                          Comparison
                      </Link>
                  </div>
              </div>
          ) : (
              <div className=' h-full flex  justify-center items-center'>

                  <p className=" text-lg  text-text-links text-center font-bold ">Your cart is empty.</p>
              </div>
          )}
      </div>
  )
}

export default RenderCartDropdown