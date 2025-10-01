import { Outlet } from "react-router";
import { LogoHeader } from "../components";

function AuthLayout() {
  return (
    <>
      <LogoHeader />
      <Outlet />;
    </>
  );
}

export default AuthLayout;
