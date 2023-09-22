import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function MaterialUI() {
  return (
    <React.Fragment>
      <div style={{ flex: 1 }}>
        <h1>MaterialUI</h1>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </div>
    </React.Fragment>
  );
}
