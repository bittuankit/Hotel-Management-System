import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Customer from "../components/addCustomer";
import AddEmployee from "../components/addEmployee";

const Auth = ({ children, user, redirect = "/" }) => {
  if (!user) {
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
