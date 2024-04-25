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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login/>
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
