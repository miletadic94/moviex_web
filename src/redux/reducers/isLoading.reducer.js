import { SET_IS_LOADING } from "../actions/isLoading.action";

export default (state = false, { type, payload }) => {
  switch (type) {
    case SET_IS_LOADING:
      return payload;
    default:
      return state;
  }
};
