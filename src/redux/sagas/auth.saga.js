import { put, takeLatest } from "redux-saga/effects";
import {
  LOGIN,
  REGISTER,
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from "../actions/auth.actions";
import {
  login,
  register,
  forgotPassword,
  resetPassword,
} from "../../services/auth.service";
import { getUser } from "../../services/user.service";
import errorHandler from "./errorHandler";
import successHandler from "./successHandler";

import { history } from "../../store";

function* loginSaga({ payload }) {
  try {
    const { password, ...user } = yield login(payload);
    yield successHandler(
      `Login successfully! ${!user.isConfirmed ? "User is DEACTIVATED" : ""}`
    );
    yield put({
      type: GET_CURRENT_USER_SUCCESS,
      payload: user,
    });
    history.push("/");
  } catch (error) {
    yield errorHandler(error);
  }
}

function* registerSaga({ payload }) {
  try {
    yield register(payload);
    yield successHandler("User registered, please login!");
    history.push("/login");
  } catch (error) {
    yield errorHandler(error);
  }
}

function* forgotPasswordSaga({ payload }) {
  try {
    yield forgotPassword(payload);
    yield successHandler("Check your email inbox!");
  } catch (error) {
    yield errorHandler(error);
  }
}

function* resetPasswordSaga({ payload }) {
  try {
    yield resetPassword(payload);
    yield successHandler("Password Changed!");
  } catch (error) {
    yield errorHandler(error);
  }
}

function* getCurrentUserSaga({ payload }) {
  try {
    const user = yield getUser(payload);
    if (user) {
      yield put({
        type: GET_CURRENT_USER_SUCCESS,
        payload: user,
      });
    }
  } catch (error) {
    yield errorHandler(error);
  }
}

export default [
  takeLatest(LOGIN, loginSaga),
  takeLatest(REGISTER, registerSaga),
  takeLatest(GET_CURRENT_USER, getCurrentUserSaga),
  takeLatest(FORGOT_PASSWORD, forgotPasswordSaga),
  takeLatest(RESET_PASSWORD, resetPasswordSaga),
];
