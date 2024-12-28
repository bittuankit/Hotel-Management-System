import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerModal, handleRoomStatus } from "../redux/slice";
import { useAddCustomerMutation } from "../redux/service";
import { hotelRooms } from "../assets/roomData";

const Customer = () => {
  const _700 = useMediaQuery("(width: 700px)");
  const _500 = useMediaQuery("(width: 500px)");
  const _300 = useMediaQuery("(width: 300px)");

  const [cusId, setCusId] = useState("adhar-card");
  const [idNumber, setIdNumber] = useState("");
  const [cusName, setCusName] = useState("");
  const [cusGender, setCusGender] = useState("");
  const [cusCountry, setCusCountry] = useState("");
  const [cusRoom, setCusRoom] = useState("");
  const [cusCheckIn, setCusCheckIn] = useState("");
  const [cusPayAmount, setCusPayAmount] = useState("");

  const [cusData] = useAddCustomerMutation();

  const { openAddCustomer } = useSelector((state) => state.service);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(addCustomerModal(false));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const data = {
      cusId,
      idNumber,
      cusName,
      cusGender,
      cusCountry,
      cusRoom,
      cusCheckIn,
      cusPayAmount,
    };

    await cusData(data);
    dispatch(handleRoomStatus(false));
  };

  return (
    <div>
      <Dialog
        open={openAddCustomer}
        onClose={handleClose}
        fullWidth
        fullScreen={_700 ? true : false}
      >
        <Box
          position={"absolute"}
          top={20}
          right={20}
          sx={{ cursor: "pointer" }}
        >
          <RxCross2 size={28} onClick={handleClose} />
        </Box>
        <DialogTitle alignContent={"center"} textTransform={"uppercase"} mb={1}>
          New Customer Form
        </DialogTitle>
        <DialogContent>
          <Stack width={"100%"}>
            <form
              method="post"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "1.2rem",
                padding: "0 1rem",
              }}
              onSubmit={handleAdd}
            >
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                width={"100%"}
                margin={"1rem 0"}
              >
                <h1>ID:</h1>
                <select
                  value={cusId}
                  onChange={(e) => setCusId(e.target.value)}
                >
                  <option value={"adhar-card"}>Adhar Card</option>
                  <option value={"pan-card"}>Pan Card</option>
                  <option value={"driving licence"}>Driving Licence</option>
                </select>
              </Stack>
              <Stack
                flexDirection={"row"}
                width={"100%"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <h1>Number:</h1>
                <input
                  type="text"
                  name="Number"
                  id="Number"
                  placeholder="Enter Id Number"
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                  style={{
                    border: "2px solid royalblue",
                    outline: "none",
                    borderRadius: ".5rem",
                    padding: ".5rem",
                    fontSize: "1.1rem",
                    margin: ".5rem 0",
                    textTransform: "uppercase",
                  }}
                />
              </Stack>
              <Stack
                flexDirection={"row"}
                width={"100%"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <h1>Name:</h1>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Full Name"
                  value={cusName}
                  onChange={(e) => setCusName(e.target.value)}
                  style={{
                    border: "2px solid royalblue",
                    outline: "none",
                    borderRadius: ".5rem",
                    padding: ".5rem",
                    fontSize: "1.1rem",
                    margin: ".5rem 0",
                  }}
                />
              </Stack>
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                width={"100%"}
                margin={"1rem 0"}
              >
                <h1>Gender:</h1>
                <Stack
                  width={"100%"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                  gap={"0.5rem"}
                >
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value={"male"}
                    onChange={(e) => setCusGender(e.target.value)}
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value={"female"}
                    onChange={(e) => setCusGender(e.target.value)}
                  />
                  <label htmlFor="female">Female</label>
                </Stack>
              </Stack>
              <Stack
                flexDirection={"row"}
                width={"100%"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <h1>Country:</h1>
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Enter Country"
                  value={cusCountry}
                  onChange={(e) => setCusCountry(e.target.value)}
                  style={{
                    border: "2px solid royalblue",
                    outline: "none",
                    borderRadius: ".5rem",
                    padding: ".5rem",
                    fontSize: "1.1rem",
                    margin: ".5rem 0",
                  }}
                />
              </Stack>
              <Stack
                flexDirection={"row"}
                width={"100%"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <h1>Allocated Room:</h1>
                <input
                  type="text"
                  name="allocated-room"
                  id="allocated-room"
                  value={cusRoom}
                  onChange={(e) => setCusRoom(e.target.value)}
                  placeholder="Enter Room Number"
                  style={{
                    border: "2px solid royalblue",
                    outline: "none",
                    borderRadius: ".5rem",
                    padding: ".5rem",
                    fontSize: "1.1rem",
                    margin: ".5rem 0",
                  }}
                />
              </Stack>
              <Stack
                flexDirection={"row"}
                width={"100%"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <h1>CheckIn:</h1>
                <input
                  type="datetime-local"
                  name="checkin"
                  id="checkin"
                  value={cusCheckIn}
                  onChange={(e) => setCusCheckIn(e.target.value)}
                />
              </Stack>
              <Stack
                flexDirection={"row"}
                width={"100%"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <h1>Deposite:</h1>
                <input
                  type="number"
                  name="deposite"
                  id="deposite"
                  placeholder="Enter Amount"
                  value={cusPayAmount}
                  onChange={(e) => setCusPayAmount(e.target.value)}
                  style={{
                    border: "2px solid royalblue",
                    outline: "none",
                    borderRadius: ".5rem",
                    padding: ".5rem",
                    fontSize: "1.1rem",
                    margin: ".5rem 0",
                  }}
                />
              </Stack>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ padding: "0.5rem 1rem", margin: "1rem 0" }}
              >
                Add
              </Button>
            </form>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Customer;
