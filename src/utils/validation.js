export const required = (value) => (value ? undefined : "Required");

//char length
const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength2 = minLength(2);
export const minLength6 = minLength(6);
export const maxLength32 = maxLength(32);
export const maxLength128 = maxLength(128);
export const maxLength2048 = maxLength(2048);

//number value
export const number = (value) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
export const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;
export const minValue18 = minValue(18);

//email
export const emailValidation = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

export const phoneValidation = (value) =>
  value && !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(value)
    ? "Invalid phone number"
    : undefined;
