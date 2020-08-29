export const LOGOUT = "@AUTH/LOGOUT";
export const logoutAction = (payload) => ({
  type: LOGOUT,
  payload,
});

export const LOGIN = "@AUTH/LOGIN";
export const LOGIN_SUCCESS = "@AUTH/LOGIN_SUCCESS";
export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export const REGISTER = "@AUTH/REGISTER";
export const REGISTER_SUCCESS = "@AUTH/REGISTER_SUCCESS";
export const registerAction = (payload) => ({
  type: REGISTER,
  payload,
});

export const FORGOT_PASSWORD = "@AUTH/FORGOT_PASSWORD";
export const forgotPasswordAction = (payload) => ({
  type: FORGOT_PASSWORD,
  payload,
});

export const RESET_PASSWORD = "@AUTH/RESET_PASSWORD";
export const resetPasswordAction = (payload) => ({
  type: RESET_PASSWORD,
  payload,
});

export const GET_CURRENT_USER = "@AUTH/GET_CURRENT_USER";
export const GET_CURRENT_USER_SUCCESS = "@AUTH/GET_CURRENT_USER_SUCCESS";
export const getCurrentUserAction = (payload) => ({
  type: GET_CURRENT_USER,
  payload,
});
