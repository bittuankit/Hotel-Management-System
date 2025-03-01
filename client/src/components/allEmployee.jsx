import React, { useMemo, useEffect } from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import { useAllEmployeeQuery } from "../redux/service";
import Loading from "../components/loading";

const AllEmployee = ({ query }) => {
  const { data, refetch, isFetching } = useAllEmployeeQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const filteredEmployee = useMemo(() => {
    return data?.employees.filter(
      (employees) =>
        employees.firstname.toLowerCase().includes(query) ||
        employees.username.toLowerCase().includes(query) ||
        employees.address.includes(query)
    );
  }, [query, data]);

  return (
    <div>
      <Stack pb={"100px"}>
        <main>
          {isFetching ? (
            <Loading />
          ) : filteredEmployee && filteredEmployee.length > 0 ? (
            filteredEmployee.map((e, idx) => (
              <Stack
                key={idx}
                height={"250px"}
                flexDirection={"row"}
                justifyContent={"space-between"}
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
                <Stack
                  width={"500px"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                >
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
                    Department: {e.department}
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
      </Stack>
    </div>
  );
};

export default AllEmployee;
