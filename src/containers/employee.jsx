import React from "react";
import { Row, Col } from "antd";
import SideBar from "../components/employee/sidebar/sideBar";
import NavBar from "../components/employee/navbar/navbar";

export default function Employee(props) {
	return (
		<Row>
			<Col span={5} style={{ backgroundColor: "#f2f2f0" }}>
				<SideBar />
			</Col>
			<Col span={19}>
				<Row
					style={{
						maxHeight: "9vh",
						minHeight: "9vh",
						backgroundColor: "#f2f2f0",
					}}
					align="middle"
				>
					<NavBar />
				</Row>
				<Row style={{ backgroundColor: "green" }}>
					<Col style={{ minHeight: "91vh" }}></Col>
				</Row>
			</Col>
		</Row>
	);
}
