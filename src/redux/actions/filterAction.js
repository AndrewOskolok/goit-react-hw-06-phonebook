import { EDIT_FILTER } from "../constants/constants";
import { createAction } from "@reduxjs/toolkit";

export const filterEdit = createAction(EDIT_FILTER);

// export const filterEdit = (value) => ({
//   type: EDIT_FILTER,
//   payload: value,
// });
