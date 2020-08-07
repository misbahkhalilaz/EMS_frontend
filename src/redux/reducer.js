import {
	CHANGE_IS_FETCHING,
	GOT_USER,
	GOT_ERROR,
	GOT_JOBS,
	GOT_EMPLOYEES,
	GOT_PROJECTS,
	GOT_DAILY_ATD,
	GOT_MONTHLY_ATD,
} from "./actionTypes";

export default function reducer(state, action) {
	switch (action.type) {
		case CHANGE_IS_FETCHING:
			return Object.assign({}, state, { isFetching: true, error: null });
		case GOT_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				error: action.payload,
			});
		case GOT_USER:
			return Object.assign({}, state, {
				isFetching: false,
				error: null,
				user: action.payload,
			});
		case GOT_JOBS:
			return Object.assign({}, state, { jobs: action.payload });

		case GOT_EMPLOYEES:
			return Object.assign({}, state, { employees: action.payload });

		case GOT_PROJECTS:
			return Object.assign({}, state, { projects: action.payload });

		case GOT_DAILY_ATD:
			return Object.assign({}, state, { dailyAtd: action.payload });

		case GOT_MONTHLY_ATD:
			return Object.assign({}, state, { monthlyAtd: action.payload });

		default:
			return state;
	}
}
