import React, { Fragment } from "react";
import { connect } from "react-redux";
import UserForm from "../UserForm";
import { createUserAction } from "../../../../redux/actions/users.actions";

const CreateUser = ({ createUserAction }) => {
  const handleSubmit = (data) => {
    createUserAction(data);
  };
  return (
    <Fragment>
      <div className="row mt-4 mb-4">
        <div className="col-10">
          <h2>Create User</h2>
        </div>
      </div>
      <UserForm onSubmit={handleSubmit} loading={false} />
    </Fragment>
  );
};

const mapDispatchToProps = {
  createUserAction,
};

export default connect(null, mapDispatchToProps)(CreateUser);
