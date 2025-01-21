import { FlatColorIconsGoogle } from "../../assets/icons/googl";
import Spinner from "../../assets/spinner";
import useLoging from "../../hooks/useLogin";
import Btn from "../ui/Btn";
import InputField from "../ui/Form/input";
import { Link } from "react-router-dom";

function LoginForm() {
    const { register, loading, errors, errorMessage, handleSubmit, submitForm ,googleLogin} = useLoging();
    return (
        <form onSubmit={handleSubmit(submitForm)} className="w-3/4 mx-auto space-y-7">
            <div className="text-center">
                <Link to="/" className="text-4xl cursor-pointer font-bold text-secondary-500">
                    Furnio
                </Link>
            </div>

            {/* Show error message if login fails */}
            {errorMessage && <div className="text-danger-500 text-center">{errorMessage}</div>}

            {/* Input fields for email and password */}
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

            {/* Submit button */}
            <Btn
                type="submit"
                className="w-full h-[75px] bg-secondary-500 text-white rounded-xl"
                disabled={loading} // Disable the button when submitting
            >
                {loading ? (
                    <div className="flex items-center gap-x-2 justify-center">
                        Signing In... <Spinner />
                    </div>
                ) : (
                    "Sign In"
                )}
            </Btn>

            <Btn
                 type="submit"
                className="w-full h-[75px] 
                 flex items-center gap-x-3 justify-center
                bg-secondary-500 text-white rounded-xl mt-4"
                onClick={googleLogin}
            >
                Sign In with Google 
                <FlatColorIconsGoogle  className="  "/>
            </Btn>
        </form>
    );
}

export default LoginForm;
