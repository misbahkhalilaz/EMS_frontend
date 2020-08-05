import React, { useState } from "react";
import "antd/dist/antd.css";
import { Typography, Button, Input, Modal, Form, Space } from "antd";
import { connect } from "react-redux";

import { MinusCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

const TotalJobs = (props) => {
	const [newJob, setnewJob] = useState(false);

	return (
		<>
			<Title style={{ float: "left", color: "#878787" }} level={3}>
				Total Jobs
			</Title>
			<Title level={1}>{props.jobsCount}</Title>
			<br />
			<Button
				type="primary"
				shape="round"
				size="large"
				onClick={() => setnewJob(true)}
			>
				Add New Job
			</Button>
			<Modal
				style={{ borderRadius: "20px" }}
				visible={newJob}
				width="580px"
				title="New Job"
				okText="Add Job"
				okButtonProps={{
					style: { backgroundColor: "#1890ff", borderRadius: 20 },
				}}
				cancelButtonProps={{ style: { display: "none" } }}
				onOk={addNewJob}
				onCancel={() => setnewJob(false)}
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
		</>
	);
};

const mapStateToProps = (state, ownProps) => ({ jobsCount: state.jobs.length });

export default connect(mapStateToProps)(TotalJobs);

function addNewJob() {}
