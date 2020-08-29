import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {
  getMovieProductAction,
  addMovieProductAction,
} from "../../../../redux/actions/movies.actions";
import MovieAddProductForm from "./MovieAddProductForm";

export const MovieAddProduct = ({
  getMovieProductAction,
  addMovieProductAction,
  initialValues,
  match,
}) => {
  useEffect(() => {
    getMovieProductAction(match.params.id);
  }, []);

  const handleSubmit = (data) => {
    addMovieProductAction(match.params.id, data);
  };

  if (!initialValues) return null;

  return (
    <Fragment>
      <div className="row mt-4 mb-4">
        <div className="col-9">
          <h2>Add Product</h2>
        </div>
        <h2 className="col-3 text-right">Movie id #{initialValues.id}</h2>
      </div>
      <MovieAddProductForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        loading={false}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  initialValues: state.movieProduct,
});

const mapDispatchToProps = { getMovieProductAction, addMovieProductAction };

export default connect(mapStateToProps, mapDispatchToProps)(MovieAddProduct);
