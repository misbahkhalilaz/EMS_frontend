import React, { useState, useEffect } from "react";
import {
	Row,
	Col,
	Typography,
	Checkbox,
	Button,
	Table,
	Modal,
	Input,
	Form,
	DatePicker,
	Tooltip,
	Select,
} from "antd";

const { Title } = Typography;
const { Option } = Select;

const TaskTable = (props) => {
	const [editTask, setTask] = useState(false);
	const [mem, setMem] = useState([{}]);
	const [selectedMem, setSelectedMem] = useState("");
	const [memTasks, setMemTasks] = useState([{}]);

	useEffect(() => {
		setMem(
			props.members.reverse().map((mem) => ({
				_id: mem._id,
				member: (
					<Tooltip title={mem._id + " " + mem.first_name + " " + mem.last_name}>
						{mem.first_name}
					</Tooltip>
				),
			}))
		);
		setSelectedMem(props.members[0]._id);

		console.log(selectedMem, memTasks);
	}, [props.members]);

	useEffect(() => {
		setMemTasks(
			props.tasks.filter((task) => task.member_id === props.members[0]._id)
		);
		console.log(selectedMem, memTasks);
	}, [props.tasks]);

	function deleteTask() {
		setTask(false);
	}
	function updateTask() {
		setTask(false);
	}

	const taskColumns = [
		{
			title: "Task",
			dataIndex: "task",
			key: Math.floor(Math.random() * 10000 + 1),
		},
		{
			title: "Date Created",
			dataIndex: "assign_date",
			key: Math.floor(Math.random() * 10000 + 1),
		},
		{
			title: "Deadline",
			dataIndex: "deadline",
			key: Math.floor(Math.random() * 10000 + 1),
		},
		{
			title: "Status",
			dataIndex: "status",
			key: Math.floor(Math.random() * 10000 + 1),
		},
		{
			title: "Completed",
			dataIndex: "completed_check",
			// render: (c) => <Checkbox checked={c.completed} />,
			key: Math.floor(Math.random() * 10000 + 1),
		},
		{
			title: "Edit Task",
			dataIndex: "Task",
			render: () => (
				<Button type="primary" shape="round" onClick={() => setTask(true)}>
					Edit
				</Button>
			),
			key: Math.floor(Math.random() * 10000 + 1),
		},
	];

	const memberColumn = [
		{
			title: "",
			dataIndex: "member",
		},
	];

	return (
		<>
			<Row>
				<Col span={4} className="col-display">
					<Title style={{ float: "left", color: "#878787" }} level={3}>
						Members
					</Title>
					<Table
						showHeader={false}
						columns={memberColumn}
						dataSource={mem}
						size="middle"
						pagination={false}
						scroll={{ y: 120 }}
						onRow={(r) => ({
							onClick: () => {
								setSelectedMem(r._id);
								setMemTasks(
									props.tasks.filter((task) => task.member_id === r._id)
								);
								console.log(selectedMem, memTasks);
							},
							style: {
								cursor: "pointer",
								backgroundColor: r._id === selectedMem ? "#cacccf" : "",
							},
						})}
					/>
				</Col>
				<Col span={19} push={1} className="col-display">
					<Title style={{ float: "left", color: "#878787" }} level={3}>
						Tasks
					</Title>
					<Table
						columns={taskColumns}
						dataSource={memTasks}
						size="middle"
						pagination={false}
						scroll={{ y: 140 }}
						onRow={(r) => ({ style: { cursor: "pointer" } })}
					/>
				</Col>
			</Row>
			<Modal
				style={{ borderRadius: "20px" }}
				visible={editTask}
				width="665px"
				title="Edit/Update Task"
				okText="Update"
				okButtonProps={{
					style: { backgroundColor: "#1890ff", borderRadius: 20 },
				}}
				cancelButtonProps={{ style: { display: "none" } }}
				onOk={updateTask}
				onCancel={() => setTask(false)}
			>
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
					onClick={deleteTask}
				>
					Delete Task
				</Button>
				<Form size="middle" colon={false} labelAlign="left" layout="inline">
					<Form.Item label="Task">
						<Input className="form-items" />
					</Form.Item>
					{/* <Form.Item>
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
							{props.members.map((member) => (
								<Option value={member._id}>
									{member.first_name + " " + member.last_name}
								</Option>
							))}
						</Select>
					</Form.Item> */}
					<Form.Item label="Deadline">
						<DatePicker className="form-items" format={"DD/MM/YYYY"} />
					</Form.Item>
				</Form>
			</Modal>
			{/* <h1>{memTasks[0] ? memTasks[0].member_id : "null"}</h1> */}
		</>
	);
};

export default TaskTable;
