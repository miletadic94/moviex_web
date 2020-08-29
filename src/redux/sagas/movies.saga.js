import { put, takeLatest } from "redux-saga/effects";
import {
  GET_MOVIE,
  GET_MOVIES,
  GET_MOVIE_SUCCESS,
  GET_MOVIES_SUCCESS,
  CREATE_MOVIE,
  EDIT_MOVIE,
  GET_MOVIE_PRODUCT_SUCCESS,
  GET_MOVIE_PRODUCT,
  ADD_MOVIE_PRODUCT,
} from "../actions/movies.actions";
import {
  getMovie,
  getMovies,
  postMovie,
  putMovie,
} from "../../services/movie.service";
import { getProduct, addProduct } from "../../services/product.service";
import errorHandler from "./errorHandler";
import successHandler from "./successHandler";
import { history } from "../../store";

function* getMovieSaga({ id }) {
  try {
    const movie = yield getMovie(id);
    yield put({
      type: GET_MOVIE_SUCCESS,
      payload: movie,
    });
  } catch (error) {
    yield errorHandler(error);
  }
}

function* getMoviesSaga({ title = "" }) {
  try {
    const movies = yield getMovies(title);
    yield put({
      type: GET_MOVIES_SUCCESS,
      payload: movies,
    });
  } catch (error) {
    yield errorHandler(error);
  }
}

function* createMovieSaga({ payload }) {
  try {
    yield postMovie(payload);
    yield successHandler("Movie Created");
    history.goBack();
  } catch (error) {
    yield errorHandler(error);
  }
}

function* editMovieSaga({ id, payload }) {
  try {
    yield putMovie(id, payload);
    yield successHandler("Movie Updated");
    yield cleanMovieState();
    history.goBack();
  } catch (error) {
    yield errorHandler(error);
  }
}

function* getMovieProductSaga({ id }) {
  try {
    const movieProduct = yield getProduct(id);
    yield put({
      type: GET_MOVIE_PRODUCT_SUCCESS,
      payload: movieProduct,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: GET_MOVIE_PRODUCT_SUCCESS,
      payload: null,
    });
  }
}

function* addMovieProductSaga({ id, payload }) {
  try {
    yield addProduct(id, payload);
    yield successHandler("Product Updated");
    history.goBack();
  } catch (error) {
    yield errorHandler(error);
  }
}

// helper functions
function* cleanMovieState() {
  yield put({
    type: GET_MOVIE_SUCCESS,
    payload: null,
  });
}

export default [
  takeLatest(GET_MOVIE, getMovieSaga),
  takeLatest(GET_MOVIES, getMoviesSaga),
  takeLatest(CREATE_MOVIE, createMovieSaga),
  takeLatest(EDIT_MOVIE, editMovieSaga),
  takeLatest(GET_MOVIE_PRODUCT, getMovieProductSaga),
  takeLatest(ADD_MOVIE_PRODUCT, addMovieProductSaga),
];
