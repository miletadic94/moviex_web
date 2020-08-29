import React from "react";
import CheckboxField from "./Checkbox";

const CheckboxGroup = ({ label, name, options, input, meta }) => (
  <div>
    <label>{label}</label>
    {options.map((option, index) => (
      <div className="checkbox" key={index}>
        <CheckboxField
          name={name}
          label={option.label}
          value={option.value}
          checked={input.value.indexOf(option.value) !== -1}
          onChange={event => {
            const newValue = [...input.value];
            if (event.target.checked) {
              newValue.push(option.value);
            } else {
              newValue.splice(newValue.indexOf(option.value), 1);
            }

            return input.onChange(newValue);
          }}
        />
      </div>
    ))}
  </div>
);

export default CheckboxGroup;
