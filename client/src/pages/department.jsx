import React from "react";
import Sidebar from "../components/sidebar";
import { Stack } from "@mui/material";

const Department = () => {
  return (
    <div>
      <Stack flexDirection={"row"}>
        <aside>
          <Sidebar />
        </aside>
        <main>
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