import React from "react";

import { Layout, Menu, Dropdown } from "antd";
import { Row, Col } from "antd";
import { Button, Space, Avatar, Badge } from "antd";
import SideBar from "../components/employee/sidebar/sideBar";
import NavBar from "../components/employee/navbar/navbar";

export default function Employee(props) {
	return (
		<Row>
			<Col span={5}>
				<SideBar />
			</Col>
			<Col span={19}>
				<Row>
					<NavBar />
				</Row>
				<Row style={{ backgroundColor: "green" }}>
					<Col style={{ minHeight: "91vh" }}></Col>
				</Row>
			</Col>
		</Row>
	);
}
