import React from "react";
import { reduxForm, Field } from "redux-form";
import InputField from "../../../components/form-fields/InputField";
import { Button } from "../../../components/Button";
import {
  required,
  emailValidation,
  maxLength32,
} from "../../../utils/validation";

const ForgotPasswordForm = ({ handleSubmit, onSubmit }) => {
  return (
    <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="email"
        type="text"
        validate={[required, emailValidation, maxLength32]}
        component={InputField}
        label="Email"
      />
      <Button type="submit" label="Send me email!" />
    </form>
  );
};

export default reduxForm({ form: "forgotPasswordForm" })(ForgotPasswordForm);
