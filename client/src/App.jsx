import React, { lazy, Suspense } from "react";
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

  return (
    <div
      style={
        toggleTheme
          ? { background: "#000", color: "#fff" }
          : { background: "#fff", color: "#000" }
      }
    >
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            {isUser?.role === "admin" ? (
              <>
                <Route element={<Auth user={isUser} />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/customer" element={<Customer />} />
                  <Route path="/rooms" element={<Rooms />} />
                  <Route path="/department" element={<Department />} />
                  <Route path="/checkout" element={<CheckOut />} />
                  <Route path="/employee" element={<Employee />} />
                </Route>
                <Route element={<Auth user={!isUser} redirect="/dashboard" />}>
                  <Route path="/" element={<Login />} />
                </Route>
              </>
            ) : (
              <>
                <Route element={<Auth user={isUser} />}>
                  <Route path="/customer" element={<Customer />} />
                  <Route path="/rooms" element={<Rooms />} />
                  <Route path="/checkout" element={<CheckOut />} />
                </Route>
                <Route element={<Auth user={!isUser} redirect="/customer" />}>
                  <Route path="/" element={<Login />} />
                </Route>
              </>
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
