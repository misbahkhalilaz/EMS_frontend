import React from "react";
import { Typography, Input, Button } from "antd";
import "antd/dist/antd.css";

const { Title } = Typography;

const PostBroadcast = () => {
  return (
    <>
      <Title style={{ float: "left", color: "#878787" }} level={3}>
        Broadcast
      </Title>
      <br />
      <br />
      <Input style={{ borderRadius: 20, width: "85%" }} />
      <Button type="primary" shape="round" style={{ float: "right" }}>
        Post
      </Button>
    </>
  );
};

export default PostBroadcast;
