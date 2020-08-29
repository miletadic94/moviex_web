import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import InputField from "../../../components/form-fields/InputField";
import { Button } from "../../../components/Button";
import {
  required,
  emailValidation,
  minLength6,
  maxLength32,
  maxLength128,
} from "../../../utils/validation";

const Login = ({ handleSubmit, onSubmit, isLoading }) => {
  return (
    <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="email"
        type="text"
        validate={[required, emailValidation, maxLength32]}
        component={InputField}
        label="Email"
      />
      <Field
        name="password"
        type="password"
        validate={[required, minLength6, maxLength128]}
        component={InputField}
        label="Password"
      />
      <Button type="submit" label="Login" loading={isLoading} />
      <Link to="/register" className="d-block text-center mt-2 medium">
        Register
      </Link>
      <Link to="/forgot-password" className="d-block text-center mt-2 medium">
        Forgot Password?
      </Link>
    </form>
  );
};

export default reduxForm({ form: "login" })(Login);
