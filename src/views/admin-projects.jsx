import React from "react";
import {
	Row,
	Col,
	Typography,
	Radio,
	Menu,
	Dropdown,
	Space,
	Button,
	Table,
} from "antd";
import { DownOutlined } from "@ant-design/icons";

import moment from "moment";

const { Title } = Typography;

const AdminProject = () => {
	const columns = [
		{
			title: "Title",
			dataIndex: "Title",
		},
		{
			title: "Date Created",
			dataIndex: "DateCreated",
		},
		{
			title: "Deadline",
			dataIndex: "Deadline",
		},
		{
			title: "Leading Member",
			dataIndex: "LeadingMember",
		},
		{
			title: "Total Members",
			dataIndex: "TotalMember",
		},

		{
			title: "Status",
			dataIndex: "Status",
		},
		{
			title: "Progress",
			dataIndex: "Progress",
		},

		{
			title: "View/Edit",
			dataIndex: "ViewEdit",
			render: () => (
				<Button type="primary" shape="round">
					View/Edit
				</Button>
			),
		},
	];

	const data = [
		{
			Title: "ABC",
			DateCreated: "24/01/1020",
			Deadline: "24/01/1021",
			LeadingMember: "Mee",
			TotalMember: "10",
			Status: "Active",
			Progress: "80%",
		},
		{
			Title: "ABC",
			DateCreated: "24/01/1020",
			Deadline: "24/01/1021",
			LeadingMember: "Mee",
			TotalMember: "10",
			Status: "Active",
			Progress: "80%",
		},
		{
			Title: "ABC",
			DateCreated: "24/01/1020",
			Deadline: "24/01/1021",
			LeadingMember: "Mee",
			TotalMember: "10",
			Status: "Active",
			Progress: "80%",
		},
		{
			Title: "ABC",
			DateCreated: "24/01/1020",
			Deadline: "24/01/1021",
			LeadingMember: "Mee",
			TotalMember: "10",
			Status: "Active",
			Progress: "80%",
		},
		{
			Title: "ABC",
			DateCreated: "24/01/1020",
			Deadline: "24/01/1021",
			LeadingMember: "Mee",
			TotalMember: "10",
			Status: "Active",
			Progress: "80%",
		},
		{
			Title: "ABC",
			DateCreated: "24/01/1020",
			Deadline: "24/01/1021",
			LeadingMember: "Mee",
			TotalMember: "10",
			Status: "Active",
			Progress: "80%",
		},
		{
			Title: "ABC",
			DateCreated: "24/01/1020",
			Deadline: "24/01/1021",
			LeadingMember: "Mee",
			TotalMember: "10",
			Status: "Active",
			Progress: "80%",
		},
		{
			Title: "ABC",
			DateCreated: "24/01/1020",
			Deadline: "24/01/1021",
			LeadingMember: "Mee",
			TotalMember: "10",
			Status: "Active",
			Progress: "80%",
		},
	];

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
			<Row style={{ width: "100%" }}>
				<Col span={24} className="col-display" style={{ textAlign: "center" }}>
					<Title style={{ float: "left", color: "#878787" }} level={3}>
						Project List
					</Title>
					<Radio.Group value={1} style={{ paddingTop: 5 }}>
						<Radio value={1}>Active</Radio>
						<Radio value={2}>Completed</Radio>
						<Radio value={3}>Delayed</Radio>
						<Radio value={4}>All Projects</Radio>
					</Radio.Group>
					<div style={{ float: "right", display: "inline-block" }}>
						<Space>
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
						</Space>
					</div>
					<Table
						columns={columns}
						dataSource={data}
						size="middle"
						pagination={false}
						scroll={{ y: 380 }}
					/>
				</Col>
			</Row>
			<Row
				style={{
					width: "100%",
					textAlign: "center",
					marginTop: "10px",
				}}
				className="col-display"
			>
				<Col offset={1} span={6}>
					<Title className="admin-project-title" level={3}>
						Total Active
					</Title>
					<Title style={{ display: "inline-block", margin: 0 }} level={2}>
						300
					</Title>
				</Col>
				<Col offset={2} span={7}>
					<Title className="admin-project-title" level={3}>
						Total Completed
					</Title>
					<Title style={{ display: "inline-block", margin: 0 }} level={2}>
						200
					</Title>
				</Col>
				<Col offset={2} span={6}>
					<Title className="admin-project-title" level={3}>
						Total Delayed
					</Title>
					<Title style={{ display: "inline-block", margin: 0 }} level={2}>
						073
					</Title>
				</Col>
			</Row>
		</Row>
	);
};

export default AdminProject;
