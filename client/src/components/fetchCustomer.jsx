import React, { useEffect } from "react";
import { Stack, Avatar, Typography, Button } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useAllCustomerQuery } from "../redux/service";

const FetchCustomer = () => {
  const { data } = useAllCustomerQuery();

  const handleDelete = () => {};

  return (
    <div>
      <Stack>
        <main
          style={{
            margin: "0 10rem",
            maxHeight: "100vh",
            overflowY: "auto",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
          }}
        >
          {data?.customers.map((e, idx) => (
            <Stack
              key={idx}
              flexDirection={"row"}
              justifyContent={"space-between"}
              gap={"2rem"}
              alignItems={"center"}
              bgcolor={"royalblue"}
              color={"white"}
              p={"1rem"}
              m={"2rem"}
              borderRadius={".5rem"}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: ".5rem",
                }}
              >
                <Avatar alt={e.cusName} src={e.cusProfile} />
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  {e.cusName}
                </Typography>
              </div>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                {e.cusRoom}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "600", textTransform: "capitalize" }}
              >
                {e.cusGender}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "600", textTransform: "capitalize" }}
              >
                {e.cusCountry}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                {e.cusPayAmount}
              </Typography>
              <Button
                variant="contained"
                color="error"
                endIcon={
                  <MdDelete
                    style={{
                      position: "relative",
                      transform: "translateY(-6%)",
                    }}
                  />
                }
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "none",
                  fontWeight: "600",
                }}
                onClick={handleDelete}
              >
                Delete
              </Button>
            </Stack>
          ))}
        </main>
      </Stack>
    </div>
  );
};

export default FetchCustomer;
