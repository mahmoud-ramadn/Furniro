import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/Mainlayout/MainLayout';
import Error from '../pages/Error';
import Hero from '../components/skeleteon/Hero';
const Home = lazy(() => import('../pages/Home'));
const Shope = lazy(() => import('../pages/Shope'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense
        fallback={
          <div
            className=" text-green-500  flex justify-center items-center w-full  
                 min-h-screen
                "
          >
            <h1 className=" text-4xl font-bold  text-violet-400">
              {' '}
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
          <Suspense fallback={<Hero />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/shope',
        element: (
          <Suspense
            fallback={
              <div>
                <h1 className=" text-4xl font-bold  text-primary-900 ">
                  loading...
                </h1>
              </div>
            }
          >
            <Shope />
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
