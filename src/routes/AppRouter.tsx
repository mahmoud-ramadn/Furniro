import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/Mainlayout/MainLayout';
import Error from '../pages/Error';
const SingleProduct = lazy(() => import('../pages/SingleProduct'));
const Home = lazy(() => import('../pages/Home'));
const Shope = lazy(() => import('../pages/Shope'));
const Cart=lazy(()=>import('../pages/Cart'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={''}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={''}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/shop', // Corrected from /shope
        element: (
          <Suspense fallback={''}>
            <Shope />
          </Suspense>
        ),
      },
      {
        path: '/shop/:id', // Corrected from /shope/:id
        element: (
          <Suspense fallback={''}>
            <SingleProduct />
          </Suspense>
        ),
      },
      {
        path: '/cart', // Corrected from /shope/:id
        element: (
          <Suspense fallback={
            <div>
              <h1>loading....</h1>
            </div>
          }>
            <Cart/>
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
