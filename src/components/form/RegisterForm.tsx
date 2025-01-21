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
import Spinner from "../../assets/spinner";
function RegisterForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    mode: "onBlur",
    resolver: zodResolver(AuthRegisterSchema),
  });

  const submitForm: SubmitHandler<RegisterForm> = async (data) => {
    setLoading(true); 
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

      const fullName = `${data.firstname} ${data.lastname}`;
      await updateProfile(user, { displayName: fullName });

      const token = await user.getIdToken();

      Cookies.set('userDisplayName', fullName, { expires: 7 }); 
      Cookies.set('userToken', token, { expires: 7 });
      console.log("User registered successfully:", user);
      navigate("/");

    } catch (error ) {
      switch (error) {
        case 'auth/weak-password':
          setErrorMessage("The password is too weak.");
          break;
        default:
          setErrorMessage('The email address is already in use.');
      }
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="w-3/4 mx-auto space-y-7">
      <div className="text-center">
        <Link to='/' className="text-4xl cursor-pointer font-bold text-secondary-500">Furnio</Link>
      </div>

 <p className=" text-danger-500">{errorMessage &&  errorMessage }</p>



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
        disabled={loading} 
      >
        {loading ? <div className="  flex items-center gap-x-2 justify-center"> Signing Up... <Spinner/>  </div> : 'Sign Up'} 
      </Btn>
    </form>
  );
}

export default RegisterForm;
