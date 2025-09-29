import { Outlet } from "react-router";
import { MainHeader } from "../components";

function MainLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default MainLayout;
