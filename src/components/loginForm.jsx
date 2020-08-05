import React, { useState } from "react";
import img from "./loginpage.png";
import { Row, Col, Typography, Input, Button, Divider } from "antd";
import { connect } from "react-redux";
import { changeIsFetching, gotUser, gotError } from "../redux/actionCreators";
import "./employee-components/main-theme.css";

const { Title } = Typography;

function LoginForm(props) {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const loginApi = (credentials, role) => {
    const requestOptions = {
      method: "GET",
      headers: {
        role: role,
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
      <Row justify="space-around" align="middle" style={{ minHeight: "100vh" }}>
        <Col span={17}>
          <img src={img} width="100%" height="100%"></img>
        </Col>
        <Col span={6} pull={1} style={{ textAlign: "center" }}>
          <Title level={3} className="basic-title-color">
            Welcome to EMS
          </Title>
          <div
            style={{
              width: 250,
              margin: "0 auto",
              padding: 20,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              borderRadius: 20,
              textAlign: "center",
            }}
          >
            <label style={{ float: "left" }}>UserID</label>
            <Input
              className="form-items"
              style={{ marginBottom: 10 }}
              onChange={(e) => setId(e.target.value)}
            />
            <label style={{ float: "left" }}>Password</label>
            <Input
              type="password"
              className="form-items"
              style={{ marginBottom: 20 }}
              onChange={(e) => setPass(e.target.value)}
            />
            <Button
              type="primary"
              style={{ borderRadius: 10 }}
              onClick={() => loginApi(id + ":" + pass, "employee")}
            >
              Signin
            </Button>
            <Divider>or</Divider>
            <Button
              type="primary"
              style={{ borderRadius: 10 }}
              onClick={() => loginApi(id + ":" + pass, "department")}
            >
              Admin Signin
            </Button>
          </div>
        </Col>
      </Row>
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
})(LoginForm);
