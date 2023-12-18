import { Outlet } from "react-router-dom";
import { Navbar } from "./ui/components/Navbar";

export const HeroesApp = () => {
  return (
    <>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
