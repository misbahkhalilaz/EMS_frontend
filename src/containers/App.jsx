import React from "react";
import Login from "./../components/login";
import { useCookies } from "react-cookie";

function App() {
	const [cookies, setCookie, removeCookie] = useCookies(["session"]);

	//verify token here and set user to store

	// if (cookies.session)
	// 	return (
	// 		<>
	// 			<h1>Logged In</h1>
	// 			<button onClick={() => removeCookie("session", { path: "/" })}>
	// 				Logout
	// 			</button>
	// 		</>
	// 	);
	// else
	return <Login cookies={cookies} setCookie={setCookie} />;
}

export default App;
