import React from "react";
import { DateTimePicker } from "react-widgets";

import Moment from "moment";
import momentLocalizer from "react-widgets-moment";

Moment.locale("en");
momentLocalizer();
const InputDate = ({
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
      <DateTimePicker
        containerClassName="input-date-container"
        onChange={input.onChange}
        format="DD/MM/YYYY"
        value={!input.value ? new Date() : new Date(input.value)}
        time={false}
      />
      {hasError && <label className="error-label">{error}</label>}
    </div>
  );
};

export default InputDate;
