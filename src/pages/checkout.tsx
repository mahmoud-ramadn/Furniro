/* eslint-disable react-hooks/rules-of-hooks */
import Banner from "../components/ui/Banner"
import Btn from "../components/ui/Btn";
import TopageBanner from "../components/ui/TopageBanner"
import { useCart } from "../context/Cartcontext"
import { SetStateAction, useState } from "react";

function checkout() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (value: SetStateAction<string>) => {
        setSelectedOption(value);
    };
    const { subtotal } = useCart();
    return (
        <section>
            <TopageBanner />
            {/* Billing details */}

            <div className=" container mt-16 mb-14 grid md:grid-cols-2 gap-7 px-4  grid-cols-1">
                <div className=" col-span-1 sm:col-span-2 md:col-span-1 h-96 bg-secondary-500">

                </div>
                <div className=" col-span-1 sm:col-span-2 md:col-span-1 md:h-[768px]  h-full  overflow-hidden md:px-9  md:py-20  py-10 ">

                    <div className=" border-b-[1px]  border-x-text-links  space-y-6 pb-9 ">
                        <div className=" flex items-center justify-between text-2xl font-medium">
                            <h3 >Product</h3>
                            <h3>Subtotal</h3>
                        </div>
                        <div className=" flex items-center justify-between  text-base">
                            <h3 className=" font-normal  text-text-links">Asgaard sofa</h3>
                            <h3 className="  font-light">Rs. 250,000.00</h3>
                        </div>
                        <div className=" flex items-center justify-between text-base  ">
                            <h3 className="font-normal">Subtotal</h3>
                            <h3 className=" font-light">Rs. {subtotal}</h3>
                        </div>
                        <div className=" flex items-center justify-between   ">
                            <h3 className="text-base font-normal" >Total</h3>
                            <h3 className=" font-bold text-2xl text-secondary-500">Rs.{subtotal}</h3>
                        </div>
                    </div>
                    <div className="space-y-4 mt-6">
                        <label
                            htmlFor="bank-transfer"
                            className={`flex items-center space-x-2 cursor-pointer ${selectedOption === "bank-transfer" ? "text-black" : "text-gray-600"
                                }`}
                        >
                            <input
                                type="radio"
                                id="bank-transfer"
                                name="payment"
                                value="bank-transfer"
                                checked={selectedOption === "bank-transfer"}
                                onChange={() => handleChange("bank-transfer")}
                                className="h-4 w-4 accent-black"
                            />
                            <span>Direct Bank Transfer</span>
                        </label>
                        <p className="text-base font-light text-text-links">
                            Make your payment directly into our bank account. Please use your Order
                            ID as the payment reference. Your order will not be shipped until the
                            funds have cleared in our account.
                        </p>

                        <label
                            htmlFor="delivery"
                            className={`flex items-center space-x-2 cursor-pointer ${selectedOption === "cash-on-delivery" ? "text-black" : "text-gray-600"
                                }`}
                        >
                            <input
                                type="radio"
                                id="delivery"
                                name="delivery"
                                value="delivery"
                                checked={selectedOption === "delivery"}
                                onChange={() => handleChange("delivery")}
                                className="h-4 w-4 accent-black"
                            />
                            <span className=" text-text-links">Direct Bank Transfer</span>
                        </label>

                        <label
                            htmlFor="cash-on-delivery"
                            className={`flex items-center space-x-2 cursor-pointer ${selectedOption === "cash-on-delivery" ? "text-black" : "text-gray-600"
                                }`}
                        >
                            <input
                                type="radio"
                                id="cash-on-delivery"
                                name="payment"
                                value="cash-on-delivery"
                                checked={selectedOption === "cash-on-delivery"}
                                onChange={() => handleChange("cash-on-delivery")}
                                className="h-4 w-4 accent-black"
                            />
                            <span className=" text-text-links">Cash On Delivery</span>
                        </label>

                        <p className=" w-full text-base  font-light">
                            Your personal data will be used to support your experience throughout
                            this website, to manage access to your account, and for other purposes
                            described in our <span className="  font-semibold">privacy policy</span>.
                        </p>
                    </div>
                    <div className=" w-full  text-center mt-10">
                    <Btn className="w-full md:w-[318px] border-2 text-xl font-normal h-[64px] rounded-2xl">
                        Place order
                    </Btn>
                    </div>



                </div>

             



            </div>

            <Banner />
        </section>
    )
}

export default checkout