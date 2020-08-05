import {
	GOT_USER,
	CHANGE_IS_FETCHING,
	GOT_ERROR,
	GOT_JOBS,
} from "./actionTypes";

export const changeIsFetching = () => ({
	type: CHANGE_IS_FETCHING,
});

export const gotUser = (user) => ({
	type: GOT_USER,
	payload: user,
});

export const gotError = (err) => ({
	type: GOT_ERROR,
	payload: err,
});

export const gotJobs = (jobs) => ({
	type: GOT_JOBS,
	payload: jobs,
});
