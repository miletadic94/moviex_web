import React from "react";

const SelectField = ({
  name,
  options,
  input,
  label,
  meta: { touched, error },
}) => {
  const hasError = touched && error;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select {...input} className="form-control" id={name}>
        {options.map(({ id, label }) => (
          <option key={id} value={id}>
            {label}
          </option>
        ))}
      </select>
      {hasError && <label className="error-label">{error}</label>}
    </div>
  );
};

export default SelectField;
