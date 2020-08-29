import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";
import { GET_MOVIES_SUCCESS } from "../../redux/actions/movies.actions";

export const MoviesComponent = ({ movies, cleanMovieState }) => {
  useEffect(() => {
    return () => {
      cleanMovieState();
    };
  }, []);
  if (movies.length === 0)
    return (
      <div className="pt-5">
        <h4 className="text-center">No Movie Was Found That Day :(</h4>
      </div>
    );

  return (
    <div className="movie-container">
      {movies.map((item) => (
        <MovieItem key={item.id} movie={item} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  cleanMovieState: () => dispatch({ type: GET_MOVIES_SUCCESS, payload: [] }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesComponent);
