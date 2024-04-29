import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './assets/Layout/Root';
import Home from './assets/Pages/Home';
import AuthProvider from './Provider/AuthProvider';
import Register from './assets/Pages/Register';
import Login from './assets/Pages/Login';
import AddSpots from './assets/Pages/AddSpots';
import SpotDetails from './assets/Pages/SpotDetails';
import SpotsOfSpecificCountry from './assets/Components/SpotsOfSpecificCountry';
import AllSpots from './assets/Pages/AllSpots';
import MySpots from './assets/Pages/MySpots';
import PrivetRoute from './Route/PrivetRoute';
import NotFound from './assets/Pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/addSpots",
        element: <PrivetRoute><AddSpots /></PrivetRoute>
      },
      {
        path: "/spotDetails/:id",
        element: <PrivetRoute><SpotDetails /></PrivetRoute>,
        loader: ({ params }) => fetch(`https://b9a10-server-side-one.vercel.app/singleSpots/${params.id}`)
      },
      {
        path: "/spotsOfSpecificCountry/:id",
        element: <SpotsOfSpecificCountry />,
        loader: ({ params }) => fetch(`https://b9a10-server-side-one.vercel.app/countries/${params.id}`)
      },
      {
        path: "/allSpots",
        element: <AllSpots />,
      },
      {
        path: "/mySpots",
        element: <PrivetRoute><MySpots /></PrivetRoute>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
