import React from "react";
import { reduxForm, Field } from "redux-form";
import InputField from "../../components/form-fields/InputField";
import { Button } from "../../components/Button";
import {
  required,
  emailValidation,
  phoneValidation,
  minLength2,
  maxLength32,
  minLength6,
  maxLength128,
} from "../../utils/validation";
import InputDate from "../../components/form-fields/InputDate";

const UserProfileForm = ({
  handleSubmit,
  onSubmit,
  initialValues,
  loading,
}) => {
  const isEdit = !!initialValues;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-6 col-xs-12">
          <Field
            name="firstName"
            type="text"
            validate={[required, minLength2, maxLength32]}
            component={InputField}
            label="First Name"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <Field
            name="lastName"
            type="text"
            validate={[required, minLength2, maxLength32]}
            component={InputField}
            label="LastName"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <Field
            name="email"
            type="email"
            validate={[required, emailValidation, maxLength32]}
            component={InputField}
            label="Email"
          />
        </div>
        {!isEdit && (
          <div className="col-lg-4 col-md-6">
            <Field
              name="password"
              type="password"
              validate={[required, minLength6, maxLength128]}
              component={InputField}
              label="Password"
            />
          </div>
        )}
        <div className="col-lg-4 col-md-6">
          <Field
            name="dateOfBirth"
            type="date"
            validate={required}
            component={InputDate}
            label="Date Of Birth"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <Field
            name="phoneNumber"
            type="tel"
            validate={[required, phoneValidation]}
            component={InputField}
            label="Phone Number"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <Field
            name="address"
            type="text"
            validate={required}
            component={InputField}
            label="Address"
          />
        </div>
      </div>
      <div className="mt-3">
        <Button type="submit" label="Edit My Profile" loading={loading} />
      </div>
    </form>
  );
};

export default reduxForm({ form: "userProfileForm", enableReinitialize: true })(
  UserProfileForm
);
