import React, { useState, useEffect } from "react";

const Select = ({ options, defaultValue = 0, onSelect, required }) => {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange(event) {
    const eventValue = Number(event.target.value);
    if (!!eventValue && typeof eventValue === "number") {
      setValue(eventValue);
      onSelect(eventValue);
    }
  }

  if (options.length === 0) return null;
  return (
    <div className="form-group">
      <select
        className="form-control"
        value={value}
        onChange={handleValueChange}
      >
        {!required && <option value={0} />}
        {options.map(({ value, label, disabled }, index) => (
          <option key={index} disabled={disabled} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
