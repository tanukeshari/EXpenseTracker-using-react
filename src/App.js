import React, { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignUp from './components/SignUp/SignUp';
import Header from './components/Header/Header';
import Welcome from "./components/pages/Welcome";
import CompleteProfile from './components/pages/CompleteProfile'

var router = createBrowserRouter( [
  {
    path: '/',
    element: <Header/>,
    children: [
      {
         path: '/', element: <SignUp/> },
      {path:'/welcome', element:<Welcome/>},
      { path: "/completeprofile", element: <CompleteProfile/> },
    ],
  },
]);
function App() {
  return (
    <Fragment>
    <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;