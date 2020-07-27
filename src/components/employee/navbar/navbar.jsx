import React, { useState } from "react";
import { Col, Row, Button, Badge, Space, Dropdown, Menu } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  ProjectOutlined,
  PayCircleOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd item
    </Menu.Item>
  </Menu>
);

export default function NavBar(props) {
  let [current, setCurrent] = useState("dashboard");
  console.log(current);

  return (
    <>
      <Col offset={1} span={15}>
        <Menu
          style={{ backgroundColor: "#f2f2f0" }}
          selectedKeys={current}
          mode="horizontal"
        >
          <Menu.Item
            key="dashboard"
            icon={<DashboardOutlined style={{ fontSize: 24 }} />}
            onClick={(e) => setCurrent(e.key)}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="attendance_&_salary"
            icon={<PayCircleOutlined style={{ fontSize: 24 }} />}
            onClick={(e) => setCurrent(e.key)}
          >
            Attendance and Salary
          </Menu.Item>
          <Menu.Item
            key="projects"
            icon={<ProjectOutlined style={{ fontSize: 24 }} />}
            onClick={(e) => setCurrent(e.key)}
          >
            Projects
          </Menu.Item>
          <Menu.Item
            key="contact_admin"
            icon={<MessageOutlined style={{ fontSize: 24 }} />}
            onClick={(e) => setCurrent(e.key)}
          >
            Contact Admins
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={7}>
        <Row justify="end">
          <Dropdown.Button
            overlay={menu}
            placement="bottomCenter"
            icon={<UserOutlined />}
          >
            Dropdown
          </Dropdown.Button>
        </Row>
      </Col>
    </>
  );
}
