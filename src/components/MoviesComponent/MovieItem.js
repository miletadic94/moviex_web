import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../services/dateTime.service";

const GenreItem = ({ genre }) => <span>{genre.name} |</span>;

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <div className="info_section">
        <div className="movie_header">
          <img
            className="locandina"
            src={`data:image/jpeg;base64,${movie.image}`}
          />
          <h2>{movie.title}</h2>
          <h5>
            {formatDate(movie.releaseDate)}, {movie.director}
          </h5>
          <span className="minutes">{movie.duration} min</span>
          <p className="type">
            {movie.genres.map((item) => (
              <GenreItem key={item.id} genre={item} />
            ))}
          </p>
        </div>
        <div className="movie_desc">
          <p className="text">{movie.synopsys}</p>
          <Link to={`/single-movie/${movie.id}`}>Read more</Link>
        </div>
      </div>
      <div
        className="blur_back"
        style={{
          background: `url(data:image/jpeg;base64,${movie.image})`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default MovieItem;
