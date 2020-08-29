import React from "react";
import { reduxForm, Field } from "redux-form";
import InputField from "../../../../components/form-fields/InputField";
import TextAreaField from "../../../../components/form-fields/TextAreaField";
import { Button } from "../../../../components/Button";
import { required } from "../../../../utils/validation";
import ImageUpload from "../../../../components/form-fields/ImageUpload";
import MultiSelect from "../../../../components/form-fields/MultiSelect";
import InputDate from "../../../../components/form-fields/InputDate";

const MovieForm = ({
  handleSubmit,
  initialValues,
  onSubmit,
  genres,
  actors,
  change,
}) => {
  const isEdit = !!initialValues;
  if (genres.length === 0 || actors.length === 0) return null;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row align-items-center mb-5">
        {isEdit && (
          <div className="col-md-3">
            <ImageUpload id={initialValues.id} value={initialValues.image} />
          </div>
        )}
        <div className={`col-md-${isEdit ? "6" : "9"}`}>
          <Field
            name="title"
            type="text"
            validate={required}
            component={InputField}
            label="Title"
          />
        </div>
        <div className="col-md-3">
          <Field
            name="youtubeLink"
            type="text"
            component={InputField}
            label="Youtube Link"
          />
        </div>
        <div className="col-md-12">
          <Field
            name="synopsys"
            type="text"
            validate={[required]}
            component={TextAreaField}
            label="Synopsys"
          />
        </div>
        <div className="col-md-4">
          <Field
            name="releaseDate"
            type="date"
            validate={[required]}
            component={InputDate}
            label="Release date"
          />
        </div>
        <div className="col-md-4">
          <Field
            name="duration"
            type="number"
            validate={[required]}
            component={InputField}
            label="Duration"
          />
        </div>
        <div className="col-md-4">
          <Field
            name="genres"
            options={genres.map((item) => ({
              id: item.id,
              label: item.name,
            }))}
            validate={[required]}
            onSelect={change}
            component={MultiSelect}
            label="Genres"
          />
        </div>
        <div className="col-md-8">
          <Field
            name="actors"
            options={actors.map((item) => ({
              id: item.id,
              label: `${item.firstName} ${item.lastName}`,
            }))}
            onSelect={change}
            component={MultiSelect}
            label="Actors"
          />
        </div>
        <div className="col-md-4">
          <Field
            name="director"
            validate={[required]}
            component={InputField}
            label="Director"
          />
        </div>
      </div>
      <Button type="submit" label={isEdit ? "Edit Movie" : "Create Movie"} />
    </form>
  );
};

export default reduxForm({ form: "movieForm", enableReinitialize: true })(
  MovieForm
);
