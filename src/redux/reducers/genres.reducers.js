import {
  GET_GENRE_SUCCESS,
  GET_GENRES_SUCCESS,
} from "../actions/genres.actions";

const genreReducer = (state = null, { type, payload }) => {
  switch (type) {
    case GET_GENRE_SUCCESS:
      return payload;
    default:
      return state;
  }
};

const genresReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_GENRES_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export { genreReducer, genresReducer };
