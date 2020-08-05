import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Input,
  Table,
  Form,
  Select,
  Divider,
  Modal,
  DatePicker,
} from "antd";


const { Title } = Typography;
const { Search } = Input;

const AdminEmployee = () => {
  const [employeeView, setEmployeeView] = useState(false);
  const columns = [
    {
      title: "Employee ID",
      dataIndex: "ID",
    },
    {
      title: "Name",
      dataIndex: "Name",
    },
    {
      title: "Join Date",
      dataIndex: "JoinDate",
    },
    {
      title: "Job Title",
      dataIndex: "Job",
    },
    {
      title: "Absent",
      dataIndex: "Absent",
    },
    {
      title: "Present",
      dataIndex: "Present",
    },
    {
      title: "Leaves",
      dataIndex: "Leaves",
    },
    {
      title: "Early Exit",
      dataIndex: "EarlyExit",
    },
    {
      title: "Salary",
      dataIndex: "Salary",
    },
    {
      title: "Profile",
      dataIndex: "Profile",
      render: () => (
        <Button
          type="primary"
          shape="round"
          onClick={() => setEmployeeView(true)}
        >
          View
        </Button>
      ),
    },
    {
      title: "Mark Leave",
      dataIndex: "MarkLeave",
      render: () => (
        <Button type="primary" shape="round">
          Mark
        </Button>
      ),
    },
  ];

  const data = [
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
    {
      ID: "MK101",
      Name: "khan shahab",
      JoinDate: "24/01/1021",
      Job: "vaala",
      Absent: "always",
      Present: "sometimes",
      Leaves: "never",
      EarlyExit: "always",
      Salary: "not eligible",
    },
  ];

  return (
    <>
      <Row style={{ padding: "30px 20px" }}>
        <Row>
          <Col span={24} className="col-display">
            <Title style={{ float: "left", color: "#878787" }} level={3}>
              Employee List
            </Title>
            <Search
              placeholder="Search Employee"
              onSearch={(value) => console.log(value)}
              style={{ width: 200, float: "right" }}
              className="form-items"
            />
            <br />
            <Table
              width="100%"
              columns={columns}
              dataSource={data}
              size="middle"
              pagination={false}
              scroll={{ y: 310 }}
            />
          </Col>
        </Row>
        <Row style={{ width: "100%", textAlign: "center", paddingTop: 10 }}>
          <Col span={12} className="col-display">
            <Title style={{ float: "left", color: "#878787" }} level={3}>
              Total Employees
            </Title>
            <Title level={1}>1069</Title>
          </Col>
          <Col offset={1} span={11} className="col-display">
            <Title style={{ float: "left", color: "#878787" }} level={3}>
              Total Basic Salary
            </Title>
            <Title level={1}>Rs {"10800000000"}</Title>
          </Col>
        </Row>
      </Row>
      <Modal
        style={{ borderRadius: "20px" }}
        visible={employeeView}
        width="580px"
        okText="Update"
        okButtonProps={{
          style: { backgroundColor: "#1890ff", borderRadius: 20 },
        }}
        cancelButtonProps={{ style: { display: "none" } }}
        onOk={updateEmployee}
        onCancel={() => setEmployeeView(false)}
      >
        <Form
          wrapperCol={{ offset: 2, span: 14 }}
          size="middle"
          colon={false}
          labelAlign="left"
          layout="inline"
        >
          <Form.Item label="ID" style={{ width: "-webkit-fill-available" }}>
            <Title level={4} className="form-items">
              KB0001
            </Title>
          </Form.Item>
          <Form.Item label="First Name">
            <Input className="form-items" />
          </Form.Item>
          <Form.Item label="Joining Date" style={{ paddingBottom: 10 }}>
            <DatePicker className="form-items" format={"DD/MM/YYYY"} />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input className="form-items" />
          </Form.Item>
          <Form.Item
            label="Select Job"
            style={{ paddingBottom: 10, paddingLeft: 15 }}
          >
            <Select
              className="form-items"
              showSearch
              style={{ width: 140 }}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {/* create iterator list of option tag here */}
            </Select>
          </Form.Item>
          <Form.Item
            wrapperCol={{ offset: 0, span: 16 }}
            label="Phone Number"
            style={{ width: "-webkit-fill-available", paddingBottom: 10 }}
          >
            <Input className="form-items" />
          </Form.Item>
          <Form.Item
            wrapperCol={{ offset: 2, span: 16 }}
            label="Email"
            style={{
              width: "-webkit-fill-available",
              paddingBottom: 10,
              paddingLeft: 20,
            }}
          >
            <Input className="form-items" />
          </Form.Item>
          <Form.Item
            wrapperCol={{ offset: 2, span: 16 }}
            label="Address"
            style={{ width: "-webkit-fill-available", paddingBottom: 10 }}
          >
            <Input className="form-items" />
          </Form.Item>
          <Divider dashed />
          <Form.Item
            label="User ID"
            style={{ width: "-webkit-fill-available" }}
          >
            <Title level={4} className="form-items">
              KB0001
            </Title>
          </Form.Item>
          <Form.Item
            wrapperCol={{ offset: 1, span: 16 }}
            label="Password"
            style={{ width: "-webkit-fill-available", paddingLeft: 5 }}
          >
            <Input className="form-items" />
          </Form.Item>
        </Form>
        <Button
          type="primary"
          danger
          shape="round"
          style={{
            borderRadius: 20,
            position: "absolute",
            bottom: 10,
            left: 10,
          }}
          onClick={disableAccount}
        >
          Disable Account
        </Button>
      </Modal>
    </>
  );
};

export default AdminEmployee;

function updateEmployee() {}
function disableAccount() {}
