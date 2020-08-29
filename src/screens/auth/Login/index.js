import React from "react";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import { loginAction } from "../../../redux/actions/auth.actions";

import Alert from "../../../components/Alert";

const Login = ({ loginAction, isLoading }) => {
  const handleSubmit = (data) => {
    loginAction(data);
  };
  return (
    <div className="login-container row">
      <div className="col-lg-6 offset-lg-3">
        <h5 className="title">Login</h5>
        <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
      <Alert />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
  loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
