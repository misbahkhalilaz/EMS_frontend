import React from "react";
import { Typography, Input, DatePicker, Button } from "antd";
import "antd/dist/antd.css";

const { Title } = Typography;

const PostEvent = () => {
  return (
    <>
      <Title style={{ float: "left", color: "#878787" }} level={3}>
        Event
      </Title>
      <br />
      <br />
      <Input style={{ borderRadius: 20, width: "65%" }} />
      <DatePicker style={{ borderRadius: 20, width: "22%" }} />
      <Button type="primary" shape="round" style={{ float: "right" }}>
        Post
      </Button>
    </>
  );
};

export default PostEvent;
