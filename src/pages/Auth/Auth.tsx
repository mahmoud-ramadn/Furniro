import { useState } from "react";
import LoginForm from "../../components/form/LoginForm";
import RegisterForm from "../../components/form/RegisterForm";

function Auth() {
  // State to manage the current form (Login/Register)
  const [isRegister, setIsRegister] = useState(false);

  // Toggle between Register and Login forms
  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="min-h-scree flex items-center justify-center py-6">
      <div className="w-full max-w-lg  ">
        {/* Render the form based on the state */}
        {isRegister ? <RegisterForm /> : <LoginForm />}

        {/* Toggle button to switch between forms */}
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
