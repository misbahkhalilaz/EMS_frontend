import React from "react";
import LoginForm from "../components/loginForm";
import { useCookies } from "react-cookie";
import { connect } from "react-redux";
import { gotError } from "../redux/actionCreators";
import "antd/dist/antd.css";
import "../components/main-theme.css";

function App(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["session"]);

  return <LoginForm cookies={cookies} setCookie={setCookie} />;
}

const mapStateToProps = (state, ownProps) => ({
  error: state.error,
  state,
});

export default connect(mapStateToProps, { gotError })(App);
