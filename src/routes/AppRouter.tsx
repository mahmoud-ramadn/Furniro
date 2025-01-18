import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from '../pages/Error';
import MainLayout from '../layouts/Mainlayout/MainLayout';
const SingleProduct = lazy(() => import('../pages/SingleProduct'));
const Home = lazy(() => import('../pages/Home'));
const Shope = lazy(() => import('../pages/Shope'));
const Cart = lazy(() => import('../pages/Cart'));
import Checkout from '../pages/checkout';
import SuspenseWrapper from '../components/feedback/SuspenseWrapper';
import ProtectedRoute from '../components/Auth/protecteRout';
const Contact = lazy(() => import('../pages/Contact'));
const Blog = lazy(() => import('../pages/Blog'));
const Success = lazy(() => import('../pages/sucess'));
const Cancel = lazy(() => import('../pages/cancel'));
const Orders = lazy(() => import('../pages/Order'));
const AuthLayout=lazy(()=>import('../layouts/AuthLayout'));
const Auth=lazy(()=>import('../pages/Auth/Auth'))



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
            <Home />
          
        ),
      },
      {
        path: '/shop', // Corrected from /shope
        element: (
          <SuspenseWrapper>

            <Shope />
          </SuspenseWrapper>
        ),
      },
      {
        path: '/shop/:id', // Corrected from /shope/:id
        element: (
          <SuspenseWrapper>
            <SingleProduct />
          </SuspenseWrapper>
        ),
      },
      {
        path: '/cart', // Corrected from /shope/:id
        element: (
          <ProtectedRoute>
          <SuspenseWrapper>

            <Cart />
          </SuspenseWrapper>
          </ProtectedRoute>
        ),
      },
      {
        path: '/checkout',
        element:(
          <SuspenseWrapper>

            <Checkout />
          </SuspenseWrapper>
          ),
      },
      {
        path: '/contact',
        element: (
          <SuspenseWrapper>
            <Contact />
          </SuspenseWrapper>
        ),
      },

      {
        path: '/Success',
        element: (
         <SuspenseWrapper>
           <Success />
         </SuspenseWrapper>
        ),
      },
      {
        path: '/Cancel',
        element: (
          <SuspenseWrapper>
            <Cancel />
          </SuspenseWrapper>
         
        ),
      },
      {
        path: '/order',
        element: (
          <SuspenseWrapper>

            <Orders />
          </SuspenseWrapper>
        ),
      },
      {
        path: '/blog',
        element: (
         <SuspenseWrapper>

           <Blog />
         </SuspenseWrapper>
        ),
      },
    ],
  
  },
  {
    path:'/auth',
    element:(
      <SuspenseWrapper>
        <AuthLayout/> 
      </SuspenseWrapper>
    ),
    children:[
     {index:true,
     path:"/auth",
     element:(
  <SuspenseWrapper>
    <Auth/>
  </SuspenseWrapper>
     )
     }
    ]
  }
]);

const AppRouter = () => {


 
  
  
  return <RouterProvider router={router} />;
};
export default AppRouter;
