import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Box, Stack, useMediaQuery } from "@mui/system";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addEmployeeModal } from "../redux/slice";
import { useAddEmpMutation } from "../redux/service";
import { useNavigate } from "react-router-dom";
import { responseToast } from "../utils/features";

const AddEmployee = () => {
  const _700 = useMediaQuery("width: 700px");

  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [userId, setUserId] = useState("adhar-card");
  const [userIdNumber, setUserIdNumber] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [empGender, setEmpGender] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [join, setJoin] = useState("");
  const [amount, setAmount] = useState("");

  const { openAddEmployee } = useSelector((state) => state.service);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(addEmployeeModal(false));
  };

  const male = `https://avatar.iran.liara.run/public/boy?username=${firstname}`;
  const female = `https://avatar.iran.liara.run/public/girl?username=${firstname}`;

  const [addEmp] = useAddEmpMutation();

  const handleAdd = async (e) => {
    e.preventDefault();
    const employeeData = {
      id,
      userId,
      userIdNumber,
      empProfile: empGender === "male" ? male : female,
      firstname,
      lastname,
      username,
      empGender,
      role,
      address,
      join,
      amount,
    };

    const res = await addEmp(employeeData);
    responseToast(res, navigate, "/employee");
    dispatch(addEmployeeModal(false));
  };

  return (
    <div>
      <Dialog
        open={openAddEmployee}
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
          New Employee Form
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
              >
                <h1>ID:</h1>
                <input
                  type="text"
                  name="id"
                  id="id"
                  placeholder="Enter Id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  style={{
                    border: "2px solid royalblue",
                    outline: "none",
                    borderRadius: ".5rem",
                    padding: ".5rem",
                    fontSize: "1.1rem",
                  }}
                />
              </Stack>
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                width={"100%"}
                margin={".5rem 0"}
              >
                <h1>User ID:</h1>
                <select
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
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
                <h1>User Id Number:</h1>
                <input
                  type="text"
                  name="Number"
                  id="Number"
                  placeholder="Enter Id Number"
                  value={userIdNumber}
                  onChange={(e) => setUserIdNumber(e.target.value)}
                  style={{
                    border: "2px solid royalblue",
                    outline: "none",
                    borderRadius: ".5rem",
                    padding: ".5rem",
                    fontSize: "1.1rem",
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
                <h1>First Name:</h1>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Enter First Name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
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
                <h1>Last Name: </h1>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Enter Last Name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  style={{
                    border: "2px solid royalblue",
                    outline: "none",
                    borderRadius: ".5rem",
                    padding: ".5rem",
                    fontSize: "1.1rem",
                  }}
                />
              </Stack>
              <Stack
                flexDirection={"row"}
                width={"100%"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <h1>Username: </h1>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                    required
                    type="radio"
                    name="gender"
                    id="male"
                    value={"male"}
                    onChange={(e) => setEmpGender(e.target.value)}
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value={"female"}
                    onChange={(e) => setEmpGender(e.target.value)}
                  />
                  <label htmlFor="female">Female</label>
                </Stack>
              </Stack>
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                width={"100%"}
                margin={".3rem 0"}
              >
                <h1>Role</h1>
                <Stack
                  width={"100%"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                  gap={"0.5rem"}
                >
                  <input
                    type="radio"
                    name="role"
                    id="admin"
                    value={"admin"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <label htmlFor="admin">Admin</label>
                  <input
                    type="radio"
                    name="role"
                    id="emp"
                    value={"emp"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <label htmlFor="emp">Employee</label>
                </Stack>
              </Stack>
              <Stack
                flexDirection={"row"}
                width={"100%"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <h1>Address:</h1>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                <h1>Join Date/Time</h1>
                <input
                  type="datetime-local"
                  name="checkin"
                  id="checkin"
                  value={join}
                  onChange={(e) => setJoin(e.target.value)}
                />
              </Stack>
              <Stack
                flexDirection={"row"}
                width={"100%"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <h1>Salary:</h1>
                <input
                  type="number"
                  name="deposite"
                  id="deposite"
                  placeholder="Enter Salary Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
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

export default AddEmployee;
