import React, { Fragment } from "react";
import { connect } from "react-redux";
import GenreForm from "../GenreForm";
import { createGenreAction } from "../../../../redux/actions/genres.actions";

const CreateGenre = ({ createGenreAction }) => {
  const handleSubmit = (data) => {
    createGenreAction(data);
  };
  return (
    <Fragment>
      <div className="row mt-4 mb-4">
        <div className="col-10">
          <h2>Create Genre</h2>
        </div>
      </div>
      <GenreForm onSubmit={handleSubmit} loading={false} />
    </Fragment>
  );
};

const mapDispatchToProps = {
  createGenreAction,
};

export default connect(null, mapDispatchToProps)(CreateGenre);
