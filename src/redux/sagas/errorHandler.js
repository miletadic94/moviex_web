import { put } from "redux-saga/effects";
import { SET_ALERT } from "../actions/alert.actions";

import { ALERT_TYPES } from "../../utils/constants";

function* errorHandler(error) {
  if (error.message) {
    yield put({
      type: SET_ALERT,
      payload: {
        type: ALERT_TYPES.DANGER,
        message: error.message,
      },
    });
  }
}

export default errorHandler;
