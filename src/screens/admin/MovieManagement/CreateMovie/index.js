import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieForm from "../MovieForm";
import { createMovieAction } from "../../../../redux/actions/movies.actions";
import { getGenresAction } from "../../../../redux/actions/genres.actions";
import { getActorsAction } from "../../../../redux/actions/actors.actions";

const CreateMovie = ({
  createMovieAction,
  getGenresAction,
  getActorsAction,
  genres,
  actors,
}) => {
  useEffect(() => {
    getGenresAction();
    getActorsAction();
  }, []);

  const handleSubmit = (data) => {
    createMovieAction(data);
  };

  if (!genres) return null;

  return (
    <div className="container">
      <h2 className="mt-3 mb-5">Create Movie</h2>
      <MovieForm
        onSubmit={handleSubmit}
        genres={genres}
        actors={actors}
        loading={false}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  genres: state.genres,
  actors: state.actors,
});

const mapDispatchToProps = {
  getGenresAction,
  createMovieAction,
  getActorsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMovie);
