import { Link } from "react-router-dom";
import AppImg from "../components/ui/AppImg";
import Banner from "../components/ui/Banner";
import Btn from "../components/ui/Btn";
import TopageBanner from "../components/ui/TopageBanner";
import { useCart } from "../context/Cartcontext";
import Delet from "../assets/icons/delet";

function Cart() {
  const { cart, deleteProduct } = useCart();

  return (
    <section>
      <TopageBanner />

      <div className="container px-4 grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-8 mt-8 mb-8">
        <div className="lg:col-span-4 md:col-span-2 w-full rounded-md py-4">
          <div className="w-full rounded-md p-4 bg-primary-500">
            <div className="flex items-center gap-x-4 md:gap-x-12 lg:gap-x-28 justify-start">
              <div className="w-16 md:w-24 rounded-lg bg-primary-500 overflow-hidden my-3"></div>
              <h2 className="text-sm md:text-base">Product</h2>
              <p className="text-sm md:text-base font-normal">Price</p>
              <span className="w-8 h-8 rounded flex items-center justify-center text-sm md:text-base font-normal">
                Quantity
              </span>
              <p className="text-sm md:text-base font-normal">Subtotal</p>
            </div>
          </div>

          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex flex-wrap items-center justify-between gap-4 mt-4"
              >
                {/* Product Image */}
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg bg-primary-500 overflow-hidden">
                  {/* Check if images exist and have at least one element */}
                  {item.images && item.images.length > 0 ? (
                    <AppImg
                      className="w-full h-full"
                      src={item.images[0]}
                      alt="product item"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200"></div> // Placeholder if no image is available
                  )}
                </div>
                {/* Product Details */}
                <h2 className="text-sm md:text-base font-medium">
                  {item.title}
                </h2>
                <p className="text-sm md:text-base font-normal">
                  Rs. {item.price}
                </p>
                <span className="w-8 h-8 rounded flex items-center justify-center text-sm md:text-base font-normal border-2 border-text-links">
                  1
                </span>
                <p className="text-sm md:text-base font-normal">
                  Rs. 
                </p>
                <button type="button" onClick={() => deleteProduct(item)}>
                 <Delet/>
                </button>
              </div>
            ))
          ) : (
            <div className="h-56 mt-4 flex items-center justify-center">
              <p className="text-center text-danger-500 font-bold">
                Your cart is currently empty.
              </p>
            </div>
          )}
        </div>

        <div className="lg:col-span-2 md:col-span-2 w-full bg-primary-500 rounded-md p-6 text-center">
          <h2 className="text-xl lg:text-2xl font-semibold mb-8">
            Cart Totals
          </h2>
          <div className="mb-16 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm md:text-base font-medium">Subtotal</h3>
              <p className="text-sm md:text-base font-medium text-text-links">
                Rs. 
              </p>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-sm md:text-base font-medium">Total</h3>
              <p className="font-medium text-lg text-secondary-500">
                Rs. 
              </p>
            </div>
          </div>
          <Link to="/checkout" className="w-full">
            <Btn
              type="button"
              className="w-full md:w-[222px] h-[58px] border-2 rounded-2xl"
            >
              Check Out
            </Btn>
          </Link>
        </div>
      </div>
      <Banner />
    </section>
  );
}

export default Cart;
