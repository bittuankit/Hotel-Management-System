import { Stack } from "@mui/material";
import React from "react";
import Sidebar from "../components/sidebar";
import { IoAddCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addEmployeeModal } from "../redux/slice";

const Employee = () => {
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
        <main>
          <Stack
            fontSize={"2rem"}
            margin={"1rem"}
            bgcolor={"royalblue"}
            color={"#fff"}
            padding={"1rem"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={"2rem"}
            justifyContent={"space-between"}
            borderRadius={".5rem"}
            minWidth={"80%"}
          >
            <h1>Add Employee</h1>
            <IoAddCircle
              style={{ fontSize: "3rem", cursor: "pointer" }}
              onClick={handleAddEmployee}
            />
          </Stack>
        </main>
      </Stack>
    </div>
  );
};

export default Employee;
