import React from "react";
import { reduxForm, Field } from "redux-form";
import InputField from "../../../../components/form-fields/InputField";
import { Button } from "../../../../components/Button";
import {
  required,
  minLength2,
  maxLength32,
} from "../../../../utils/validation";

const GenreForm = ({ handleSubmit, onSubmit, initialValues, loading }) => {
  const isEdit = !!initialValues;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row align-items-center">
        <div className="col">
          <Field
            name="name"
            type="text"
            validate={[required, minLength2, maxLength32]}
            component={InputField}
            label="Name"
          />
        </div>
      </div>
      <div className="mt-3">
        <Button
          type="submit"
          label={isEdit ? "Edit Genre" : "Create Genre"}
          loading={loading}
        />
      </div>
    </form>
  );
};

export default reduxForm({ form: "genreForm", enableReinitialize: true })(
  GenreForm
);
