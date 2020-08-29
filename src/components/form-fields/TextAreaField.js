import React from "react";

const TextAreaField = ({
  name,
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => {
  const hasError = touched && error;
  return (
    <div className="form-group mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <textarea
        {...input}
        className={`form-control${hasError ? " error" : ""}`}
        type={type}
        name={name}
        rows={4}
        placeholder={placeholder || label}
      />
      {hasError && <label className="error-label">{error}</label>}
    </div>
  );
};

export default TextAreaField;
