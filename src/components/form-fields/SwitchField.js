import React from "react";

const SwitchField = ({
  input,
  name,
  label,
  meta: { error, warning, touched },
}) => {
  const hasError = touched && error;
  return (
    <div className="custom-control custom-switch">
      <input
        {...input}
        checked={!!input.value}
        aria-checked={!!input.value}
        type="checkbox"
        id={name}
        className="custom-control-input"
      />
      <label htmlFor={name} className="custom-control-label">
        {label}
      </label>
      {hasError && <label className="error-label">{error}</label>}
    </div>
  );
};

export default SwitchField;
