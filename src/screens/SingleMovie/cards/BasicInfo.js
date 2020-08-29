import React from "react";

import { formatDate } from "../../../services/dateTime.service";
import renderRatingStars from "../../../components/RatingStars";
import ProductComponent from "../ProductComponent";

const BasicInfoCard = ({ movie }) => {
  if (!movie) return "Loading...";

  return (
    <div className="movie_card">
      <div className="movie_card_left">
        <img src={`data:image/jpeg;base64,${movie.image}`} alt="cover" />
      </div>
      <div className="movie_card_right">
        <h1>{movie.title}</h1>
        <ul>
          <li>{formatDate(movie.releaseDate)}</li>
          <li>{movie.duration} min</li>
          {!!movie.genres.length && (
            <li>
              {movie.genres && movie.genres.map((item) => `${item.name} |`)}
            </li>
          )}
        </ul>
        <div className="movie_card_right__rating">
          {renderRatingStars(movie.rating)}
          <small>{movie.rating ? movie.rating.toFixed(2) : "0.00"}</small>
        </div>
        <div className="movie_card_right__review">
          <p>{movie.synopsys}</p>
        </div>
        <div className="movie_card_right__actors">
          <p>
            <b>Director: </b>
            {movie.director}
          </p>
          {!!movie.actors.length && (
            <p>
              <b>Actors: </b>
              {movie.actors.map(
                (item) => `${item.firstName} ${item.lastName} |`
              )}
            </p>
          )}
          <ProductComponent movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default BasicInfoCard;
