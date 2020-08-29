import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import GenreForm from "../GenreForm";
import {
  getGenreAction,
  editGenreAction,
} from "../../../../redux/actions/genres.actions";

const EditGenre = ({
  getGenreAction,
  editGenreAction,
  initialValues,
  match,
}) => {
  useEffect(() => {
    getGenreAction(match.params.id);
  }, []);

  const handleSubmit = (data) => {
    editGenreAction(match.params.id, data);
  };

  if (!initialValues) return null;

  return (
    <Fragment>
      <div className="row mt-4 mb-4">
        <h2 className="col-10">Edit Genre</h2>
        <h2 className="col-2 text-right">#{initialValues.id}</h2>
      </div>
      <div className="row">
        <div className="col-lg-10 col-xl mx-auto">
          <GenreForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
            loading={false}
          />
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  initialValues: state.genre,
});

const mapDispatchToProps = {
  getGenreAction,
  editGenreAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditGenre);
