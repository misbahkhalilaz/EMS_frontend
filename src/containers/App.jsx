import React from "react";
import Login from "./../components/login";
import { useCookies } from "react-cookie";
import { connect } from "react-redux";
import { gotError } from "./../redux/actionCreators";

function App(props) {
	const [cookies, setCookie, removeCookie] = useCookies(["session"]);

	if (cookies.session) {
		if (["bad credentials"].includes(cookies.session)) {
			removeCookie("session", { path: "/" });
			return <Login cookies={cookies} setCookie={setCookie} />;
		} else
			return (
				<>
					<h1>Logged In</h1>
					<button
						onClick={() => {
							console.log(props.state);
							removeCookie("session", { path: "/" });
						}}
					>
						Logout
					</button>
				</>
			);
	} else return <Login cookies={cookies} setCookie={setCookie} />;
}

const mapStateToProps = (state, ownProps) => ({
	error: state.error,
	state,
});

export default connect(mapStateToProps, { gotError })(App);
