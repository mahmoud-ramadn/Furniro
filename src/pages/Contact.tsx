import Address from '../assets/icons/address';
import Clock from '../assets/icons/clock';
import Phone from '../assets/icons/phone';
import Banner from '../components/ui/Banner';
import TopageBanner from '../components/ui/TopageBanner';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Btn from '../components/ui/Btn';
import {
  contactformSchema,
  FormValues,
} from '../Validations/CheckoutValiadion';
import InputField from '../components/ui/Form/input';
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
    resolver: zodResolver(contactformSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form Data Submitted:', data);
  };
  return (
    <section>
      <TopageBanner />
      <div className=" mt-12">
        <div className=" text-center  space-y-2  ">
          <h1 className=" text-4xl  font-semibold">Get In Touch With Us</h1>
          <p className=" text-base font-normal md:w-[644px] mx-auto text-text-links">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div
          className=" md:w-[1058px] mx-auto w-full grid  md:grid-cols-8  gap-x-8 grid-cols-1
         h-full "
        >
          <div className="col-span-1 md:col-span-3   md:h-[537px] h-fit  mt-20 flex flex-col justify-center gap-y-11  pl-14 pr-16">
            <div className=" flex items-start gap-x-8">
              <Address className=" w-6 h-7" />
              <div>
                <h3 className=" text-2xl font-medium">Address</h3>
                <p className=" text-base font-normal">
                  236 5th SE Avenue, New <br />
                  York NY10000, United States
                </p>
              </div>
            </div>

            <div className=" flex items-start gap-x-8">
              <Phone className=" w-8 h-8" />
              <div>
                <h3 className=" text-2xl font-medium">Phone</h3>
                <p className=" text-base font-normal">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className=" flex items-start gap-x-8">
              <Clock className=" w-6 h-6" />
              <div>
                <h3 className=" text-2xl font-medium">Working Time</h3>
                <p className=" text-base font-normal">
                  Monday-Friday: 9:00-
                  <br />
                  22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 col-span-1  h-fit  pt-[119px] pb-16 px-14 ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="pt-9 flex flex-col gap-9"
            >
              <InputField
                type="text"
                register={register}
                placeholder="Abc"
                label="Your Name"
                name="yourname"
                error={errors.yourname?.message}
              />
              <InputField
                type="email"
                register={register}
                placeholder="Abc@def.com"
                label="Email address"
                name="email"
                error={errors.email?.message}
              />
              <InputField
                type="teaxaera"
                register={register}
                placeholder="Abc@def.com"
                label="Subject"
                name="subject"
                error={errors.subject?.message}
              />
              <InputField
                type="textarea"
                register={register}
                placeholder="Hi,id like to ask abou"
                label="Message"
                name="message"
                error={errors.message?.message}
              />

              <Btn
                type="submit"
                className="  text-white  md:w-[273px] h-[55px]  bg-secondary-500 "
              >
                Submit
              </Btn>
            </form>
          </div>
        </div>
      </div>
      <Banner />
    </section>
  );
}

export default Contact;
