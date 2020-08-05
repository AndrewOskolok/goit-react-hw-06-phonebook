import { EDIT_FILTER } from "../constants/constants";

export const filterEdit = (value) => ({
  type: EDIT_FILTER,
  payload: value,
});
