import React from "react";
import LoginForm from "../components/loginForm";
import { useCookies } from "react-cookie";
import { connect } from "react-redux";
import { gotError } from "../redux/actionCreators";
import AppAdmin from "./admin";

function App(props) {
	const [cookies, setCookie, removeCookie] = useCookies(["session", "role"]);

	if (cookies.session)
		if (cookies.role === "department")
			return <AppAdmin logout={removeCookie} />;
		else if (cookies.role === "employee")
			return (
				<h1 onClick={() => removeCookie("session")}>logged in employee</h1>
			);
	return <LoginForm cookies={cookies} setCookie={setCookie} />;
}

const mapStateToProps = (state, ownProps) => ({
	error: state.error,
});

export default connect(mapStateToProps, { gotError })(App);
