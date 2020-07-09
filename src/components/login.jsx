import { connect } from "react-redux";
import React from "react";
import {
	changeIsFetching,
	gotUser,
	gotError,
	setRole,
} from "./../redux/actionCreators";
function Login(props) {
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
			.then((result) => {
				props.setRole("owner");
				props.setCookie("session", result, { path: "/" });
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
							document.getElementById("pass").value
					);
				}}
			>
				Login
			</button>
			{props.isFetching ? <div>fetching</div> : <div>fetched</div>}
		</>
	);
}

const mapStateToProps = (state, ownProps) => ({
	isFetching: state.isFetching,
	user: state.user,
	setCookie: ownProps.setCookie,
	error: state.error,
});

export default connect(mapStateToProps, {
	changeIsFetching,
	gotUser,
	gotError,
	setRole,
})(Login);
