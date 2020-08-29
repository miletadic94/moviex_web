export const ADD_REVIEW = "@MVI/ADD_REVIEW";
export const addReviewAction = (movieId, payload) => ({
  type: ADD_REVIEW,
  movieId,
  payload,
});
