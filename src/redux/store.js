import { createStore } from "redux";
import reducer from "./reducer";

const initState = {
	isFetching: false,
	user: {
		userid: "id",
		name: "name",
		role: "role",
	},
};

const store = createStore(reducer, initState);

export default store;
