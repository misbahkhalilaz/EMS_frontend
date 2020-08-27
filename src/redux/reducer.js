import {
  CHANGE_IS_FETCHING,
  GOT_USER,
  GOT_ERROR,
  GOT_JOBS,
  GOT_EMPLOYEES,
  GOT_PROJECTS,
  GOT_DAILY_ATD,
  GOT_MONTHLY_ATD,
  GOT_CURRENT_SALARIES,
  GOT_BIO,
  GOT_JOB,
  GOT_BROADCASTS,
  CLEAR_STORE,
} from "./actionTypes";
import React from "react";
import { Checkbox } from "antd";
import { initState } from "./store";

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
      return Object.assign({}, state, {
        projects: action.payload.map((proj) => ({
          ...proj,
          status: proj.completed
            ? "Completed"
            : proj.deadline >
              parseInt(new Date(Date.now()).getTime() / 1000 + 5 * 3600)
            ? "Active"
            : "Delayed",
          tasks: proj.tasks.map((task) => ({
            ...task,
            status: task.completed
              ? "Completed"
              : task.deadline >
                parseInt(new Date(Date.now()).getTime() / 1000 + 5 * 3600)
              ? "Active"
              : "Delayed",
            completed_check: <Checkbox checked={task.completed} />,
          })),
        })),
      });

    case GOT_DAILY_ATD:
      return Object.assign({}, state, { dailyAtd: action.payload });

    case GOT_MONTHLY_ATD:
      return Object.assign({}, state, { monthlyAtd: action.payload });

    case GOT_CURRENT_SALARIES:
      return Object.assign({}, state, { currentSalary: action.payload });

    case GOT_BIO:
      return Object.assign({}, state, { bio: action.payload });

    case GOT_JOB:
      return Object.assign({}, state, { job: action.payload });

    case GOT_BROADCASTS:
      return Object.assign({}, state, { broadcasts: action.payload.reverse() });

    case CLEAR_STORE:
      return initState;

    default:
      return state;
  }
}
