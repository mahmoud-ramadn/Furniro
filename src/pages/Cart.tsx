import AppImg from "../components/ui/AppImg";
import Banner from "../components/ui/Banner";
import Btn from "../components/ui/Btn";
import TopageBanner from "../components/ui/TopageBanner";
import { useCart } from "../context/Cartcontext";

function Cart() {

  const { cart,deleteProduct ,subtotal} = useCart();
  
  
  return (
    <section>
      <TopageBanner />

      <div className="container px-4 grid lg:grid-cols-6 md:grid-cols-1 gap-8 mt-[72px] mb-[62px]">
        <div className="lg:col-span-4 md:col-span-1 w-full   rounded-md p-4">
          <div className="lg:col-span-4 md:col-span-1 w-full   rounded-md p-4 bg-primary-500">

          </div>
          
         {
            cart.length > 0 ? (cart.map((item,index)=>(

              <div  key={index} className=" flex items-center justify-between">
                <div className=" w-[105px]  h-[105px] rounded-lg bg-primary-500 overflow-hidden my-3 ">
                  <AppImg className=" w-full h-full" src={item.image||item.images[0]} alt="product item" />
                </div>
                <h2>{item.title.substring(0,10)}</h2>
                <p className=" text-base font-normal">Rs.{item.price}</p>
                <span className=" w-8 h-8 rounded flex items-center justify-center text-base font-normal border-2 border-text-links ">
                  1
                </span>
                <p className=" text-base font-normal">Rs.${subtotal}</p>

                <button type="button" onClick={() => deleteProduct(item)} >
                  <img src="/src/assets/icons/delet (1).webp" alt="" />
                </button>
              </div>

            ))


            ): (
              <p className = "text-center text-gray-500">
              Your cart is currently empty.
        </p>
        )
         }
         

        


        </div>

        <div className="lg:col-span-2 md:col-span-1 w-full md:h-[390px] bg-primary-500 rounded-md p-6 text-center">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-8">
            Cart Totals
          </h2>
          <div className="mb-16 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium">Subtotal</h3>
              <p className="text-base font-medium text-text-links">
                Rs. $ {subtotal}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-medium">Total</h3>
              <p className="font-medium text-xl text-secondary-500">
                Rs.${subtotal}
              </p>
            </div>
          </div>

          <Btn type="button" className="w-full md:w-[222px] h-[58px] border-2 rounded-2xl">
            Check Out
          </Btn>
        </div>
      </div>

      {/* Bottom Banner */}
      <Banner />
    </section>
  );
}

export default Cart;
