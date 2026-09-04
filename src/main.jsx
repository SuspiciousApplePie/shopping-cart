import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Cart from "./components/Cart/Cart.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "shop",
        Component: Shop,
      },
      {
        path: "cart",
        Component: Cart,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
