import { Navigate, createBrowserRouter } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "../heroes";
import { LoginPage } from "../auth/pages/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HeroesApp />
      </PrivateRoute>
    ),
    children: [
      {
        path: "marvel",
        element: <MarvelPage />,
      },
      {
        path: "dc",
        element: <DcPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "heroe/:id",
        element: <HeroPage />,
      },
    ],
  },
  {
    path: "login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "/*",
    element: <Navigate to={"/"} replace={true} />,
  },
]);
