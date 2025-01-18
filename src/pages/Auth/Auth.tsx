import { useState } from "react";
import LoginForm from "../../components/form/LoginForm";
import RegisterForm from "../../components/form/RegisterForm";

function Auth() {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (

    <div className="min-h-scree flex items-center justify-center py-6">

      <div className="w-full max-w-lg  ">
        {isRegister ? <RegisterForm /> : <LoginForm />}

        <div className="mb-6 text-center mt-8">
          <button
            onClick={toggleForm}
            className="text-sm text-blue-500 hover:text-blue-700"
          >
            {isRegister
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Auth;
