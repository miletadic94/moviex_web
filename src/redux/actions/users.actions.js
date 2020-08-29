export const GET_USER = "@USR/GET_USER";
export const GET_USER_SUCCESS = "@USR/GET_USER_SUCCESS";
export const getUserAction = (id) => ({
  type: GET_USER,
  id,
});

export const GET_USERS = "@USR/GET_USERS";
export const GET_USERS_SUCCESS = "@USR/GET_USERS_SUCCESS";
export const getUsersAction = () => ({
  type: GET_USERS,
});

export const CREATE_USER = "@USR/CREATE_USER";
export const CREATE_USER_SUCCESS = "@USR/CREATE_USER_SUCCESS";
export const createUserAction = (payload) => ({
  type: CREATE_USER,
  payload,
});

export const EDIT_USER = "@USR/EDIT_USER";
export const EDIT_USER_SUCCESS = "@USR/EDIT_USER_SUCCESS";
export const editUserAction = (id, payload) => ({
  type: EDIT_USER,
  id,
  payload,
});
