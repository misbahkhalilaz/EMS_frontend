import React from "react";
import img from "./loginpage.png";
import { Row, Col, Typography, Input, Button, Divider } from "antd";

const { Title } = Typography;

export default function LoginPage() {
  return (
    <>
      <Row justify="space-around" align="middle" style={{ height: "100%" }}>
        <Col span={17}>
          <img src={img} width="100%" height="100%"></img>
        </Col>
        <Col span={6} pull={1} style={{ textAlign: "center" }}>
          <Title level={3} className="basic-title-color">
            Welcome to EMS
          </Title>
          <div
            style={{
              width: 250,
              margin: "0 auto",
              padding: 20,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              borderRadius: 20,
              textAlign: "center",
            }}
          >
            <label style={{ float: "left" }}>UserID</label>
            <Input className="form-items" style={{ marginBottom: 10 }} />
            <label style={{ float: "left" }}>Password</label>
            <Input className="form-items" style={{ marginBottom: 20 }} />
            <Button type="primary" style={{ borderRadius: 10 }}>
              Signin
            </Button>
            <Divider>or</Divider>
            <Button type="primary" style={{ borderRadius: 10 }}>
              Admin Signin
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}
