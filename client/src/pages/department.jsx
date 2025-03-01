import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { useAllEmployeeQuery } from "../redux/service";

const Department = () => {
  const [dep, setDep] = useState("reception");

  const { data: depEmployees, isFetching } = useAllEmployeeQuery();

  const filteredEmployees = depEmployees?.employees?.filter(
    (e) => e.department === dep
  );

  return (
    <div>
      <Stack flexDirection={"row"} width={"100vw"}>
        <aside style={{ minWidth: "20%" }}>
          <Sidebar />
        </aside>
        <main
          style={{
            width: "100%",
            maxHeight: "100vh",
            overflow: "hidden",
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
              }}
            >
              <h1 style={{ fontSize: "1.8rem", fontWeight: 600 }}>
                Department's Employees
              </h1>
            </div>
          </Stack>
          <Stack
            width={"95%"}
            margin={"0 2rem"}
            flexDirection={"row"}
            gap={".5rem"}
            padding={".2rem .3rem"}
          >
            {[
              "reception",
              "housekeeping",
              "food-&-beverage",
              "kitchen",
              "maintenance",
              "sales-&-marketing",
              "human-resources",
              "accounting",
              "information-technology",
            ].map((dept) => (
              <Button
                key={dept}
                variant={dep === dept ? "contained" : "outlined"}
                onClick={() => setDep(dept)}
              >
                {dept.replace(/-/g, " ").toUpperCase()}
              </Button>
            ))}
          </Stack>
          <div
            style={{
              width: "80%",
              margin: "0 auto",
              maxHeight: "80vh",
              overflowY: "auto",
              scrollbarWidth: "none",
            }}
          >
            <main>
              {isFetching ? (
                <p>Loading...</p>
              ) : filteredEmployees?.length > 0 ? (
                filteredEmployees.map((e, idx) => (
                  <Stack
                    key={idx}
                    height={"250px"}
                    flexDirection={"row"}
                    gap={"1rem"}
                    alignItems={"center"}
                    bgcolor={"royalblue"}
                    color={"white"}
                    p={"1rem"}
                    my={"1rem"}
                    borderRadius={".5rem"}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRight: "2px solid #fff6",
                        paddingRight: "2rem",
                        marginRight: "2rem",
                      }}
                    >
                      <Avatar
                        sx={{
                          width: "200px",
                          height: "200px",
                        }}
                        alt={e.firstname}
                        src={e.empProfile}
                      />
                    </div>
                    <Stack width={"500px"} flexDirection={"column"}>
                      <Typography variant="h6" sx={{ fontWeight: "600" }}>
                        Name: {e.firstname} {e.lastname}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: "600" }}>
                        Username: {e.username}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "600", textTransform: "capitalize" }}
                      >
                        Gender: {e.empGender}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "600", textTransform: "capitalize" }}
                      >
                        Role: {e.role}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "600", textTransform: "capitalize" }}
                      >
                        Address: {e.address}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: "600" }}>
                        Salary: ₹{e.amount}
                      </Typography>
                    </Stack>
                  </Stack>
                ))
              ) : (
                <Stack textAlign={"center"} margin={"1rem 0"}>
                  <h3>No Employees Yet.</h3>
                </Stack>
              )}
            </main>
          </div>
        </main>
      </Stack>
    </div>
  );
};

export default Department;
