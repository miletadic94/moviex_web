import React, { useEffect, useState } from "react";
import Multiselect from "react-widgets/lib/Multiselect";
import "react-widgets/dist/css/react-widgets.css";
const MultiSelect = ({
  name,
  input,
  label,
  options,
  onSelect,
  meta: { touched, error },
}) => {
  if (!options) return null;
  const [values, setValues] = useState(input.value || []);

  const hasError = touched && error;

  const handleInputChange = (e) => {
    const values = e && e.map((item) => item.id || id);
    onSelect(input.name, values);
    setValues(values);
  };

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <Multiselect
        {...input}
        onBlur={() => input.onBlur()}
        value={values}
        onChange={handleInputChange}
        containerClassName={`form-control${hasError ? " error" : ""}`}
        data={options}
        valueField="id"
        textField="label"
        caseSensitive={false}
        minLength={3}
        filter="contains"
      />
    </div>
  );
};

export default MultiSelect;
