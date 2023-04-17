import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./Store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    /*  errorElement: <ErrorPage />, */
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
