import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Stack, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleToggleTheme } from "../redux/slice";
import { FaSun, FaMoon } from "react-icons/fa6";

const Sidebar = () => {
  const location = useLocation();
  const _700 = useMediaQuery("(max-width: 700px)");

  const { toggleTheme } = useSelector((state) => state.service);

  const bgColor = "#fff";
  const color = "#000";

  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(handleToggleTheme());
  };

  return (
    <div className="sidebar">
      {toggleTheme ? (
        <FaSun
          style={{
            fontSize: "2rem",
            position: "absolute",
            margin: ".5rem",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={handleTheme}
        />
      ) : (
        <FaMoon
          style={{
            fontSize: "2rem",
            position: "absolute",
            margin: ".5rem",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={handleTheme}
        />
      )}
      <Stack
        width={"100%"}
        height={"100vh"}
        p={5}
        mr={5}
        bgcolor={"royalblue"}
        fontSize={"1.2rem"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Link
          className="link"
          style={{
            background: location.pathname.includes("/dashboard")
              ? bgColor
              : "none",
            color: location.pathname.includes("/dashboard") ? color : "none",
          }}
          to={"/dashboard"}
        >
          Dashboard
        </Link>
        <Link
          style={{
            background: location.pathname.includes("/customer")
              ? bgColor
              : "none",
            color: location.pathname.includes("/customer") ? color : "none",
          }}
          className="link"
          to={"/customer"}
        >
          Customer
        </Link>
        <Link
          style={{
            background: location.pathname.includes("/rooms") ? bgColor : "none",
            color: location.pathname.includes("/rooms") ? color : "none",
          }}
          className="link"
          to={"/rooms"}
        >
          Rooms
        </Link>
        <Link
          style={{
            background: location.pathname.includes("/department")
              ? bgColor
              : "none",
            color: location.pathname.includes("/department") ? color : "none",
          }}
          className="link"
          to={"/department"}
        >
          Department
        </Link>
        <Link
          style={{
            background: location.pathname.includes("/checkout")
              ? bgColor
              : "none",
            color: location.pathname.includes("/checkout") ? color : "none",
          }}
          className="link"
          to={"/checkout"}
        >
          CheckOut
        </Link>
        <Link
          style={{
            background: location.pathname.includes("/updatecheckin")
              ? bgColor
              : "none",
            color: location.pathname.includes("/updatecheckin")
              ? color
              : "none",
          }}
          className="link"
          to={"/updatecheckin"}
        >
          Update CheckIn
        </Link>
        <Link
          style={{
            background: location.pathname.includes("/employee")
              ? bgColor
              : "none",
            color: location.pathname.includes("/employee") ? color : "none",
          }}
          className="link"
          to={"/employee"}
        >
          Employee
        </Link>
      </Stack>
    </div>
  );
};

export default Sidebar;
