import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Homepages from "./pages/Homepages";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavBar from "./components/structure/NavBar";
import Tasks from "./components/Tasks";

import NavbarWrapper from "./components/structure/NavbarWrapper";
import { GlobalProvider } from "./store/GlobalStore";
import NewTask from "./components/NewTask";
import ListTasks from "./components/ListTasks";
import TodoDetails from "./components/TodoDetails";
import CreateTodo from "./pages/CreateTodo";
import ListTodo from "./pages/ListTodo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        index: true,
        element: <Homepages />,
      },
      {
        path: "/newtask",
        element: <CreateTodo/>,
      },
      {
        path: "/listtasks",
        element: <ListTodo/>,
      },
      {
        path:"/details",
        element:<TodoDetails/>
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalProvider>
    <React.StrictMode>
      <RouterProvider router={router}>
        <NavBar />
      </RouterProvider>
    </React.StrictMode>
  </GlobalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
