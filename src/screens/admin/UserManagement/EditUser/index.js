import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import UserForm from "../UserForm";
import {
  getUserAction,
  editUserAction,
} from "../../../../redux/actions/users.actions";

const EditUser = ({ getUserAction, editUserAction, initialValues, match }) => {
  useEffect(() => {
    getUserAction(match.params.id);
  }, []);

  const handleSubmit = (data) => {
    editUserAction(match.params.id, data);
  };

  if (!initialValues) return null;

  return (
    <Fragment>
      <div className="row mt-4 mb-4">
        <h2 className="col-10">Edit User</h2>
        <h2 className="col-2 text-right">#{initialValues.id}</h2>
      </div>
      <div className="row">
        <div className="col-lg-10 col-xl mx-auto">
          <UserForm
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
  initialValues: state.user,
});

const mapDispatchToProps = {
  getUserAction,
  editUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
