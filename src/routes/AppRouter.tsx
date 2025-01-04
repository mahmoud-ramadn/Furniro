import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/Mainlayout/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div
            className=" text-green-500  flex justify-center items-center w-full  
                 min-h-screen
                "
          >
            <h1 className=" text-4xl font-bold  text-violet-400">
              {" "}
              Loading .....
            </h1>
          </div>
        }
      >
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <div className=" text-green-500  flex justify-center items-center w-full  min-h-screen">
                <h1 className=" text-4xl font-bold  text-violet-400">
                  Loading .....
                </h1>
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;

