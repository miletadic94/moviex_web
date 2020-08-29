export const GET_GENRE = "@GNR/GET_GENRE";
export const GET_GENRE_SUCCESS = "@GNR/GET_GENRE_SUCCESS";
export const getGenreAction = (id) => ({
  type: GET_GENRE,
  id,
});

export const GET_GENRES = "@GNR/GET_GENRES";
export const GET_GENRES_SUCCESS = "@GNR/GET_GENRES_SUCCESS";
export const getGenresAction = () => ({
  type: GET_GENRES,
});

export const CREATE_GENRE = "@GNR/CREATE_GENRE";
export const CREATE_GENRE_SUCCESS = "@GNR/CREATE_GENRE_SUCCESS";
export const createGenreAction = (payload) => ({
  type: CREATE_GENRE,
  payload,
});

export const EDIT_GENRE = "@GNR/EDIT_GENRE";
export const EDIT_GENRE_SUCCESS = "@GNR/EDIT_GENRE_SUCCESS";
export const editGenreAction = (id, payload) => ({
  type: EDIT_GENRE,
  id,
  payload,
});
