import React from "react";
import { connect } from "react-redux";

import ResetPasswordForm from "./ResetPasswordForm";
import { resetPasswordAction } from "../../../redux/actions/auth.actions";

import Alert from "../../../components/Alert";

const ResetPassword = ({ resetPasswordAction, isLoading, match }) => {
  const handleSubmit = (data) => {
    const { repeatPassword, ...formData } = data;
    resetPasswordAction({
      ...formData,
      forgotPasswordToken: match.params.tokenId,
    });
  };

  return (
    <div className="login-container row">
      <div className="col-lg-6 offset-lg-3">
        <h5 className="title">Reset Password</h5>
        <ResetPasswordForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
      <Alert />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
  resetPasswordAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
