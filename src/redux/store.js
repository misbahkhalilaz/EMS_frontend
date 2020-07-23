import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./reducer";

const logger = createLogger();

const initState = {
	isFetching: false,
	error: null,
	user: {
		userid: null,
		name: null,
		role: null,
	},
};

const store = createStore(reducer, initState, applyMiddleware(logger));

export default store;
