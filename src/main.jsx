import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ModalProvider } from "./context/ModalProvider.jsx";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage.jsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./configs/muiConfig.js";
import RegisterPage from "@/pages/auth/RegisterPage.jsx";
import AuthLayout from "@/pages/auth/AuthLayout.jsx";
import LoginPage from "./pages/auth/LoginPage";
import OTPVerifyPage from "./pages/auth/OTPVerifyPage.jsx";
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/register",
            element: <RegisterPage />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/verify-otp",
            element: <OTPVerifyPage />,
          },
        ],
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
