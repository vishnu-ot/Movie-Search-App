import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedLogin() {
  const { auth } = useContext(FormContext);
  if (auth) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
  //   return (
  //     <div>ProtectedLogin</div>
  //   )
}

export default ProtectedLogin;
