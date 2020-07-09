import { createStore } from "redux";
import reducer from "./reducer";

const initState = {
	isFetching: false,
	error: null,
	user: {
		userid: null,
		name: null,
		role: null,
	},
};

const store = createStore(reducer, initState);

export default store;
