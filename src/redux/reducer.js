import { CHANGE_IS_FETCHING, GOT_USER } from "./actionTypes";

export default function reducer(state, action) {
	switch (action.type) {
		case CHANGE_IS_FETCHING:
			return Object.assign({}, state, { isFetching: true });
		case GOT_USER:
			return Object.assign({}, state, {
				isFetching: false,
				user: action.payload,
			});
		default:
			return state;
	}
}
