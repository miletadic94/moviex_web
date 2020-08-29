import { all } from "redux-saga/effects";
import authAsync from "./auth.saga";
import usersAsync from "./users.saga";
import moviesAsync from "./movies.saga";
import genresAsync from "./genres.saga";
import actorsAsync from "./actor.saga";
import reviewsAsync from "./review.saga";
import receiptsAsync from "./receipt.saga";

export default function* rootSaga() {
  yield all([
    ...authAsync,
    ...usersAsync,
    ...moviesAsync,
    ...genresAsync,
    ...actorsAsync,
    ...reviewsAsync,
    ...receiptsAsync,
  ]);
}
