import React from "react";
import LoginForm from "../components/loginForm";
import { useCookies } from "react-cookie";
import { connect } from "react-redux";
import { gotError } from "../redux/actionCreators";
import "../components/employee-components/main-theme.css";
import AppAdmin from "./admin";

function App(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["session"]);

  if (cookies.session)
    if (props.role === "department") return <AppAdmin />;
    else if (props.role === "employee")
      return (
        <h1 onClick={() => removeCookie("session")}>logged in employee</h1>
      );
  return <LoginForm cookies={cookies} setCookie={setCookie} />;
}

const mapStateToProps = (state, ownProps) => ({
  error: state.error,
  role: state.user.role,
});

export default connect(mapStateToProps, { gotError })(App);
