import { useState, SetStateAction } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Btn from '../components/ui/Btn';
import { useCart } from '../context/Cartcontext';
import TopageBanner from '../components/ui/TopageBanner';
import Banner from '../components/ui/Banner';
import { formSchema, Formcheckout } from '../Validations/CheckoutValiadion';
import { loadStripe } from '@stripe/stripe-js';
import Spinner from '../assets/spinner';

const stripePromise = loadStripe(
  'pk_test_51Qi1ltG1Yc7r0GlRGtv1njDWunCxy3QmSE4A8BBj6o6gcORsLZ3LM1617YYlZyhwjXPyCM1hpQvbxQEfgJ3g03li00CMDLYU9n',
);

const Checkout: React.FC = () => {
  const { subtotal = 0, cart } = useCart();
  const [selectedOption, setSelectedOption] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Formcheckout>({
    resolver: zodResolver(formSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Add error state

  const onSubmit: SubmitHandler<Formcheckout> = async () => {
    setIsLoading(true);
    setError(null); // Clear previous errors
    const stripe = await stripePromise;

    if (!stripe) {
      console.error('Stripe initialization failed.');
      setError('Payment system initialization failed. Please try again.');
      setIsLoading(false);
      return;
    }

    const formattedCart = cart.map((item) => ({
      name: item.title,
      discountedPrice: parseFloat(item.price.replace('$', '')),
      quantity: item.count,
      images: item.images || [item.images[0]],
    }));

    try {
      const backendUrl =
        import.meta.env.VITE_STRIPE_BACKEND_URL || 'http://localhost:5002';
      const response = await fetch(
        `${backendUrl.replace(/\/$/, '')}/api/create-checkout-session`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: formattedCart }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error ||
            `HTTP error! status: ${response.status} - ${response.statusText}`,
        );
      }

      const responseData = await response.json();

      if (response.ok && responseData.id) {
        const result = await stripe.redirectToCheckout({
          sessionId: responseData.id,
        });

        if (result.error) {
          console.error(result.error.message);
          setError(`Payment error: ${result.error.message}`);
        }
      } else {
        const errorMessage =
          responseData.error || 'Failed to create checkout session';
        console.error('Failed to create checkout session:', errorMessage);
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'An unknown error occurred during checkout';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const FormInput = [
    { id: 'firstname', label: 'First Name', type: 'text' },
    { id: 'lastname', label: 'Last Name', type: 'text' },
    { id: 'companyname', label: 'Company Name (Optional)', type: 'text' },
    { id: 'streetaddress', label: 'Street address', type: 'text' },
    { id: 'townCity', label: 'Town / City', type: 'text' },
    { id: 'province', label: 'Province', type: 'select' },
    { id: 'zipcode', label: 'ZIP code', type: 'text' },
    { id: 'phone', label: 'Phone', type: 'tel' },
    { id: 'email', label: 'Email address', type: 'email' },
    {
      id: 'additioninformation',
      label: 'Additional information',
      type: 'text',
    },
  ];

  const handleChange = (value: SetStateAction<string>) => {
    setSelectedOption(value);
  };

  return (
    <section>
      <TopageBanner />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container mt-16 mb-14 grid md:grid-cols-2 gap-7 px-4 grid-cols-1"
      >
        {/* Billing Details Section */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1 pb-16 pt-9 md:pl-20">
          <h1 className="text-4xl font-semibold">Billing details</h1>
          <div className="pt-9 flex flex-col gap-9">
            {FormInput.map((field, index) => (
              <div
                key={index}
                className="md:h-[121px] flex flex-col justify-between"
              >
                <label htmlFor={field.id}>{field.label}</label>
                {field.type === 'select' ? (
                  <select
                    id={field.id}
                    {...register(field.id as keyof Formcheckout)}
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
                    {...register(field.id as keyof Formcheckout)}
                    className="h-[75px] rounded-xl border-[1px] pl-3"
                  />
                )}
                {errors[field.id as keyof Formcheckout] && (
                  <p className="text-sm text-danger-500">
                    {errors[field.id as keyof Formcheckout]?.message}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-1 md:h-[768px] h-full overflow-hidden md:px-9 md:py-20 py-10">
          {/* Add error display */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <strong>Error:</strong> {error}
            </div>
          )}

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
              <h3 className="font-bold text-2xl text-secondary-500">
                Rs.{subtotal}
              </h3>
            </div>
          </div>
          <div className="space-y-4 mt-6">
            {[
              {
                id: 'bank-transfer',
                label: 'Direct Bank Transfer',
                text: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
              },
              { id: 'cash-on-delivery', label: 'Cash On Delivery' },
            ].map((option, index) => (
              <div key={index}>
                <label
                  key={option.id}
                  htmlFor={option.id}
                  className={`flex items-center space-x-2 cursor-pointer ${
                    selectedOption === option.id
                      ? 'text-black'
                      : 'text-gray-600'
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
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{' '}
              <span className="font-semibold">privacy policy</span>.
            </p>
          </div>
          <div className="w-full text-center mt-10">
            {cart.length ? (
              <Btn
                type="submit"
                className="w-full md:w-[318px] border-2 text-xl font-normal h-[64px] rounded-2xl"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className=" flex items-center  gap-x-1 justify-center">
                    {' '}
                    Processing... <Spinner color="#B88E2F" />{' '}
                  </div>
                ) : (
                  'Place order '
                )}
              </Btn>
            ) : (
              <Btn
                disabled={true}
                type="submit"
                className="w-full md:w-[318px] border-2 text-xl font-normal cursor-not-allowed text-danger-500 h-[64px] rounded-2xl"
              >
                NO products in cart
              </Btn>
            )}
          </div>
        </div>
      </form>
      <Banner />
    </section>
  );
};

export default Checkout;
