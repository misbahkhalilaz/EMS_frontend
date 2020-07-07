import React from "react";
import { useCookies } from "react-cookie";

export default function Login(props) {
	const [cookies, setCookie] = useCookies(["session"]);
	setCookie("session", "hi", { path: "/" });

	return (
		<>
			<input type="test" id="id" placeholder="User name" />
			<br />
			<input type="password" id="pass" placeholder="Password" />
			<br />
			<button onClick={() => console.log(cookies)}>Login</button>
		</>
	);
}
