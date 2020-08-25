import React, { useState } from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import ProjectTable from "../components/employee-components/project-detailed-table";
import TaskTable from "../components/employee-components/tasks-detailed-table";
import "../components/employee-components/main-theme.css";

const EmployeeProjectTab = () => {
  const [members, setMembers] = useState([""]);
  const [tasks, setTasks] = useState([""]);
  return (
    <>
      <Row>
        <Col span={18} style={{ padding: "20px 20px" }}>
          <Row>
            <Col span={24} className="basic-title-color col-display">
              <ProjectTable setMembers={setMembers} setTasks={setTasks} />
            </Col>
          </Row>
          <Row style={{ paddingTop: "15px" }}>
            <Col span={24} className="basic-title-color">
              <TaskTable members={members} tasks={tasks} />
            </Col>
          </Row>
        </Col>

        <Col span={6} className="col-display">
          {/* <ProjectChat /> */}
        </Col>
      </Row>
    </>
  );
};

export default EmployeeProjectTab;
