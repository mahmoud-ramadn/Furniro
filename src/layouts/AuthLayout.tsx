import { Outlet } from "react-router-dom";
import AppImg from "../components/ui/AppImg";

function AuthLayout() {

 



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="bg-primary-500/20 flex items-center justify-center">
        <AppImg src="/images/logo.svg" alt="logo" className="w-full h-full object-cover" />
      </div>

      <div className="flex justify-center items-center p-6">
        <div className="w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
