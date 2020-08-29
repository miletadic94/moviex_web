import React from "react";

const renderRatingStars = (rate, onClick) => {
  const ratingStars = [];

  const getStarClass = (rate, i) => {
    // start with empty star
    let starClass = "far fa-star";
    let j = i - 0.5;
    if (i <= rate) {
      starClass = "fas fa-star";
    }
    if (j === rate) {
      starClass = "fas fa-star-half-alt";
    }
    return starClass;
  };

  for (let i = 1; i <= 5; i++) {
    const starClass = getStarClass(rate, i);
    ratingStars.push(
      <i key={i} id={i} onClick={onClick} className={starClass} />
    );
  }
  return ratingStars;
};

export default renderRatingStars;
