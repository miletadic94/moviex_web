import { SET_ALERT } from "../actions/alert.actions";

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALERT:
      return payload;
    default:
      return state;
  }
};
