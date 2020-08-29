import React from "react";
import YouTube from "react-youtube";

const Trailer = ({ trailerLink }) => {
  return (
    <div className="movie_card">
      <YouTube
        videoId={trailerLink} // defaults -> null
        className="trailer-container" // defaults -> null
        containerClassName="trailer-container" // defaults -> ''
      />
    </div>
  );
};

export default Trailer;
