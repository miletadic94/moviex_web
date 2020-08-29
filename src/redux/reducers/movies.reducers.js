import {
  GET_MOVIE_SUCCESS,
  GET_MOVIES_SUCCESS,
  GET_MOVIE_PRODUCT_SUCCESS,
  GET_MOVIE,
} from "../actions/movies.actions";

const movieReducer = (state = null, { type, payload }) => {
  switch (type) {
    case GET_MOVIE:
      return null;
    case GET_MOVIE_SUCCESS:
      return payload;
    default:
      return state;
  }
};

const moviesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_MOVIES_SUCCESS:
      return payload;
    default:
      return state;
  }
};

const movieProductReducer = (state = null, { type, payload }) => {
  switch (type) {
    case GET_MOVIE_PRODUCT_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export { movieReducer, moviesReducer, movieProductReducer };
