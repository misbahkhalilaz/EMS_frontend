import { connect } from "react-redux";
import React from "react";
import { changeIsFetching, gotUser } from "./../redux/actionCreators";
function Login(props) {
	return (
		<>
			<input type="test" id="id" placeholder="User name" />
			<br />
			<input type="password" id="pass" placeholder="Password" />
			<br />
			<button
				onClick={() => {
					props.setCookie("session", "hi", { path: "/" });
					props.changeIsFetching();
					console.log(props.isFetching);
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
});

export default connect(mapStateToProps, { changeIsFetching, gotUser })(Login);
