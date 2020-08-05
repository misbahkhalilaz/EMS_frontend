import React from "react";
import "antd/dist/antd.css";
import { Card, Avatar, Divider, Descriptions } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Meta } = Card;

function Bio(props) {
  return (
    <div
      style={{
        padding: "15px",
      }}
    >
      <Meta
        avatar={<Avatar size={60} icon={<UserOutlined />} />}
        title={props.name}
        description={props.email}
      />

      <Divider style={{ paddingLeft: 100, border: "1px solid DodgerBlue" }} />
      <Descriptions column={1} colon={false}>
        <Descriptions.Item label="Employee Code">{props.eID}</Descriptions.Item>
        <Descriptions.Item label="Mobile Number">
          {props.number}
        </Descriptions.Item>
        <Descriptions.Item label="Designation">
          {props.designation}
        </Descriptions.Item>
        <Descriptions.Item label="Department">{props.depart}</Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default Bio;
