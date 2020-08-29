export const GET_MOVIE = "@MVI/GET_MOVIE";
export const GET_MOVIE_SUCCESS = "@MVI/GET_MOVIE_SUCCESS";
export const getMovieAction = (id) => ({
  type: GET_MOVIE,
  id,
});

export const GET_MOVIES = "@MVI/GET_MOVIES";
export const GET_MOVIES_SUCCESS = "@MVI/GET_MOVIES_SUCCESS";
export const getMoviesAction = (title) => ({
  type: GET_MOVIES,
  title,
});

export const CREATE_MOVIE = "@MVI/CREATE_MOVIE";
export const CREATE_MOVIE_SUCCESS = "@MVI/CREATE_MOVIE_SUCCESS";
export const createMovieAction = (payload) => ({
  type: CREATE_MOVIE,
  payload,
});

export const EDIT_MOVIE = "@MVI/EDIT_MOVIE";
export const EDIT_MOVIE_SUCCESS = "@MVI/EDIT_MOVIE_SUCCESS";
export const editMovieAction = (id, payload) => ({
  type: EDIT_MOVIE,
  id,
  payload,
});

export const GET_MOVIE_PRODUCT = "@MVI/GET_MOVIE_PRODUCT";
export const GET_MOVIE_PRODUCT_SUCCESS = "@MVI/GET_MOVIE_PRODUCT_SUCCESS";
export const getMovieProductAction = (id) => ({
  type: GET_MOVIE_PRODUCT,
  id,
});

export const ADD_MOVIE_PRODUCT = "@MVI/ADD_MOVIE_PRODUCT";
export const ADD_MOVIE_PRODUCT_SUCCESS = "@MVI/ADD_MOVIE_PRODUCT_SUCCESS";
export const addMovieProductAction = (id, payload) => ({
  type: ADD_MOVIE_PRODUCT,
  id,
  payload,
});
