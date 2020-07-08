import React from "react";
import { useCookies } from "react-cookie";

export default function Login(props) {
	const [cookies, setCookie, removeCookie] = useCookies(["session"]);

	if (cookies.session)
		return (
			<>
				<input type="test" id="id" placeholder="User name" />
				<br />
				<input type="password" id="pass" placeholder="Password" />
				<br />
				<button
					onClick={() => {
						console.log(cookies);
						removeCookie("session", { path: "/" });
					}}
				>
					Logout
				</button>
			</>
		);
	else
		return (
			<>
				<h1>login plz</h1>
				<button onClick={() => setCookie("session", "hi", { path: "/" })}>
					login
				</button>
			</>
		);
}
