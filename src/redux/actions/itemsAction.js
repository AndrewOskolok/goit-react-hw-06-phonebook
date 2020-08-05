import { ADD_USER, DELETE_USER } from "../constants/constants";

export const userAdd = (value) => ({
  type: ADD_USER,
  payload: value,
});
export const userDelete = (id) => ({
  type: DELETE_USER,
  payload: id,
});
