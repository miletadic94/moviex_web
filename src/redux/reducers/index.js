import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth.reducer";
import isLoadingReducer from "./isLoading.reducer";
import alertReducer from "./alert.reducer";
import { userReducer, usersReducer } from "./users.reducers";
import {
  moviesReducer,
  movieReducer,
  movieProductReducer,
} from "./movies.reducers";
import { genreReducer, genresReducer } from "./genres.reducers";
import { actorReducer, actorsReducer } from "./actors.reducer";
import { LOGOUT } from "../actions/auth.actions";
import { history } from "../../store";
import shoppingCartReducer from "./shoppingCart.reducer";
import {
  deleteUserId,
  deleteUserToken,
} from "../../services/localStorage.service";
import { receiptReducer, receiptsReducer } from "./receipts.reducer";

const appReducer = combineReducers({
  currentUser: authReducer,
  isLoading: isLoadingReducer,
  alert: alertReducer,
  shoppingCart: shoppingCartReducer,
  user: userReducer,
  users: usersReducer,
  movie: movieReducer,
  movies: moviesReducer,
  movieProduct: movieProductReducer,
  genre: genreReducer,
  genres: genresReducer,
  actor: actorReducer,
  actors: actorsReducer,
  receipt: receiptReducer,
  receipts: receiptsReducer,
  form: formReducer,
});

export default (state, action) => {
  if (action.type === LOGOUT) {
    (state.currentUser = undefined),
      (state.isLoading = undefined),
      (state.alert = undefined),
      (state.user = undefined),
      (state.users = undefined),
      (state.movie = undefined),
      (state.movies = undefined),
      (state.movieProduct = undefined),
      (state.genre = undefined),
      (state.genres = undefined),
      (state.actor = undefined),
      (state.actors = undefined),
      (state.receipt = undefined);
    state.receipts = undefined;
    state.form = undefined;
    deleteUserId();
    deleteUserToken();
    history.push("/login");
  }

  return appReducer(state, action);
};
