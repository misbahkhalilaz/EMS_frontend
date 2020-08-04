import React from "react";
import LoginForm from "../components/loginForm";
import { useCookies } from "react-cookie";
import { connect } from "react-redux";
import { gotError } from "../redux/actionCreators";
import "antd/dist/antd.css";
import "../components/main-theme.css";

function App(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["session"]);

  if (cookies.session)
    if (props.role === "department")
      return <h1 onClick={() => removeCookie("session")}>logged in admin</h1>;
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
