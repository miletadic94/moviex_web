import React, { Fragment } from "react";

const MultipleSelect = ({
  name,
  options,
  input,
  label,
  meta: { touched, error },
}) => {
  const hasError = touched && error;

  if (options.length === 0) return null;

  return (
    <Fragment>
      <label for={name}>{label}</label>
      <select {...input} multiple className="form-control" id={name}>
        {options.map(({ id, label }) => (
          <option key={id} value={id}>
            {label}
          </option>
        ))}
      </select>
      {hasError && <label className="error-label">{error}</label>}
    </Fragment>
  );
};

export default MultipleSelect;
