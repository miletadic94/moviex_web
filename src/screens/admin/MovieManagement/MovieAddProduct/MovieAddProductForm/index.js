import React from "react";
import { reduxForm, Field } from "redux-form";
import InputField from "../../../../../components/form-fields/InputField";
import { required } from "../../../../../utils/validation";
import { Button } from "../../../../../components/Button";

const MovieAddProductForm = ({ handleSubmit, initialValues, onSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <Field
            name="type"
            type="text"
            validate={required}
            component={InputField}
            label="Type"
          />
        </div>
        <div className="col-md-6">
          <Field
            name="barcode"
            type="text"
            validate={[required]}
            component={InputField}
            label="Barcode"
          />
        </div>
        <div className="col-md-6">
          <Field
            name="price"
            type="number"
            validate={[required]}
            component={InputField}
            label="Price"
          />
        </div>
        <div className="col-md-6">
          <Field
            name="quantity"
            type="number"
            validate={[required]}
            component={InputField}
            label="Quantity"
          />
        </div>
      </div>
      <Button type="submit" label="Add Product" />
    </form>
  );
};

export default reduxForm({
  form: "movieAddProductForm",
  enableReinitialize: true,
})(MovieAddProductForm);
