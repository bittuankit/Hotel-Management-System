import React, { useMemo } from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useAllCustomerQuery } from "../redux/service";
import Loading from "../components/loading";

const AllCustomer = ({ query }) => {
  const { allCustomer } = useSelector((state) => state.service);
  const { isLoading } = useAllCustomerQuery();

  const filteredCustomer = useMemo(() => {
    return allCustomer.filter((customer) => customer.cusName.includes(query));
  }, [query]);

  return (
    <div>
      <Stack pb={"100px"}>
        <main>
          {filteredCustomer ? (
            filteredCustomer.length > 0 ? (
              filteredCustomer.map((e, idx) => (
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
                      alt={e.cusName}
                      src="/static/images/avatar/1.jpg"
                    />
                  </div>
                  <Stack
                    width={"500px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "600" }}>
                      Name: {e.cusName}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "600" }}>
                      Room No: {e.cusRoom}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "600", textTransform: "capitalize" }}
                    >
                      Gender: {e.cusGender}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "600", textTransform: "capitalize" }}
                    >
                      Country: {e.cusCountry}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "600" }}>
                      Payment: ₹{e.cusPayAmount}
                    </Typography>
                  </Stack>
                </Stack>
              ))
            ) : (
              <Typography variant="caption" textAlign={"center"}>
                No Customer Yet.
              </Typography>
            )
          ) : isLoading ? (
            <Loading />
          ) : null}
        </main>
      </Stack>
    </div>
  );
};

export default AllCustomer;
