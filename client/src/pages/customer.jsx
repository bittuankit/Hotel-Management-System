import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { Stack } from "@mui/material";
import { IoAddCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerModal } from "../redux/slice";
import AllCustomer from "../components/allCustomer";

const AddCustomer = () => {
  const { toggleTheme } = useSelector((state) => state.service);
  const [customerQuery, setCustomerQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();

  const handleAddCustomer = () => {
    dispatch(addCustomerModal(true));
  };

  return (
    <div>
      <Stack flexDirection={"row"}>
        <aside>
          <Sidebar />
        </aside>
        <div
          style={{
            margin: "0 auto",
            maxHeight: "100vh",
            minWidth: "720px",
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
            <h1>Add Customer</h1>
            <IoAddCircle
              style={{ fontSize: "3rem", cursor: "pointer" }}
              onClick={handleAddCustomer}
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
          <div
            style={{
              width: "100%",
              maxHeight: "93vh",
              overflowY: "auto",
              scrollbarWidth: "none",
            }}
          >
            <AllCustomer query={customerQuery} />
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default AddCustomer;
