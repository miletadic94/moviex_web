import { put, takeLatest } from "redux-saga/effects";
import {
  GET_USER,
  GET_USERS,
  GET_USER_SUCCESS,
  GET_USERS_SUCCESS,
  CREATE_USER,
  EDIT_USER,
} from "../actions/users.actions";
import {
  getUser,
  getUsers,
  postUser,
  patchUser,
} from "../../services/user.service";
import errorHandler from "./errorHandler";
import successHandler from "./successHandler";
import { history } from "../../store";

function* getUserSaga({ id }) {
  try {
    const user = yield getUser(id);
    yield put({
      type: GET_USER_SUCCESS,
      payload: user,
    });
  } catch (error) {
    yield errorHandler(error);
  }
}

function* getUsersSaga() {
  try {
    const users = yield getUsers();
    yield put({
      type: GET_USERS_SUCCESS,
      payload: users,
    });
  } catch (error) {
    yield errorHandler(error);
  }
}

function* createUserSaga({ payload }) {
  try {
    yield postUser(payload);
    yield successHandler("User Created");
    history.goBack();
  } catch (error) {
    yield errorHandler(error);
  }
}

function* editUserSaga({ id, payload }) {
  try {
    yield patchUser(id, payload);
    yield successHandler("User Updated");
  } catch (error) {
    yield errorHandler(error);
  }
}

export default [
  takeLatest(GET_USER, getUserSaga),
  takeLatest(GET_USERS, getUsersSaga),
  takeLatest(CREATE_USER, createUserSaga),
  takeLatest(EDIT_USER, editUserSaga),
];
