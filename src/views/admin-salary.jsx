import React from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Table,
  Input,
  Menu,
  Dropdown,
  Space,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import moment from "moment";

import "../components/admin-components/node_modules/antd/dist/antd.css";

const { Title } = Typography;
const { Search } = Input;

const columns = [
  {
    title: "Empoyee ID",
    dataIndex: "ID",
  },
  {
    title: "Name",
    dataIndex: "Name",
  },
  {
    title: "Basic Salary",
    dataIndex: "BasicSalary",
  },
  {
    title: "Late Penalty",
    dataIndex: "Late",
  },
  {
    title: "Early Exit Penalty",
    dataIndex: "EarlyExit",
  },
  {
    title: "Absent Penalty",
    dataIndex: "Absent",
  },
  {
    title: "Bonus",
    dataIndex: "Bonus",
  },
  {
    title: "Total",
    dataIndex: "Total",
  },
];

const data = [
  {
    ID: "BK0012",
    Name: "Namaloom",
    BasicSalary: "50000",
    Late: "1000",
    EarlyExit: "1000",
    Absent: "1000",
    Bonus: "10000",
    Total: "570000",
  },
  {
    ID: "BK0012",
    Name: "Namaloom",
    BasicSalary: "50000",
    Late: "1000",
    EarlyExit: "1000",
    Absent: "1000",
    Bonus: "10000",
    Total: "570000",
  },
  {
    ID: "BK0012",
    Name: "Namaloom",
    BasicSalary: "50000",
    Late: "1000",
    EarlyExit: "1000",
    Absent: "1000",
    Bonus: "10000",
    Total: "570000",
  },
];

const AdminSalary = () => {
  const now = new Date().getUTCFullYear();
  const years = Array(now - (now - 20))
    .fill("")
    .map((idx) => now - idx);
  const months = moment.months();
  const currentMonth = moment(new Date()).month();

  const yearMenu = (
    <Menu>
      {years.map((year) => (
        <Menu.Item key={year}>{year}</Menu.Item>
      ))}
    </Menu>
  );

  const monthMenu = (
    <Menu>
      {months.map((month) => (
        <Menu.Item key={month}>{month}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Row style={{ padding: "30px 20px" }}>
      <Col span={24} className="col-display">
        <Title style={{ float: "left", color: "#878787" }} level={3}>
          Jobs List
        </Title>
        <div style={{ float: "right", display: "inline-block" }}>
          <Space>
            <Button type="primary" shape="round" className="form-items">
              Refresh List
            </Button>
            <Dropdown overlay={monthMenu} trigger={["click"]}>
              <a className="dropdown-archon">
                {months[currentMonth]}
                <DownOutlined className="dropdown-icon" />
              </a>
            </Dropdown>
            <Dropdown overlay={yearMenu} trigger={["click"]}>
              <a className="dropdown-archon">
                {years[0]} <DownOutlined className="dropdown-icon" />
              </a>
            </Dropdown>
            <Search
              placeholder="Search Employee"
              onSearch={(value) => console.log(value)}
              style={{ width: 200, float: "right" }}
              className="form-items"
            />
          </Space>
        </div>
        <br />
        <Table
          columns={columns}
          dataSource={data}
          size="middle"
          pagination={false}
          scroll={{ y: 450 }}
        />
      </Col>
    </Row>
  );
};

export default AdminSalary;
