import { Outlet } from "react-router-dom";
import { Navbar } from "./ui/components/Navbar";
import { AuthProvider } from "./auth/context";

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <Navbar />
      <div className="container" id="detail">
        <Outlet />
      </div>
    </AuthProvider>
  );
};
