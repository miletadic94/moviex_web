import { put, takeLatest } from "redux-saga/effects";
import { ADD_REVIEW } from "../actions/review.actions";
import { postReview } from "../../services/review.service";
import errorHandler from "./errorHandler";
import successHandler from "./successHandler";

function* addReviewSaga({ movieId, payload }) {
  try {
    yield postReview(movieId, payload);
    yield successHandler("Review Added");
  } catch (error) {
    yield errorHandler(error);
  }
}

export default [takeLatest(ADD_REVIEW, addReviewSaga)];
