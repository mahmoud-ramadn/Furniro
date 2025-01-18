import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthRegisterSchema, type RegisterForm } from "../../Validations/AuthVailadation";
import Btn from "../ui/Btn";
import InputField from "../ui/Form/input";
import { useNavigate } from "react-router-dom";

function RegisterForm() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterForm>({
        mode: 'onBlur',
        resolver: zodResolver(AuthRegisterSchema),
    });

    // API request to create a new user using fetch
  const submitForm: SubmitHandler<RegisterForm> = async (data) => {
  try {
    const response = await fetch("http://localhost:5002/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: data.firstname, // Send first name
        lastName: data.lastname, // Send last name
        username: data.email, // Using email as the username
        password: data.password, // Send password
      }),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(result.error || "Registration failed");
    }

    const result = await response.json();

    // Assuming the server returns a token
    const { token, firstName, lastName } = result;

    localStorage.setItem("jwtToken", token);

    // You can store the user's name as well in localStorage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);

    // Redirect the user to the homepage or another page after successful registration
    navigate("/");
  } catch (error) {
    console.error("Error during registration:", error);
  }
};

    return (
        <form onSubmit={handleSubmit(submitForm)} className="w-3/4 mx-auto space-y-7">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-secondary-500">Furnio</h1>
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
            <Btn type="submit" className="w-full h-[75px] bg-secondary-500 text-white rounded-xl">
                Sign Up
            </Btn>
        </form>
    );
}

export default RegisterForm;
