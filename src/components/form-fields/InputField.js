import React from "react";

const InputField = ({
  name,
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => {
  const hasError = touched && error;
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        {...input}
        className={`form-control${hasError ? " error" : ""}`}
        type={type}
        name={name}
        placeholder={placeholder || label}
      />
      {hasError && <label className="error-label">{error}</label>}
    </div>
  );
};

export default InputField;
