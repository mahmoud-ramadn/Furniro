import useLoging from "../../hooks/useLogin";
import Btn from "../ui/Btn";
import InputField from "../ui/Form/input";
 // Import axios for making API requests

function LoginForm() {
    
    const{register,loading,errors,errorMessage,handleSubmit,submitForm ,user}=useLoging();

    console.log( user);
    

    return (
        <form onSubmit={handleSubmit(submitForm)} className="w-3/4 mx-auto space-y-7">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-secondary-500">Furnio</h1>
            </div>

            {errorMessage && <div className="text-danger-500 text-center">{errorMessage}</div>}

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

            <Btn
                type="submit"
                className="w-full h-[75px] bg-secondary-500 text-white rounded-xl"
                disabled={loading} // Disable button when loading
            >
                {loading ? "Signing In..." : "Sign In"} {/* Show loading text */}
            </Btn>
        </form>
    );
}

export default LoginForm;
