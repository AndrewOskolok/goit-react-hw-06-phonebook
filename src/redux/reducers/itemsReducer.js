import { ADD_USER, DELETE_USER } from "../constants/constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case DELETE_USER:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
