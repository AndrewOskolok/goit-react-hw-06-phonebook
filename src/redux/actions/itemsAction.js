import { ADD_USER, DELETE_USER } from "../constants/constants";
import { createAction } from "@reduxjs/toolkit";

export const userAdd = createAction(ADD_USER);
export const userDelete = createAction(DELETE_USER);

// export const userAdd = (value) => ({
//   type: ADD_USER,
//   payload: value,
// });
// export const userDelete = (id) => ({
//   type: DELETE_USER,
//   payload: id,
// });
