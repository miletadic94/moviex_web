import React from "react";
import { connect } from "react-redux";

import ForgotPasswordForm from "./ForgotPasswordForm";
import { forgotPasswordAction } from "../../../redux/actions/auth.actions";

import Alert from "../../../components/Alert";

const Login = ({ forgotPasswordAction, isLoading }) => {
  const handleSubmit = (data) => {
    forgotPasswordAction(data);
  };
  return (
    <div className="login-container row">
      <div className="col-lg-6 offset-lg-3">
        <h5 className="title">Forgot Password?</h5>
        <ForgotPasswordForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
      <Alert />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
  forgotPasswordAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
