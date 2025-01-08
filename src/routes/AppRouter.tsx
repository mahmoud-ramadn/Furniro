import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/Mainlayout/MainLayout';
import Error from '../pages/Error';
const SingleProduct =lazy(()=> import('../pages/SingleProduct'));
const Home = lazy(() => import('../pages/Home'));
const Shope = lazy(() => import('../pages/Shope'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
  
        <MainLayout />
    
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={ ""}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/shope',
        element: (
          <Suspense
            fallback={""}
          >
            <Shope />
          </Suspense>
        ),
      },
      {
        path:'/shope/:id',
        element: (
          <Suspense
            fallback={""}
          >
            <SingleProduct />
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
