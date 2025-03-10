import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { Stack } from "@mui/material";
import { IoAddCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addEmployeeModal } from "../redux/slice";
import AllEmployee from "../components/allEmployee";

const AddEmployee = () => {
  const { toggleTheme } = useSelector((state) => state.service);
  const [employeeQuery, setEmployeeQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();

  const handleAddEmployee = () => {
    dispatch(addEmployeeModal(true));
  };

  return (
    <div>
      <Stack flexDirection={"row"} width={"100vw"}>
        <aside
          style={{
            minWidth: "20%",
          }}
        >
          <Sidebar />
        </aside>
        <div
          style={{
            margin: "0 auto",
            maxHeight: "100vh",
            minWidth: "80%",
            overflow: "hidden",
          }}
        >
          <Stack
            width={"20rem"}
            margin={"1rem auto"}
            fontSize={"2rem"}
            bgcolor={"royalblue"}
            color={"#fff"}
            padding={"1rem"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={"2rem"}
            justifyContent={"space-between"}
            borderRadius={".5rem"}
          >
            <h1>Add Employee</h1>
            <IoAddCircle
              style={{ fontSize: "3rem", cursor: "pointer" }}
              onClick={handleAddEmployee}
            />
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            minWidth={"100%"}
          >
            <form
              style={{
                marginBottom: ".2rem",
                display: "flex",
                minWidth: "70%",
                margin: "0 auto",
              }}
              onSubmit={handleSearchSubmit}
            >
              <input
                style={
                  toggleTheme
                    ? {
                        padding: ".5rem 1rem",
                        width: "100%",
                        border: "2px solid royalblue",
                        outline: "0",
                        borderRadius: ".5rem",
                        color: "black",
                        background: "#000",
                        color: "#fff",
                      }
                    : {
                        padding: ".5rem 1rem",
                        width: "100%",
                        border: "2px solid royalblue",
                        outline: "0",
                        borderRadius: ".5rem",
                        color: "black",
                        background: "#fff",
                        color: "#000",
                      }
                }
                type="text"
                name="search-employee"
                id="search-employee"
                placeholder="Enter employee name or email"
                value={employeeQuery}
                onChange={(e) => setEmployeeQuery(e.target.value)}
              />
              <input
                style={{
                  padding: ".5rem 1rem",
                  background: "royalblue",
                  marginLeft: ".5rem",
                  cursor: "pointer",
                  borderRadius: ".5rem",
                  color: "#fff",
                }}
                type="submit"
                value="Search"
              />
            </form>
          </Stack>
          <div
            style={{
              width: "70%",
              maxHeight: "93vh",
              overflowY: "auto",
              scrollbarWidth: "none",
              margin: "0 auto",
            }}
          >
            <AllEmployee query={employeeQuery} />
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default AddEmployee;
