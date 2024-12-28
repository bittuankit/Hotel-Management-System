import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Stack>
        <Typography variant="h2">Error 404: Page not found.</Typography>
        <Stack width={"10%"} m={"10px"} bgcolor={"red"}>
          <Button onClick={() => navigate(-1)}>Back</Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default Error;
