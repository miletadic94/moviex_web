import React, { useState } from "react";
import { Button } from "../../../components/Button";
import ReviewForm from "./ReviewForm";
import renderRatingStars from "../../../components/RatingStars";
import { formatDate } from "../../../services/dateTime.service";

const CommentButton = ({ movieId, addReview }) => {
  const [openForm, setOpenForm] = useState(false);
  const handleSubmit = (data) => {
    addReview(movieId, data);
  };
  return (
    <div className="comment-btn mb-3">
      <ReviewForm
        open={openForm}
        onSubmit={handleSubmit}
        onCancel={() => setOpenForm(false)}
      />
      {!openForm && (
        <Button label="Comment" onClick={() => setOpenForm(!openForm)}></Button>
      )}
    </div>
  );
};

const Review = ({ display, movieId, addReview, reviews }) => {
  return (
    <div className="movie_card overflow-auto">
      {reviews.map((item) => (
        <div className="row align-items-center border-bottom border-secondary m-3">
          <div className="col-md-2">
            <b>
              {item.user.firstName} {item.user.lastName}
              <p>
                <small>{formatDate(item.createdAt)}</small>
              </p>
            </b>
          </div>
          <div className="col-md-6">{item.comment}</div>
          <div className="col-md-4 text-center">
            <div className="rate">{renderRatingStars(item.rate)}</div>
          </div>
        </div>
      ))}
      {display && <CommentButton movieId={movieId} addReview={addReview} />}
    </div>
  );
};

export default Review;
