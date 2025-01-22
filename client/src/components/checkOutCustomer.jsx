import React, { useMemo } from "react";
import { Stack, Avatar, Typography, Button } from "@mui/material";
import { MdDelete } from "react-icons/md";
import {
  useActiveCustomerQuery,
  useAllCustomerQuery,
  useUpdateCustomerMutation,
} from "../redux/service";
import toast from "react-hot-toast";

const CheckOutCustomer = ({ query }) => {
  const [
    updateCustomer,
    { isSuccess: updateCustomerIsSuccess, data: updateCustomerData },
  ] = useUpdateCustomerMutation();

  const { data, isSuccess } = useActiveCustomerQuery();

  const filteredCustomer = useMemo(() => {
    return data?.activeCustomers.filter(
      (customer) =>
        customer.cusName.toLowerCase().includes(query) ||
        customer.cusEmail.toLowerCase().includes(query) ||
        customer.cusRoom.includes(query)
    );
  }, [query, isSuccess]);

  const handleDelete = async (customerId) => {
    await updateCustomer({ customerId });
    if (updateCustomerIsSuccess) {
      toast.success(updateCustomerData.message);
    }
  };

  return (
    <div>
      <Stack>
        <main
          style={{
            margin: "0 auto",
            maxHeight: "100vh",
            width: "90%",
            overflowY: "auto",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
          }}
        >
          {filteredCustomer ? (
            filteredCustomer?.map((e, idx) => (
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
                  onClick={() => handleDelete(e._id)}
                >
                  Delete
                </Button>
              </Stack>
            ))
          ) : (
            <Stack my={"1rem"} fontSize={"1.5rem"}>
              <h1 style={{ textAlign: "center" }}>No Checkout Available.</h1>
            </Stack>
          )}
        </main>
      </Stack>
    </div>
  );
};

export default CheckOutCustomer;
