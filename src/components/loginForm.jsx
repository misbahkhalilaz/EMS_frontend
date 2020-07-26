import React, { useState } from "react";
import { Form, Button, Col, Row, Input, Card } from "antd";
import { connect } from "react-redux";
import { changeIsFetching, gotUser, gotError } from "../redux/actionCreators";

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
		offset: 12,
		span: 16,
	},
};
const cardLayout = {
	bordered: true,
	hoverable: "true",
};

function LoginForm(props) {
	const [id, setId] = useState("");
	const [pass, setPass] = useState("");
	const loginApi = (credentials) => {
		const requestOptions = {
			method: "GET",
			headers: {
				role: "owner",
				Authorization: "Basic " + btoa(credentials),
				"Content-Type": "application/json",
			},
			redirect: "follow",
		};
		fetch("http://localhost:4000/", requestOptions)
			.then((response) => response.text())
			.then((res) => JSON.parse(res))
			.then((result) => {
				console.log(result.user);
				props.gotUser(result.user);
				props.setCookie("session", result.token, { path: "/" });
				// console.log(props.user);
			})
			.catch((error) => {
				props.gotError(JSON.stringify(error));
			});
	};
	return (
		<Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
			<Col style={{ width: "420px" }}>
				<Card title="Login:" {...cardLayout}>
					<Form {...layout}>
						<Form.Item
							label="UserID:"
							rules={[{ message: "Enter your UserID." }]}
						>
							<Input onChange={(e) => setId(e.target.value)} />
						</Form.Item>
						<Form.Item
							label="Password:"
							rules={[{ message: "Enter your password" }]}
						>
							<Input.Password onChange={(e) => setPass(e.target.value)} />
						</Form.Item>
						<Form.Item {...tailLayout}>
							<Button
								type="primary"
								htmlType="submit"
								onClick={() => loginApi(id + ":" + pass)}
							>
								Login
							</Button>
						</Form.Item>
					</Form>
				</Card>
			</Col>
		</Row>
	);
}

const mapStateToProps = (state, ownProps) => ({
	cookies: ownProps.cookies,
	isFetching: state.isFetching,
	user: state.user,
	setCookie: ownProps.setCookie,
	error: state.error,
	state,
});

export default connect(mapStateToProps, {
	changeIsFetching,
	gotUser,
	gotError,
})(LoginForm);
