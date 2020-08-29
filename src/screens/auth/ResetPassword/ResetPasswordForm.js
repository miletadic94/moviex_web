import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import InputField from "../../../components/form-fields/InputField";
import { Button } from "../../../components/Button";
import { required, minLength6, maxLength128 } from "../../../utils/validation";

const ResetPasswordForm = ({ handleSubmit, onSubmit }) => {
  return (
    <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="password"
        type="password"
        validate={[required, minLength6, maxLength128]}
        component={InputField}
        label="New Password"
      />
      <Field
        name="repeatPassword"
        type="password"
        validate={[required, minLength6, maxLength128]}
        component={InputField}
        label="Repeat Password"
      />
      <Button type="submit" label="Reset Password" />
      <Link to="/login" className="d-block text-center mt-2 medium">
        Login
      </Link>
    </form>
  );
};

const validate = (values) => {
  const errors = {};
  if (values.password !== values.repeatPassword) {
    errors.repeatPassword = "Password doesn't match!";
  }
  return errors;
};

export default reduxForm({ form: "resetPasswordForm", validate })(
  ResetPasswordForm
);
