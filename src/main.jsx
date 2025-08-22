import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ModalProvider } from "./context/ModalProvider.jsx";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage.jsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./configs/muiConfig.js";
import RegisterPage from "@pages/RegisterPage.jsx";
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
    ,
  </ThemeProvider>,
);
