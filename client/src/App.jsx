import React, { lazy, Suspense, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/loading";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

const Login = lazy(() => import("./pages/login"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Customer = lazy(() => import("./pages/customer"));
const Rooms = lazy(() => import("./pages/rooms"));
const Department = lazy(() => import("./pages/department"));
const CheckOut = lazy(() => import("./pages/checkOut"));
const Error = lazy(() => import("./utils/error"));
const Auth = lazy(() => import("./auth/auth"));
const Employee = lazy(() => import("./pages/worker"));

const App = () => {
  const { toggleTheme, isUser } = useSelector((state) => state.service);

  const themeStyles = useMemo(
    () => ({
      background: toggleTheme ? "#000" : "#fff",
      color: toggleTheme ? "#fff" : "#000",
    }),
    [toggleTheme]
  );

  return (
    <div style={themeStyles}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Auth user={!isUser} redirect="/dashboard" />}>
              <Route path="/" element={<Login />} />
            </Route>

            {isUser?.role === "admin" && (
              <Route element={<Auth user={isUser} />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/department" element={<Department />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/employee" element={<Employee />} />
              </Route>
            )}

            {isUser?.role !== "admin" && (
              <Route element={<Auth user={isUser} />}>
                <Route path="/customer" element={<Customer />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/checkout" element={<CheckOut />} />
              </Route>
            )}

            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
        <Toaster position="top-center" />
      </BrowserRouter>
    </div>
  );
};

export default App;
