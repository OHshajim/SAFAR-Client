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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:()=>fetch('http://localhost:5000/spots')
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/addSpots",
        element:<AddSpots/>
      },
      {
        path:"/spotDetails/:id",
        element:<SpotDetails/>,
        loader:({params})=>fetch(`http://localhost:5000/spots/${params.id}`)
      },
      {
        path:"/spotsOfSpecificCountry/:id",
        element:<SpotsOfSpecificCountry/>,
        loader:({params})=>fetch(`http://localhost:5000/countries/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
