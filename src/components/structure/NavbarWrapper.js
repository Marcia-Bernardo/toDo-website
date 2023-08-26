import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const NavbarWrapper = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
export default NavbarWrapper;
