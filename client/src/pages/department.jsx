import React from "react";
import Sidebar from "../components/sidebar";
import { Avatar, Button, Stack, Typography } from "@mui/material";

const Department = () => {
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
        <main
          style={{
            width: "80%",
            maxHeight: "100vh",
          }}
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"95%"}
            margin={"1rem 2rem"}
            paddingBottom={".8rem"}
            borderBottom={"2px solid royalblue"}
          >
            <div
              className="search"
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <h1 style={{ fontSize: "1.8rem", fontWeight: 600 }}>
                Department's Employees
              </h1>
            </div>
          </Stack>
          <Stack
            width={"95%"}
            margin={"2rem"}
            flexDirection={"row"}
            gap={".5rem"}
            padding={".2rem .3rem"}
          >
            <Button variant="contained">Reception</Button>
            <Button variant="contained">Housekeeping</Button>
            <Button variant="contained">Food & Beverage</Button>
            <Button variant="contained">Kitchen</Button>
            <Button variant="contained">Maintenance</Button>
            <Button variant="contained">Sales & Marketing</Button>
            <Button variant="contained">Human Resources</Button>
            <Button variant="contained">Accounting</Button>
            <Button variant="contained">Information Technology</Button>
          </Stack>
        </main>
      </Stack>
    </div>
  );
};

export default Department;
