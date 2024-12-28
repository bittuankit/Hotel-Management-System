import React from "react";
import Sidebar from "../components/sidebar";
import { Stack } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <Stack flexDirection={"row"}>
        <aside>
          <Sidebar />
        </aside>
        
      </Stack>
    </div>
  );
};

export default Dashboard;
