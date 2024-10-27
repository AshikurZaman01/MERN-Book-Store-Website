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
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { Provider } from 'react-redux'
import store from './Redux/store';
import SingleBook from './Components/Home/TopSeller/BookList/SingleBook';
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

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
        path: "/books/:id",
        element: <PrivateRoute><SingleBook></SingleBook></PrivateRoute>
      },
      {
        path: "/orders",
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path: "/checkout",
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
        <Toaster></Toaster>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode >
)
