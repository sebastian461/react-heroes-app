import { Navigate, createBrowserRouter } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "../heroes";
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
    element: <LoginPage />,
  },
  {
    path: "/*",
    element: <Navigate to={"/"} replace={true} />,
  },
]);
