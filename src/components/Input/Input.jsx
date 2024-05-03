import React from "react";

const Input = ({
  name,
  type,
  value,
  onChange,
  className,
  placeholder,
  required,
  error,
}) => {

  return (
    <input
      name={name}
      type={type}
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;