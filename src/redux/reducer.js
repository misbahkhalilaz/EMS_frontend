import {
  CHANGE_IS_FETCHING,
  GOT_USER,
  GOT_ERROR,
  GOT_JOBS,
  GOT_EMPLOYEES,
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

    default:
      return state;
  }
}
