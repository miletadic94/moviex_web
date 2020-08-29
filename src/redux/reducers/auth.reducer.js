import { GET_CURRENT_USER_SUCCESS } from "../actions/auth.actions";

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CURRENT_USER_SUCCESS:
      return payload;
    default:
      return state;
  }
};
