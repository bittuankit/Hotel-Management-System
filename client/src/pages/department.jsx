import React from "react";
import Sidebar from "../components/sidebar";
import { Stack } from "@mui/material";

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
            minWidth: "80%",
          }}
        >
          <h1>Department...</h1>
          <form>
            <label htmlFor="text">TExt</label>
          </form>
        </main>
      </Stack>
    </div>
  );
};

export default Department;
