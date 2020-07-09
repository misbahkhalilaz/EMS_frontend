import { connect } from "react-redux";
import React from "react";
import {
	changeIsFetching,
	gotUser,
	gotError,
	setRole,
} from "./../redux/actionCreators";
function Login(props) {
	// var graphql = JSON.stringify({
	// 	// query: "query{ readDepartments{_id,admins {userid}}}",
	// 	// variables: {},
	// });
	var requestOptions = {
		method: "GET",
		headers: {
			role: "owner",
			Authorization: "Basic YWRtaW46YWRtaW4=",
			"Content-Type": "application/json",
		},
		// body: graphql,
		redirect: "follow",
	};

	const loginApi = () =>
		fetch("http://localhost:4000/", requestOptions)
			.then((response) => response.text())
			.then((result) => {
				props.setRole("owner");
				props.setCookie("session", result, { path: "/" });
			})
			.catch((error) => {
				props.gotError(JSON.stringify(error));
			});
	return (
		<>
			<input type="test" id="id" placeholder="User name" />
			<br />
			<input type="password" id="pass" placeholder="Password" />
			<br />
			<button
				onClick={() => {
					// props.setCookie("session", "hi", { path: "/" });
					props.changeIsFetching();
					// console.log(props.isFetching);
					loginApi();
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
