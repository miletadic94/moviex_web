import { put } from "redux-saga/effects";
import { SET_ALERT } from "../actions/alert.actions";

import { ALERT_TYPES } from "../../utils/constants";

function* successHandler(message) {
  yield put({
    type: SET_ALERT,
    payload: {
      type: ALERT_TYPES.SUCCESS,
      message,
    },
  });
}

export default successHandler;
