import React from "react";
import { Button, Space } from "antd";

export default function AntDesign() {
  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <h1>AntDesign</h1>
        <Space
          direction="vertical"
          style={{
            width: "100%",
          }}
        >
          <Button type="primary" block>
            Primary
          </Button>
          <Button block>Default</Button>
          <Button type="dashed" block>
            Dashed
          </Button>
          <Button disabled block>
            disabled
          </Button>
          <Button type="text" block>
            text
          </Button>
          <Button type="link" block>
            Link
          </Button>
        </Space>
      </div>
    </React.Fragment>
  );
}
