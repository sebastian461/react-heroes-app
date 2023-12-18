import { Navigate, createBrowserRouter } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { MarvelPage, DcPage } from "../heroes/pages";
import { LoginPage } from "../auth/pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesApp />,
    children: [
      {
        path: "marvel",
        element: <MarvelPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "dc",
        element: <DcPage />,
      },
      {
        path: "/*",
        element: <Navigate to={"/"} replace={true} />,
      },
    ],
  },
]);
