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

function randomNum() {
	return (
		Math.floor(Math.random() * 10).toString() +
		Math.floor(Math.random() * 10).toString() +
		Math.floor(Math.random() * 10).toString() +
		Math.floor(Math.random() * 10).toString() +
		Math.floor(Math.random() * 10).toString() +
		Math.floor(Math.random() * 10).toString() +
		Math.floor(Math.random() * 10).toString() +
		Math.floor(Math.random() * 10).toString()
	);
}

const TotalEmployee = () => {
	const [newEmployee, setnewEmployee] = useState(false);
	const [empid, setEmpid] = useState(randomNum());

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
				onOk={() => {
					console.log("task performed");
					setnewEmployee(false);
					setEmpid(randomNum());
				}}
				onCancel={() => {
					setnewEmployee(false);
					setEmpid(randomNum());
				}}
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
							{empid}
						</Title>
					</Form.Item>
					<Form.Item label="First Name">
						<Input
							className="form-items"
							onChange={(e) => {
								if (e.target.value[0])
									setEmpid(e.target.value[0] + empid.slice(1, 7));
							}}
						/>
					</Form.Item>
					<Form.Item label="Joining Date" style={{ paddingBottom: 10 }}>
						<DatePicker className="form-items" format={"DD/MM/YYYY"} />
					</Form.Item>
					<Form.Item label="Last Name">
						<Input
							className="form-items"
							onChange={(e) => {
								if (e.target.value[0])
									setEmpid(empid[0] + e.target.value[0] + empid.slice(2, 7));
							}}
						/>
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
							{empid}
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

export default TotalEmployee;
