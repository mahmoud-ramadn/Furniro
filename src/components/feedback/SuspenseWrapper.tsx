import { Suspense } from "react";
import AppImg from "../ui/AppImg";
const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
    <Suspense
        fallback={
            <div className="flex items-center bg-primary-500 justify-center h-screen">
                <AppImg src='/images/Meubel House_Logos-05.png' alt='logo' className=' w-full h-full' />
            </div>
        }
    >
        {children}
    </Suspense>
);



export  default SuspenseWrapper