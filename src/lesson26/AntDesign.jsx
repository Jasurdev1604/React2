import React from "react";
import { Button, Space } from "antd";

export default function AntDesign() {
  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <h1>AntDesign</h1>
        <Button danger={true} type="primary">
          Primary
        </Button>
        <Button loading={true} type="default">
          loading
        </Button>
      </div>
    </React.Fragment>
  );
}
