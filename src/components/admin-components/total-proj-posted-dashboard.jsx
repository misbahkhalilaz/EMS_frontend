import React, { useState } from "react";
import "antd/dist/antd.css";
import {
  Typography,
  Button,
  Input,
  Modal,
  Form,
  Space,
  DatePicker,
  Select,
} from "antd";

import { MinusCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ProjectPosted = () => {
  const [newProject, setnewProject] = useState(false);
  return (
    <>
      <Title style={{ float: "left", color: "#878787" }} level={3}>
        Total Projects Posted
      </Title>
      <Title level={1}>573</Title>
      <br />
      <Button
        type="primary"
        shape="round"
        size="large"
        onClick={() => setnewProject(true)}
      >
        Create New Project
      </Button>
      <Modal
        style={{ borderRadius: "20px" }}
        visible={newProject}
        width="580px"
        title="New Project"
        okText="Post Project"
        okButtonProps={{
          style: { backgroundColor: "#1890ff", borderRadius: 20 },
        }}
        cancelButtonProps={{ style: { display: "none" } }}
        onOk={addNewProject}
        onCancel={() => setnewProject(false)}
      >
        <Form size="middle" colon={false} labelAlign="left" layout="inline">
          <Form.Item label="ID" style={{ width: "-webkit-fill-available" }}>
            <Title level={4} className="form-items">
              UX0001
            </Title>
          </Form.Item>
          <Form.Item label="Title">
            <Input className="form-items" />
          </Form.Item>
          <Form.Item label="Date" style={{ paddingBottom: 10 }}>
            <DatePicker className="form-items" format={"DD/MM/YYYY"} />
          </Form.Item>
          <Form.Item label="Leading Member" style={{ paddingBottom: 10 }}>
            <Select
              className="form-items"
              showSearch
              style={{ width: 150 }}
              placeholder="Select a member"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {/*ADD OPTION HERE */}
            </Select>
          </Form.Item>
          <Form.Item label="Deadline">
            <DatePicker className="form-items" format={"DD/MM/YYYY"} />
          </Form.Item>
          <Title
            level={4}
            className="form-items"
            style={{ color: "#878787", width: "-webkit-fill-available" }}
          >
            Other members
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
                        label="Name/ID"
                        {...field}
                        name={[field.name, "name"]}
                        fieldKey={[field.fieldKey, "name"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing employee entry",
                          },
                        ]}
                      >
                        <Select
                          className="form-items"
                          showSearch
                          style={{ width: 150 }}
                          placeholder="Select a member"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {/*ADD OPTION HERE */}
                        </Select>
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
                    Add Member
                  </Button>
                </div>
              );
            }}
          </Form.List>
        </Form>
      </Modal>
    </>
  );
};

export default ProjectPosted;

function addNewProject() {}
