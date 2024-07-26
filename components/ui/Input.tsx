import React, { InputHTMLAttributes } from "react";

interface InputPropType {
  className: string;
  placeholder: string;
  value: string;
  type: string;
  required: boolean;
  style: string;
  onChange: () => {};
  onInput: () => {};
}

function Input(props: {
  name?: string;
  className: string;
  placeholder?: string;
  value?: string | number;
  type: string;
  required?: boolean;
  onChange?: () => void;
  onInput?: () => void;
}) {
  const {
    name = "",
    className = "",
    placeholder = "",
    value = "",
    type = "text",
    required = true,
    onChange = () => {},
    onInput = () => {},
  } = props;

  return (
    <input
      name={name}
      type={`${type}`}
      value={value}
      placeholder={placeholder}
      className={className}
      required={required}
      onChange={onChange}
      onInput={onInput}
    />
  );
}

export default Input;
