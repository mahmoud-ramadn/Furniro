import { useState, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Btn from "../components/ui/Btn";
import { useCart } from "../context/Cartcontext";

const formSchema = z.object({
    firstname: z.string().nonempty("First name is required"),
    lastname: z.string().nonempty("Last name is required"),
    companyname: z.string().optional(),
    streetaddress: z.string().nonempty("Street address is required"),
    townCity: z.string().nonempty("Town/City is required"),
    province: z.string().nonempty("Province is required"),
    zipcode: z.string().regex(/^\d{5}(-\d{4})?$/, {
        message: "ZIP code must be a valid 5-digit or ZIP+4 code",
    }),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    email: z.string().email("Invalid email address"),
    additioninformation: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Checkout: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("Form Data Submitted:", data);
    };

    const [selectedOption, setSelectedOption] = useState<string>("");
    const { subtotal = 0 } = useCart();

    const handleChange = (value: SetStateAction<string>) => {
        setSelectedOption(value);
    };

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)} className="container mt-16 mb-14 grid md:grid-cols-2 gap-7 px-4 grid-cols-1">
                {/* Billing Details Section */}
                <div className="col-span-1 sm:col-span-2 md:col-span-1 pb-16 pt-9 md:pl-20">
                    <h1 className="text-4xl font-semibold">Billing details</h1>
                    <div className="pt-9 flex flex-col gap-9">
                        {[
                            { id: "firstname", label: "First Name", type: "text" },
                            { id: "lastname", label: "Last Name", type: "text" },
                            { id: "companyname", label: "Company Name (Optional)", type: "text" },
                            { id: "streetaddress", label: "Street address", type: "text" },
                            { id: "townCity", label: "Town / City", type: "text" },
                            { id: "province", label: "Province", type: "select" },
                            { id: "zipcode", label: "ZIP code", type: "text" },
                            { id: "phone", label: "Phone", type: "tel" },
                            { id: "email", label: "Email address", type: "email" },
                            { id: "additioninformation", label: "Additional information", type: "text" },
                        ].map((field,index) => (
                            <div key={index} className="md:h-[121px] flex flex-col justify-between">
                                <label htmlFor={field.id}>{field.label}</label>
                                {field.type === "select" ? (
                                    <select
                                        id={field.id}
                                        {...register(field.id as keyof FormValues)}
                                        className="h-[75px] rounded-xl border-[1px] pl-3"
                                    >
                                        <option value="">Select a province</option>
                                        <option value="Western Province">Western Province</option>
                                        <option value="Los Angeles">Los Angeles</option>
                                        <option value="Chicago">Chicago</option>
                                        <option value="Houston">Houston</option>
                                        <option value="Miami">Miami</option>
                                    </select>
                                ) : (
                                    <input
                                        id={field.id}
                                        type={field.type}
                                        {...register(field.id as keyof FormValues)}
                                        className="h-[75px] rounded-xl border-[1px] pl-3"
                                    />
                                )}
                                {errors[field.id as keyof FormValues] && (
                                    <p className="text-sm text-danger-500">{errors[field.id as keyof FormValues]?.message}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-2 md:col-span-1 md:h-[768px] h-full overflow-hidden md:px-9 md:py-20 py-10">
                    <div className="border-b-[1px] border-x-text-links space-y-6 pb-9">
                        <div className="flex items-center justify-between text-2xl font-medium">
                            <h3>Product</h3>
                            <h3>Subtotal</h3>
                        </div>
                        <div className="flex items-center justify-between text-base">
                            <h3 className="font-normal text-text-links">Asgaard sofa</h3>
                            <h3 className="font-light">Rs. 250,000.00</h3>
                        </div>
                        <div className="flex items-center justify-between text-base">
                            <h3 className="font-normal">Subtotal</h3>
                            <h3 className="font-light">Rs. {subtotal}</h3>
                        </div>
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-normal">Total</h3>
                            <h3 className="font-bold text-2xl text-secondary-500">Rs.{subtotal}</h3>
                        </div>
                    </div>
                    <div className="space-y-4 mt-6">
                        {[
                            { id: "bank-transfer", label: "Direct Bank Transfer", text: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.' },
                            { id: "cash-on-delivery", label: "Cash On Delivery" },
                        ].map((option,index ) => (
                            <div key={index}>

                                <label
                                    key={option.id}
                                    htmlFor={option.id}
                                    className={`flex items-center space-x-2 cursor-pointer ${selectedOption === option.id ? "text-black" : "text-gray-600"
                                        }`}
                                >

                                    <input
                                        type="radio"
                                        id={option.id}
                                        name="payment"
                                        value={option.id}
                                        checked={selectedOption === option.id}
                                        onChange={() => handleChange(option.id)}
                                        className="h-4 w-4 accent-black"
                                    />

                                    <span>{option.label}</span>

                                </label>

                                <p>{option.text}</p>
                            </div>

                        ))}
                        <p className="text-base font-light text-text-links">
                            Your personal data will be used to support your experience throughout this website,
                            to manage access to your account, and for other purposes described in our{" "}
                            <span className="font-semibold">privacy policy</span>.
                        </p>
                    </div>
                    <div className="w-full text-center mt-10">
                        <Btn type="submit" className="w-full md:w-[318px] border-2 text-xl font-normal h-[64px] rounded-2xl">
                            Place order
                        </Btn>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Checkout;
