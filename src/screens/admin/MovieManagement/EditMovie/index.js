import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import MovieForm from "../MovieForm";
import {
  getMovieAction,
  editMovieAction,
} from "../../../../redux/actions/movies.actions";
import { getGenresAction } from "../../../../redux/actions/genres.actions";
import { getActorsAction } from "../../../../redux/actions/actors.actions";

let formatInitalValues = (movie) => {
  if (!movie) return null;
  const { reviews, rating, ...initialValues } = movie;
  if (initialValues.genres) {
    initialValues.genres = initialValues.genres.map((item) => item.id);
  }
  if (initialValues.actors) {
    initialValues.actors = initialValues.actors.map((item) => item.id);
  }
  return initialValues;
};

const EditMovie = ({
  getMovieAction,
  getGenresAction,
  getActorsAction,
  editMovieAction,
  initialValues,
  image,
  genres,
  actors,
  match,
}) => {
  useEffect(() => {
    getMovieAction(match.params.id);
    getGenresAction();
    getActorsAction();
  }, []);

  const handleSubmit = (data) => {
    const { image, ...formData } = data;
    editMovieAction(match.params.id, formData);
  };

  if (!initialValues) return null;

  return (
    <Fragment>
      <div className="row mt-4 mb-4">
        <h2 className="col-10">Edit Movie</h2>
        <h2 className="col-2 text-right">#{initialValues.id}</h2>
      </div>
      <div className="row">
        <div className="col-lg-10 col-xl mx-auto">
          <MovieForm
            initialValues={initialValues}
            image={image}
            onSubmit={handleSubmit}
            genres={genres}
            actors={actors}
          />
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  initialValues: formatInitalValues(state.movie),
  image: state?.movie?.image,
  genres: state.genres,
  actors: state.actors,
});

const mapDispatchToProps = {
  getMovieAction,
  getGenresAction,
  getActorsAction,
  editMovieAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie);
