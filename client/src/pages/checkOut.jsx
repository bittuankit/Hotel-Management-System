import React from "react";
import Sidebar from "../components/sidebar";
import { Stack } from "@mui/material";
import FetchCustomer from "../components/fetchCustomer";

const CheckOut = () => {
  return (
    <div>
      <Stack flexDirection={"row"} width={"100vw"}>
        <aside>
          <Sidebar />
        </aside>
        <main
          style={{
            margin: "0 auto",
            maxHeight: "100vh",
            overflowY: "auto",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
          }}
        >
          <FetchCustomer />
        </main>
      </Stack>
    </div>
  );
};

export default CheckOut;
