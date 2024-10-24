import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Orders from './Components/Orders/Orders';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Cheout/Checkout';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </QueryClientProvider>
  </React.StrictMode >
)
