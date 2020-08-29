import { put, takeLatest } from "redux-saga/effects";
import {
  GET_ACTOR,
  GET_ACTORS,
  GET_ACTOR_SUCCESS,
  GET_ACTORS_SUCCESS,
  CREATE_ACTOR,
  EDIT_ACTOR,
} from "../actions/actors.actions";
import {
  getActor,
  getActors,
  postActor,
  putActor,
} from "../../services/actor.service";
import errorHandler from "./errorHandler";
import successHandler from "./successHandler";
import { history } from "../../store";

function* getActorSaga({ id }) {
  try {
    const actor = yield getActor(id);
    yield put({
      type: GET_ACTOR_SUCCESS,
      payload: actor,
    });
  } catch (error) {
    yield errorHandler(error);
  }
}

function* getActorsSaga() {
  try {
    const actors = yield getActors();
    yield put({
      type: GET_ACTORS_SUCCESS,
      payload: actors,
    });
  } catch (error) {
    yield errorHandler(error);
  }
}

function* createActorSaga({ payload }) {
  try {
    yield postActor(payload);
    yield successHandler("Actor Created");
    history.goBack();
  } catch (error) {
    yield errorHandler(error);
  }
}

function* editActorSaga({ id, payload }) {
  try {
    yield putActor(id, payload);
    yield successHandler("Actor Updated");
    history.goBack();
  } catch (error) {
    yield errorHandler(error);
  }
}

export default [
  takeLatest(GET_ACTOR, getActorSaga),
  takeLatest(GET_ACTORS, getActorsSaga),
  takeLatest(CREATE_ACTOR, createActorSaga),
  takeLatest(EDIT_ACTOR, editActorSaga),
];
