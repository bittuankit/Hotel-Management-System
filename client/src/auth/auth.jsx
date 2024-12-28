import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Customer from "../components/addCustomer";
import AddEmployee from "../components/addEmployee";

const Auth = ({ children, emp, redirect = "/" }) => {
  if (!emp) {
    return <Navigate to={redirect} />;
  }

  return (
    <>
      {children ? children : <Outlet />}
      <Customer />
      <AddEmployee />
    </>
  );
};

export default Auth;
