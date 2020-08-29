import React from "react";
import { reduxForm, Field } from "redux-form";
import InputField from "../../../components/form-fields/InputField";
import InputDate from "../../../components/form-fields/InputDate";
import { Button } from "../../../components/Button";
import {
  required,
  emailValidation,
  phoneValidation,
  minLength6,
  minLength2,
  maxLength32,
  maxLength128,
} from "../../../utils/validation";
import { Link } from "react-router-dom";

const Register = ({ handleSubmit, onSubmit, isLoading }) => {
  return (
    <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6">
          <Field
            name="firstName"
            type="text"
            validate={[required, minLength2, maxLength32]}
            component={InputField}
            label="First Name"
          />
        </div>
        <div className="col-md-6">
          <Field
            name="lastName"
            type="text"
            validate={[required, minLength2, maxLength32]}
            component={InputField}
            label="LastName"
          />
        </div>
        <div className="col-md-6">
          <Field
            name="email"
            type="email"
            validate={[required, emailValidation, maxLength32]}
            component={InputField}
            label="Email"
          />
        </div>
        <div className="col-md-6">
          <Field
            name="password"
            type="password"
            validate={[required, minLength6, maxLength128]}
            component={InputField}
            label="Password"
          />
        </div>
        <div className="col-md-6">
          <Field
            name="dateOfBirth"
            type="date"
            validate={required}
            component={InputDate}
            label="Date Of Birth"
          />
        </div>
        <div className="col-md-6">
          <Field
            name="phoneNumber"
            type="tel"
            validate={[required, phoneValidation]}
            component={InputField}
            label="Phone Number"
          />
        </div>
      </div>
      <Field
        name="address"
        type="text"
        validate={required}
        component={InputField}
        label="Address"
      />
      <Button type="submmit" label="Register" loading={isLoading} />
      <Link to="/login" className="d-block text-center mt-2 medium">
        Login
      </Link>
    </form>
  );
};
export default reduxForm({ form: "register" })(Register);
