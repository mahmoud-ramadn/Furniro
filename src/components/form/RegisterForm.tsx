import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthRegisterSchema, type RegisterForm } from "../../Validations/AuthVailadation";
import Btn from "../ui/Btn";
import InputField from "../ui/Form/input";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { updateProfile } from "firebase/auth/cordova";
import Cookies from 'js-cookie';
import { useState } from "react";
function RegisterForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loading state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    mode: "onBlur",
    resolver: zodResolver(AuthRegisterSchema),
  });

  const submitForm: SubmitHandler<RegisterForm> = async (data) => {
    setLoading(true); // Set loading to true before making the request
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

      // Set the user's full name
      const fullName = `${data.firstname} ${data.lastname}`;
      await updateProfile(user, { displayName: fullName });

      // Get the user token
      const token = await user.getIdToken();

      // Store display name and token in cookies
      Cookies.set('userDisplayName', fullName, { expires: 7 }); // Cookie will expire in 7 days
      Cookies.set('userToken', token, { expires: 7 }); // Store the token in cookies

      console.log("User registered successfully:", user);

      // Redirect to the homepage
      navigate("/");

    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setLoading(false); // Set loading to false after the process is complete
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="w-3/4 mx-auto space-y-7">
      <div className="text-center">
        <Link to='/' className="text-4xl cursor-pointer font-bold text-secondary-500">Furnio</Link>
      </div>
      <InputField
        register={register}
        placeholder="First Name"
        label="First Name"
        error={errors.firstname?.message}
        type="text"
        name="firstname"
      />
      <InputField
        register={register}
        placeholder="Last Name"
        label="Last Name"
        error={errors.lastname?.message}
        type="text"
        name="lastname"
      />
      <InputField
        register={register}
        placeholder="Enter Your Email"
        label="Email"
        error={errors.email?.message}
        type="email"
        name="email"
      />
      <InputField
        register={register}
        placeholder="Enter Strong Password"
        label="Password"
        error={errors.password?.message}
        type="password"
        name="password"
      />
      <InputField
        register={register}
        placeholder="Confirm Password"
        label="Confirm Password"
        error={errors.confirmPassword?.message}
        type="password"
        name="confirmPassword"
      />

      <Btn
        type="submit"
        className={`w-full h-[75px] bg-secondary-500 text-white rounded-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading} // Disable button while loading
      >
        {loading ? 'Signing Up...' : 'Sign Up'} {/* Change text based on loading state */}
      </Btn>
    </form>
  );
}

export default RegisterForm;
