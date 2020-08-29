import { put, takeLatest } from "redux-saga/effects";
import {
  GET_GENRE,
  GET_GENRES,
  GET_GENRE_SUCCESS,
  GET_GENRES_SUCCESS,
  CREATE_GENRE,
  EDIT_GENRE,
} from "../actions/genres.actions";
import {
  getGenre,
  getGenres,
  postGenre,
  putGenre,
} from "../../services/genre.service";
import errorHandler from "./errorHandler";
import successHandler from "./successHandler";
import { history } from "../../store";

function* getGenreSaga({ id }) {
  try {
    const genre = yield getGenre(id);
    yield put({
      type: GET_GENRE_SUCCESS,
      payload: genre,
    });
  } catch (error) {
    yield errorHandler(error);
  }
}

function* getGenresSaga() {
  try {
    const genres = yield getGenres();
    yield put({
      type: GET_GENRES_SUCCESS,
      payload: genres,
    });
  } catch (error) {
    yield errorHandler(error);
  }
}

function* createGenreSaga({ payload }) {
  try {
    yield postGenre(payload);
    yield successHandler("Genre Created");
    history.goBack();
  } catch (error) {
    yield errorHandler(error);
  }
}

function* editGenreSaga({ id, payload }) {
  try {
    yield putGenre(id, payload);
    yield successHandler("Genre Updated");
    history.goBack();
  } catch (error) {
    yield errorHandler(error);
  }
}

export default [
  takeLatest(GET_GENRE, getGenreSaga),
  takeLatest(GET_GENRES, getGenresSaga),
  takeLatest(CREATE_GENRE, createGenreSaga),
  takeLatest(EDIT_GENRE, editGenreSaga),
];
