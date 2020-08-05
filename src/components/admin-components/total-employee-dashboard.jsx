import React, { useState } from "react";
import "antd/dist/antd.css";
import {
  Typography,
  Button,
  Input,
  Modal,
  Form,
  Select,
  Divider,
  Option,
  DatePicker,
} from "antd";

const { Title } = Typography;

const TotalEmployee = () => {
  const [newEmployee, setnewEmployee] = useState(false);
  return (
    <>
      <Title style={{ float: "left", color: "#878787" }} level={3}>
        Total Employees
      </Title>
      <Title level={1}>1069</Title>
      <br />
      <Button
        type="primary"
        shape="round"
        size="large"
        onClick={() => setnewEmployee(true)}
      >
        Add New Employee
      </Button>

      <Modal
        style={{ borderRadius: "20px" }}
        visible={newEmployee}
        width="580px"
        title="New Employee"
        okText="Add Employee"
        okButtonProps={{
          style: { backgroundColor: "#1890ff", borderRadius: 20 },
        }}
        cancelButtonProps={{ style: { display: "none" } }}
        onOk={addNewEmployee}
        onCancel={() => setnewEmployee(false)}
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
      </Modal>
    </>
  );
};

function addNewEmployee() {}

export default TotalEmployee;
