import React from "react";
import { reduxForm, Field } from "redux-form";
import TextAreaField from "../../../components/form-fields/TextAreaField";
import { Button } from "../../../components/Button";
import { required } from "../../../utils/validation";
import RateStarsField from "../../../components/form-fields/RateStarsField";

const ReviewForm = ({ open, handleSubmit, onSubmit, onCancel, change }) => {
  return (
    <div style={{ display: open ? "block" : "none" }} className="form-popup">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <Field
          name="comment"
          type="text"
          validate={[required]}
          component={TextAreaField}
          placeholder="Comment"
        />
        <Field
          name="rate"
          type="text"
          validate={[required]}
          onSelect={change}
          component={RateStarsField}
          placeholder="Rate"
        />
        <div className="row">
          <div className="col-md-6">
            <Button label="Rate" type="submit" />
          </div>
          <div className="col-md-6">
            <Button label="Cancel" type="button" onClick={onCancel} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "reviewForm",
  enableReinitialize: true,
})(ReviewForm);
