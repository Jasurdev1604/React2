import React from "react";
import Button from "@mui/material/Button";

export default function MaterialUI() {
  return (
    <React.Fragment>
      <div style={{ flex: 1 }}>
        <h1>MaterialUI</h1>
        <Button color="error" variant="outlined">
          Primary
        </Button>
      </div>
    </React.Fragment>
  );
}
