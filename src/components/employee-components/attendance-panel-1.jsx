import React from "react";
import Clock from "react-live-clock";
import "antd/dist/antd.css";
import { Typography, Row, Col, Button } from "antd";

const { Title } = Typography;

const AttendancePanel1 = () => {
  return (
    <>
      <Row>
        <Col offset={3} span={8}>
          <label style={{ fontSize: 13 }}>Time</label>
          <Title level={2}>
            <Clock format="HH:mm" interval={60000} ticking={true} />
          </Title>
        </Col>
        <Col span={11}>
          <label style={{ color: "#878787", fontSize: 13 }}>Date</label>
          <Title style={{ color: "#878787" }} level={2}>
            <Clock format="D MMMM YYYY" interval={8.64e7} ticking={true} />
          </Title>
        </Col>
      </Row>
      <Row>
        <Col offset={3} span={8}>
          <label style={{ fontSize: 13 }}>Attendance Time</label>
          <Title level={2}>
            <Clock format="HH:mm" interval={60000} ticking={true} />
          </Title>
        </Col>
        <Col span={11}>
          <label style={{ color: "#878787", fontSize: 13 }}>Exit Time</label>
          <Title style={{ color: "#878787" }} level={2}>
            <Clock format="HH:mm" interval={60000} ticking={true} />
          </Title>
        </Col>
      </Row>
      <Row>
        <Col offset={3} span={8}>
          <Button
            style={{
              backgroundColor: "#1890ff",
              borderColor: "#1890ff",
              color: "white",
            }}
            shape="round"
            size="large"
          >
            Attendance
          </Button>
        </Col>
        <Col span={11}>
          <Button
            style={{
              backgroundColor: "#ea0c4b",
              borderColor: "#ea0c4b",
              color: "white",
            }}
            shape="round"
            size="large"
          >
            Exit
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default AttendancePanel1;
