import React from "react";

const Input = ({
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
  error,
}) => {
  return (
    <input
      name={name}
      type={type}
      className="form-control"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      style={error ? { backgroundColor: "rgba(244, 68, 68, 0.203)" } : {}}
    />
  );
};

export default Input;
