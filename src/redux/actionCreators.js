import { GOT_USER, CHANGE_IS_FETCHING } from "./actionTypes";

export const changeIsFetching = () => ({
	type: CHANGE_IS_FETCHING,
	// payload: {},
});

export const gotUser = (user) => ({
	type: GOT_USER,
	payload: user,
});
