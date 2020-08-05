import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Table,
  Modal,
  Form,
  Input,
  Space,
} from "antd";
import "antd/dist/antd.css";
import { MinusCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

const AdminJobs = () => {
  const columns = [
    {
      title: "Job ID",
      dataIndex: "ID",
    },
    {
      title: "Title",
      dataIndex: "Title",
    },
    {
      title: "Job Hours",
      dataIndex: "Hours",
    },
    {
      title: "Basic Salary",
      dataIndex: "BasicSalary",
    },
    {
      title: "No. of Bonuses",
      dataIndex: "NoBonus",
    },
    {
      title: "Total Employees",
      dataIndex: "TotalEmployee",
    },
    {
      title: "View/Edit",
      dataIndex: "View/Edit",
      render: () => (
        <Button type="primary" shape="round" onClick={() => setJobView(true)}>
          View/Edit
        </Button>
      ),
    },
  ];

  const data = [
    {
      ID: "UX0001",
      Title: "UX",
      Hours: "09:00-06:00",
      BasicSalary: "500000",
      NoBonus: "12",
      TotalEmployee: "50",
    },
    {
      ID: "UX0001",
      Title: "UX",
      Hours: "09:00-06:00",
      BasicSalary: "500000",
      NoBonus: "12",
      TotalEmployee: "50",
    },
    {
      ID: "UX0001",
      Title: "UX",
      Hours: "09:00-06:00",
      BasicSalary: "500000",
      NoBonus: "12",
      TotalEmployee: "50",
    },
  ];

  const [jobView, setJobView] = useState(false);

  return (
    <Row style={{ padding: "30px 20px" }}>
      <Col span={24} className="col-display">
        <Title style={{ float: "left", color: "#878787" }} level={3}>
          Jobs List
        </Title>
        <Table
          columns={columns}
          dataSource={data}
          size="middle"
          pagination={false}
          scroll={{ y: 450 }}
        />
      </Col>
      <Modal
        style={{ borderRadius: "20px" }}
        visible={jobView}
        width="580px"
        title="New Job"
        okText="Add Job"
        okButtonProps={{
          style: { backgroundColor: "#1890ff", borderRadius: 20 },
        }}
        cancelButtonProps={{ style: { display: "none" } }}
        onOk={updateJob}
        onCancel={() => setJobView(false)}
      >
        <Form
          wrapperCol={{ offset: 6, span: 12 }}
          size="middle"
          colon={false}
          labelAlign="left"
          layout="inline"
        >
          <Form.Item label="ID" style={{ width: "-webkit-fill-available" }}>
            <Title level={4} className="form-items">
              UX0001
            </Title>
          </Form.Item>
          <Form.Item label="Title">
            <Input className="form-items" />
          </Form.Item>
          <Form.Item label="Start Time" style={{ paddingBottom: 10 }}>
            <Input className="form-items" />
          </Form.Item>
          <Form.Item label="Pay" style={{ paddingLeft: 5 }}>
            <Input className="form-items" />
          </Form.Item>
          <Form.Item
            label="End Time"
            style={{ paddingBottom: 10, paddingLeft: 5 }}
          >
            <Input className="form-items" />
          </Form.Item>
          <Form.Item
            wrapperCol={{ offset: 1, span: 16 }}
            label="Late Charges"
            style={{ width: "-webkit-fill-available", paddingBottom: 10 }}
          >
            <Input className="form-items" />
          </Form.Item>
          <Form.Item
            wrapperCol={{ span: 16 }}
            label="Absent Charges"
            style={{
              width: "-webkit-fill-available",
              paddingBottom: 10,
              paddingLeft: 10,
            }}
          >
            <Input className="form-items" />
          </Form.Item>
          <Form.Item
            wrapperCol={{ offset: 0, span: 16 }}
            label="Early Exit Charges"
            style={{ width: "-webkit-fill-available", paddingBottom: 10 }}
          >
            <Input className="form-items" />
          </Form.Item>
          <Title level={4} className="form-items" style={{ color: "#878787" }}>
            Fixed Allowances
          </Title>
          <Form.List name="users">
            {(fields, { add, remove }) => {
              return (
                <div>
                  {fields.map((field) => (
                    <Space
                      key={field.key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="start"
                    >
                      <Form.Item
                        label="Title"
                        {...field}
                        name={[field.name, "title"]}
                        fieldKey={[field.fieldKey, "title"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing allowance title",
                          },
                        ]}
                      >
                        <Input className="form-items" />
                      </Form.Item>
                      <Form.Item
                        label="Month"
                        {...field}
                        name={[field.name, "month"]}
                        fieldKey={[field.fieldKey, "month"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing allowance month",
                          },
                        ]}
                      >
                        <Input className="form-items" />
                      </Form.Item>
                      <Form.Item
                        label="Amount"
                        {...field}
                        name={[field.name, "amount"]}
                        fieldKey={[field.fieldKey, "amount"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing allowance amount",
                          },
                        ]}
                      >
                        <Input className="form-items" />
                      </Form.Item>
                      <MinusCircleOutlined
                        style={{
                          fontSize: 18,
                          color: "#ff0000",
                          paddingTop: 5,
                        }}
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    </Space>
                  ))}
                  <Button
                    shape="round"
                    style={{
                      backgroundColor: "#00ff00",
                      borderRadius: 20,
                      position: "absolute",
                      bottom: 10,
                      left: 10,
                    }}
                    onClick={() => {
                      add();
                    }}
                  >
                    Add Allowance
                  </Button>
                </div>
              );
            }}
          </Form.List>
        </Form>
      </Modal>
    </Row>
  );
};

export default AdminJobs;
function updateJob() {}
