import React, { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import signUp from './components/signUp/signUp';
import Header from './components/Header/Header';

var router = createBrowserRouter( [
  {
    path: '/',
    element: <Header/>,
    children: [
      { path: '/', element: <signUp/> },
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