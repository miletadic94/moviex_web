import React from "react";
import { connect } from "react-redux";

import RegisterForm from "./RegisterForm";
import { registerAction } from "../../../redux/actions/auth.actions";

import Alert from "../../../components/Alert";

const Register = ({ registerAction, isLoading }) => {
  const handleSubmit = (data) => {
    registerAction(data);
  };
  return (
    <div className="row">
      <div className="col-lg-6 offset-lg-3">
        <h5 className="title">Register</h5>
        <RegisterForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
      <Alert />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
  registerAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
