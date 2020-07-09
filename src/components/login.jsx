import { connect } from "react-redux";
import React from "react";
import { changeIsFetching, gotUser, gotError } from "./../redux/actionCreators";

function Login(props) {
	const loginApi = (credentials, props) => {
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
		<>
			<input type="text" id="id" placeholder="User name" />
			<br />
			<input type="password" id="pass" placeholder="Password" />
			<br />
			<button
				onClick={() => {
					props.changeIsFetching();
					loginApi(
						document.getElementById("id").value +
							":" +
							document.getElementById("pass").value,
						props
					);
				}}
			>
				Login
			</button>
			{props.isFetching ? (
				<div>fetching</div>
			) : (
				<div>{props.cookies.session}</div>
			)}
		</>
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
})(Login);
