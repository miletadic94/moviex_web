import React, { Fragment } from "react";
import { connect } from "react-redux";
import UserProfileForm from "./UserProfileForm";
import { editUserAction } from "../../redux/actions/users.actions";

const UserProfile = ({ user, editUserAction }) => {
  const handleSubmit = (data) => {
    editUserAction(user.id, data);
  };
  if (!user) return null;
  return (
    <Fragment>
      <div className="row mt-4 mb-4">
        <div className="col-10">
          <h2>
            Welcome {user.firstName} {user.lastName}
          </h2>
        </div>
      </div>
      <UserProfileForm
        onSubmit={handleSubmit}
        initialValues={user}
        loading={false}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.currentUser,
});

const mapDispatchToProps = {
  editUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
