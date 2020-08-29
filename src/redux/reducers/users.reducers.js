import { GET_USER_SUCCESS, GET_USERS_SUCCESS } from "../actions/users.actions";

const userReducer = (state = null, { type, payload }) => {
  switch (type) {
    case GET_USER_SUCCESS:
      return payload;
    default:
      return state;
  }
};

const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_USERS_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export { userReducer, usersReducer };
