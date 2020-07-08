import { CHANGE_IS_FETCHING, SESSION_ADDED } from "./types";

export default function (state, action) {
	switch (action) {
		case CHANGE_IS_FETCHING:
			return Object.assign({}, state, { isFetching: true });
		case SESSION_ADDED:
			return Object.assign({}, state, {
				isFetching: false,
				session: action.payload,
			});
		default:
			return state;
	}
}
