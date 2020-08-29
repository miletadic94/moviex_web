import React from "react";

const CheckboxField = ({
  input,
  value,
  name,
  label,
  checked,
  disabled,
  onChange
  //   meta: { error, touched }
}) => {
  //   const hasError = touched && error;
  return (
    <div>
      <label htmlFor={value}>{label}</label>
      <input
        {...input}
        id={value}
        name={value}
        type="checkbox"
        disabled={disabled}
        defaultChecked={checked}
        onChange={onChange}
        // className={hasError ? "error" : ""}
      />
      {/* {hasError && <span>{error}</span>} */}
    </div>
  );
};

export default CheckboxField;
