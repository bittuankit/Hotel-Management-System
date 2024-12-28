import React from "react";
import { Stack, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const Loading = () => {
  const { toggleTheme } = useSelector((state) => state.service);

  return (
    <Stack
      flexDirection={"row"}
      width={"100%"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {toggleTheme ? (
        <CircularProgress style={{ color: "#fff" }} />
      ) : (
        <CircularProgress style={{ color: "#000" }} />
      )}
    </Stack>
  );
};

export default Loading;
