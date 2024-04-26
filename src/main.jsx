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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        // loader:()=>fetch('http://localhost:5000/spots')
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
