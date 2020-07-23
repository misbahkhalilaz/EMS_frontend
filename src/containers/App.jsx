import React from "react";
import LoginForm from "../components/loginForm";
import { useCookies } from "react-cookie";
import { connect } from "react-redux";
import { gotError } from "./../redux/actionCreators";
import "antd/dist/antd.css";

function App(props) {
	const [cookies, setCookie, removeCookie] = useCookies(["session"]);

	return <LoginForm cookies={cookies} setCookie={setCookie} />;
}

// 	if (cookies.session) {
// 		if (["bad credentials", "undefined"].includes(cookies.session)) {
// 			removeCookie("session", { path: "/" });
// 			return <Login cookies={cookies} setCookie={setCookie} />;
// 		} else
// 			return (
// 				<>
// 					<h1>Logged In</h1>
// 					<button
// 						onClick={() => {
// 							console.log(props.state);
// 							removeCookie("session", { path: "/" });
// 						}}
// 					>
// 						Logout
// 					</button>
// 				</>
// 			);
// 	} else return <Login cookies={cookies} setCookie={setCookie} />;
// }

const mapStateToProps = (state, ownProps) => ({
	error: state.error,
	state,
});

export default connect(mapStateToProps, { gotError })(App);
