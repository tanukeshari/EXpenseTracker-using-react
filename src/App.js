import React from "react";
import { useSelector } from "react-redux";
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { ExpenseContextProvider } from "./store/Expense-Context";
import Signup from './components/SignUp/Signup';
import Header from './components/Header/Header';
import Welcome from "./components/pages/Welcome";
import CompleteProfile from './components/pages/CompleteProfile';
import VerifyEmail from "./components/pages/VerifyEmail";
//import { AuthContextProvider } from "./store/Auth-Context";
import ForgotPassword from "./components/pages/ForgotPassword";
import Expenses from "./components/pages/Expenses";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

var router = createBrowserRouter( [
  {
    path: '/',
    element: <Header/>,
    children: [
      { path: '/', element: <Signup/> },
      {path:'/welcome', element:<Welcome/>},
      { path: "/completeprofile", element: <CompleteProfile/> },
      { path: "/verifyemail", element: <VerifyEmail/> },
      { path: "/forgotpassword", element: <ForgotPassword/> },
      {path:'/expenses',element:<Expenses/>}
    ],
  },
]);
function App() {
  const darkTheme = useSelector((state) => state.theme.dark);
  return (
    // <AuthContextProvider>
    //   <ExpenseContextProvider>
    <div 
      style={{ height: '100vh' }}
      id={darkTheme ? 'dark' :'light'}
      className="App">
        <RouterProvider router={router} />
    </div>
      
    //   </ExpenseContextProvider>
    // </AuthContextProvider>
  );
}

export default App;