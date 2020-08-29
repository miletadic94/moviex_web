import React, { Fragment } from "react";
import { connect } from "react-redux";
import ActorForm from "../ActorForm";
import { createActorAction } from "../../../../redux/actions/actors.actions";

const CreateActor = ({ createActorAction }) => {
  const handleSubmit = (data) => {
    createActorAction(data);
  };
  return (
    <Fragment>
      <div className="row mt-4 mb-4">
        <div className="col-10">
          <h2>Create Actor</h2>
        </div>
      </div>
      <ActorForm onSubmit={handleSubmit} loading={false} />
    </Fragment>
  );
};

const mapDispatchToProps = {
  createActorAction,
};

export default connect(null, mapDispatchToProps)(CreateActor);
