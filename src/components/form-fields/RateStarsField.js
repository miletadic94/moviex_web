import React, { useState } from "react";
import renderRatingStars from "../RatingStars";

const RateStarsField = ({ input, onSelect, meta: { touched, error } }) => {
  const [rate, setRate] = useState(0);
  const handleClick = (event) => {
    const { id } = event.target;
    setRate(id);
    onSelect(input.name, id);
  };
  return (
    <div className="rate text-center">
      {renderRatingStars(rate, handleClick)}
    </div>
  );
};

export default RateStarsField;
