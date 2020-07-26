import React, { useState } from "react";
import { Badge, Typography } from "antd";
// import "antd/dist/antd.css";
import "./broadcast.css";
import BroadcastMsg from "./broadcast-msg";

const { Title } = Typography;

const BroadcastPanel = (props) => {
  console.log(props.Msgs.count);
  return (
    <>
      <div className="broadcast-panel-body">
        {props.Msgs.map((msg) => (
          <BroadcastMsg
            key={msg.eventDate}
            type={msg.type}
            msg={msg.msg}
            eventDate={msg.eventDate}
          />
        ))}
      </div>
    </>
  );
};

export default BroadcastPanel;
