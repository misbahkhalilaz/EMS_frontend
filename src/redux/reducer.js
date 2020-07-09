import {
	CHANGE_IS_FETCHING,
	GOT_USER,
	GOT_ERROR,
	SET_ROLE,
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
		case SET_ROLE:
			return Object.assign({}, state, {
				isFetching: false,
				error: null,
				role: action.payload,
			});
		case GOT_USER:
			return Object.assign({}, state, {
				isFetching: false,
				error: null,
				user: action.payload,
			});
		default:
			return state;
	}
}