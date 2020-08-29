import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import ActorForm from "../ActorForm";
import {
  getActorAction,
  editActorAction,
} from "../../../../redux/actions/actors.actions";

const EditActor = ({
  getActorAction,
  editActorAction,
  initialValues,
  match,
}) => {
  useEffect(() => {
    getActorAction(match.params.id);
  }, []);

  const handleSubmit = (data) => {
    editActorAction(match.params.id, data);
  };

  if (!initialValues) return null;

  return (
    <Fragment>
      <div className="row mt-4 mb-4">
        <h2 className="col-10">Edit Actor</h2>
        <h2 className="col-2 text-right">#{initialValues.id}</h2>
      </div>
      <div className="row">
        <div className="col-lg-10 col-xl mx-auto">
          <ActorForm
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
  initialValues: state.actor,
});

const mapDispatchToProps = {
  getActorAction,
  editActorAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditActor);
