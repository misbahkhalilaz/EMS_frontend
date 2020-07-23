import React from "react";
import { Form, Button, Col, Row, Input, Card } from "antd";

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};
const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16,
	},
};
const cardLayout = {
	bordered: true,
	hoverable: "true",
};

export default function LoginForm(props) {
	return (
		<Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
			<Col>
				<Card title="Login:" {...cardLayout}>
					<Form {...layout}>
						<Form.Item
							label="UserID:"
							rules={[{ message: "Enter your UserID." }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="Password:"
							rules={[{ message: "Enter your password" }]}
						>
							<Input.Password />
						</Form.Item>
						<Form.Item {...tailLayout}>
							<Button type="primary" htmlType="submit">
								Login
							</Button>
						</Form.Item>
					</Form>
				</Card>
			</Col>
		</Row>
	);
}
