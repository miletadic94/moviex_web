import React from "react";
import { reduxForm, Field } from "redux-form";
import InputField from "../../../../components/form-fields/InputField";
import { Button } from "../../../../components/Button";
import {
  required,
  minLength2,
  maxLength32,
} from "../../../../utils/validation";
import TextAreaField from "../../../../components/form-fields/TextAreaField";
import InputDate from "../../../../components/form-fields/InputDate";

const ActorForm = ({ handleSubmit, onSubmit, initialValues, loading }) => {
  const isEdit = !!initialValues;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row align-items-center">
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
            label="Last Name"
          />
        </div>
        <div className="col-md-12">
          <Field
            name="biography"
            type="text"
            component={TextAreaField}
            label="Biography"
          />
        </div>
        <div className="col-md-6">
          <Field
            name="dateOfBirth"
            type="date"
            component={InputDate}
            label="Date of Birth"
          />
        </div>
        <div className="col-md-6">
          <Field
            name="placeOfBirth"
            type="text"
            component={InputField}
            label="Place of Birth"
          />
        </div>
      </div>
      <div className="mt-3">
        <Button
          type="submit"
          label={isEdit ? "Edit Actor" : "Create Actor"}
          loading={loading}
        />
      </div>
    </form>
  );
};

export default reduxForm({ form: "actorForm", enableReinitialize: true })(
  ActorForm
);
