import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCheckEmpMutation } from "../redux/service";
import { handleIsEmp } from "../redux/slice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [empLogin, { isSuccess, data }] = useCheckEmpMutation();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
      role,
    };

    setUsername("");
    setPassword("");
    setRole("");

    await empLogin(data);
    dispatch(handleIsEmp(true));
  };

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
  }, [isSuccess]);

  return (
    <>
      <Stack
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        minHeight={"100vh"}
      >
        <form method="post" action="/dashboard" onSubmit={handleSubmit}>
          <Stack
            width={"450px"}
            border={"2px solid #1976d2"}
            p={2}
            borderRadius={1.5}
          >
            <h1
              style={{
                alignSelf: "center",
                fontSize: "2rem",
                marginBottom: "1rem",
                color: "#1976d2",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              Login
            </h1>
            <label htmlFor="username">Username</label>
            <TextField
              sx={{ margin: "0.5rem 0" }}
              name="username"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <TextField
              sx={{ margin: "0.5rem 0" }}
              name="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <label htmlFor="role">Select Your Role</label>
            <FormControl sx={{ my: 1, width: "30%" }}>
              <InputLabel id="role">Role</InputLabel>
              <Select
                labelId="role"
                id="demo-simple-select-helper"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                label="Role"
              >
                <MenuItem value={"admin"}>Admin</MenuItem>
                <MenuItem value={"emp"}>Employee</MenuItem>
              </Select>
            </FormControl>
            <Button
              sx={{ padding: "1rem 0", margin: ".5rem 0" }}
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Stack>
    </>
  );
};

export default Login;