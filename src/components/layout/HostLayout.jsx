import React from "react";
import { Outlet } from "react-router-dom";
import HostNav from "./Host/HostNav";
function HostLayout() {
  return (
    <>
      <HostNav />
      <Outlet />
    </>
  );
}

export default HostLayout;
