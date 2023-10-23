import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { Navigate, Outlet } from "react-router-dom";

function Protectedroute() {
  const { auth } = useContext(FormContext);
  console.log(auth, "protected route");
  if (auth) {
    return <Outlet />;
  } else {
    return <Navigate to="login" />;
  }
  //   return (
  //     <div>Protectedroute</div>
  //   )
}

export default Protectedroute;
