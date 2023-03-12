import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignUp from './components/SignUp/SignUp';
import Header from './components/Header/Header';
import Welcome from "./components/pages/Welcome";
import CompleteProfile from './components/pages/CompleteProfile';
import VerifyEmail from "./components/pages/VerifyEmail";
import { AuthContextProvider } from "./store/Auth-Context";
import ForgotPassword from "./components/pages/ForgotPassword";
import Expenses from "./components/pages/Expenses";

var router = createBrowserRouter( [
  {
    path: '/',
    element: <Header/>,
    children: [
      { path: '/', element: <SignUp/> },
      {path:'/welcome', element:<Welcome/>},
      { path: "/completeprofile", element: <CompleteProfile/> },
      { path: "/verifyemail", element: <VerifyEmail/> },
      { path: "/forgotpassword", element: <ForgotPassword/> },
      {path:'/expenses',element:<Expenses/>}
    ],
  },
]);
function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;