import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { Stack } from "@mui/material";
import CheckOutCustomer from "../components/checkOutCustomer";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const [customerQuery, setCustomerQuery] = useState("");
  const { toggleTheme } = useSelector((state) => state.service);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
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
        <main
          style={{
            margin: "0 auto",
            maxHeight: "100vh",
            minWidth: "80%",
            overflowY: "auto",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
          }}
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"90%"}
            margin={"1.5rem auto"}
            borderBottom={"2px solid royalblue"}
          >
            <Stack width={"20%"} fontSize={"2rem"} marginBottom={"1rem"}>
              <h1 style={{ fontWeight: "600" }}>Check Out</h1>
            </Stack>
            <Stack
              flexDirection={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              minWidth={"80%"}
              marginBottom={"1rem"}
            >
              <form
                style={{
                  margin: "0 auto",
                  display: "flex",
                  minWidth: "100%",
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
                  name="search-customer"
                  id="search-customer"
                  placeholder="Enter customer name or email"
                  value={customerQuery}
                  onChange={(e) => setCustomerQuery(e.target.value)}
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
          </Stack>
          <CheckOutCustomer query={customerQuery} />
        </main>
      </Stack>
    </div>
  );
};

export default CheckOut;
