// import { ADD_USER, DELETE_USER } from "../constants/constants";

// const initialState = [];

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_USER:
//       return [...state, action.payload][...state, action.payload];
//     case DELETE_USER:
//       return state.filter((item) => item.id !== action.payload);
//     default:
//       return state;
//   }
// };

import { createReducer } from "@reduxjs/toolkit";
import { userAdd, userDelete } from "../actions/itemsAction";

export default createReducer([], {
  [userAdd]: (state, action) => [...state, action.payload],
  [userDelete]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});
